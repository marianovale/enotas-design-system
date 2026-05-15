import { Component, Prop, Host, h } from '@stencil/core';

export type ProgressIntent = 'default' | 'success' | 'warning' | 'danger';

@Component({
  tag: 'en-progress',
  styleUrl: 'en-progress.css',
  shadow: true,
})
export class EnProgress {
  /** Valor atual (0–100) */
  @Prop() value: number = 0;

  /** Intenção semântica (cor) */
  @Prop() intent: ProgressIntent = 'default';

  /** Exibe label com percentual */
  @Prop() showLabel: boolean = false;

  /** Label acessível */
  @Prop() label: string = 'Progresso';

  /** Tamanho da barra */
  @Prop() size: 'sm' | 'md' = 'md';

  private get clampedValue() {
    return Math.min(100, Math.max(0, this.value));
  }

  render() {
    const pct = this.clampedValue;
    return (
      <Host class={{ [`intent-${this.intent}`]: true, [`size-${this.size}`]: true }}>
        {this.showLabel && (
          <div class="label-row">
            <span class="label">{this.label}</span>
            <span class="pct">{pct}%</span>
          </div>
        )}
        <div
          class="track"
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={this.label}
        >
          <div class="fill" style={{ width: `${pct}%` }} />
        </div>
      </Host>
    );
  }
}
