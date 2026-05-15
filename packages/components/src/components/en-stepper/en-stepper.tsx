import { Component, Prop, Event, EventEmitter, Host, h } from '@stencil/core';

export interface StepperStep {
  label: string;
  description?: string;
}

export type StepperStepStatus = 'done' | 'active' | 'pending';

/**
 * Indicador de progresso para fluxos de onboarding.
 */
@Component({
  tag: 'en-stepper',
  styleUrl: 'en-stepper.css',
  shadow: true,
})
export class EnStepper {
  /** Lista de passos */
  @Prop() steps: StepperStep[] = [];

  /** Índice do passo atual (base 0) */
  @Prop({ mutable: true }) currentStep: number = 0;

  @Event({ eventName: 'enStepChange' }) enStepChange!: EventEmitter<number>;

  private getStepStatus(index: number): StepperStepStatus {
    if (index < this.currentStep) return 'done';
    if (index === this.currentStep) return 'active';
    return 'pending';
  }

  render() {
    return (
      <Host>
        <ol class="stepper" role="list">
          {this.steps.map((step, i) => {
            const status = this.getStepStatus(i);
            return (
              <li
                class={{ 'step': true, [`step-${status}`]: true }}
                key={i}
                aria-current={status === 'active' ? 'step' : undefined}
              >
                <div class="step-indicator">
                  <span class="step-dot" aria-hidden="true">
                    {status === 'done' && (
                      <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                        <path d="M1 5l3.5 3.5L11 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    )}
                    {status !== 'done' && <span class="step-number">{i + 1}</span>}
                  </span>
                  {i < this.steps.length - 1 && <span class="step-line" aria-hidden="true" />}
                </div>
                <div class="step-content">
                  <span class="step-label">{step.label}</span>
                  {step.description && <span class="step-description">{step.description}</span>}
                </div>
              </li>
            );
          })}
        </ol>
      </Host>
    );
  }
}
