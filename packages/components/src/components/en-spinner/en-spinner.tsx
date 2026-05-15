import { Component, Prop, Host, h } from '@stencil/core';

/** `default` é alias de `md`. */
export type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'default';

export type SpinnerVariant = 'default' | 'thin' | 'thick';

@Component({
  tag: 'en-spinner',
  styleUrl: 'en-spinner.css',
  shadow: true,
})
export class EnSpinner {
  /** Tamanho do spinner (`default` equivale a `md`) */
  @Prop() size: SpinnerSize = 'md';

  /** Espessura do traço */
  @Prop() variant: SpinnerVariant = 'default';

  /** Label acessível para leitores de tela */
  @Prop() label: string = 'Carregando...';

  private get resolvedSize(): 'xs' | 'sm' | 'md' | 'lg' | 'xl' {
    return this.size === 'default' ? 'md' : this.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  }

  render() {
    const s = this.resolvedSize;
    return (
      <Host
        class={{
          [`size-${s}`]: true,
          [`variant-${this.variant}`]: true,
        }}
        role="status"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="var(--en-spinner-thickness, 2.5)"
            stroke-linecap="round"
            stroke-dasharray="50"
            stroke-dashoffset="12"
          />
        </svg>
        <span class="sr-only">{this.label}</span>
      </Host>
    );
  }
}
