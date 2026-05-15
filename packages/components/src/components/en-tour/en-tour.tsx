import { Component, Prop, Event, EventEmitter, Host, h, State, Watch } from '@stencil/core';

export interface TourStep {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}

/**
 * Tour de onboarding guiado com imagem e navegação por passos.
 */
@Component({
  tag: 'en-tour',
  styleUrl: 'en-tour.css',
  shadow: true,
})
export class EnTour {
  /** Lista de passos do tour */
  @Prop() steps: TourStep[] = [];

  /** Passo atual (base 0) */
  @Prop({ mutable: true }) currentStep: number = 0;

  /** Visível */
  @Prop({ mutable: true, reflect: true }) open: boolean = false;

  /** Label do botão primário no último passo */
  @Prop() finishLabel: string = 'Começar';

  /** Label do botão de pular */
  @Prop() skipLabel: string = 'Pular tour';

  @State() private animating: boolean = false;

  @Event({ eventName: 'enTourNext' }) enTourNext!: EventEmitter<number>;
  @Event({ eventName: 'enTourPrev' }) enTourPrev!: EventEmitter<number>;
  @Event({ eventName: 'enTourFinish' }) enTourFinish!: EventEmitter<void>;
  @Event({ eventName: 'enTourSkip' }) enTourSkip!: EventEmitter<void>;

  @Watch('currentStep')
  onStepChange() {
    this.animating = true;
    setTimeout(() => { this.animating = false; }, 250);
  }

  private next() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep += 1;
      this.enTourNext.emit(this.currentStep);
    } else {
      this.enTourFinish.emit();
      this.open = false;
    }
  }

  private prev() {
    if (this.currentStep > 0) {
      this.currentStep -= 1;
      this.enTourPrev.emit(this.currentStep);
    }
  }

  private skip() {
    this.enTourSkip.emit();
    this.open = false;
  }

  render() {
    if (!this.open || !this.steps.length) return null;

    const step = this.steps[this.currentStep];
    const isLast = this.currentStep === this.steps.length - 1;
    const isFirst = this.currentStep === 0;

    return (
      <Host>
        <div class="backdrop" aria-hidden="true" />
        <div class={`dialog ${this.animating ? 'is-animating' : ''}`} role="dialog" aria-modal="true">
          {step.imageSrc && (
            <div class="image-area">
              <img src={step.imageSrc} alt={step.imageAlt ?? step.title} class="step-image" />
            </div>
          )}
          <div class="content">
            <div class="dots" aria-label={`Passo ${this.currentStep + 1} de ${this.steps.length}`}>
              {this.steps.map((_, i) => (
                <span class={{ dot: true, 'dot-active': i === this.currentStep }} key={i} />
              ))}
            </div>
            <h2 class="title">{step.title}</h2>
            <p class="description">{step.description}</p>
            <div class="actions">
              <div class="actions-left">
                {!isFirst && (
                  <button class="btn-secondary" type="button" onClick={() => this.prev()}>
                    Voltar
                  </button>
                )}
                {!isLast && (
                  <button class="btn-skip" type="button" onClick={() => this.skip()}>
                    {this.skipLabel}
                  </button>
                )}
              </div>
              <button class="btn-primary" type="button" onClick={() => this.next()}>
                {isLast ? this.finishLabel : 'Próximo'}
              </button>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
