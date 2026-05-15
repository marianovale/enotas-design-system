import { Component, Prop, Event, EventEmitter, Host, h } from '@stencil/core';

/**
 * ButtonVariant alinhado com o Cosmos DS.
 * `primary` mantido como alias deprecated de `default`.
 */
export type ButtonVariant =
  | 'default'
  | 'primary'       // @deprecated — use 'default'
  | 'secondary'
  | 'ghost'
  | 'cta'
  | 'negative'
  | 'positive'
  | 'attention'
  | 'informative'
  | 'white'
  | 'link'
  | 'danger';       // @deprecated — use 'negative'

/**
 * ButtonColor removido — funcionalidade movida para `variant`.
 * @deprecated Não use ButtonColor; ajuste a prop `variant` diretamente.
 */
export type ButtonColor = 'default' | 'danger' | 'green' | 'purple';

/** `default` é alias de `md`. */
export type ButtonSize = 'sm' | 'md' | 'lg' | 'default';

export type ButtonType = 'button' | 'submit' | 'reset';

/**
 * @slot - Conteúdo do botão (texto ou ícone)
 * @slot prefix - Ícone antes do texto
 * @slot suffix - Ícone após o texto
 */
@Component({
  tag: 'en-button',
  styleUrl: 'en-button.css',
  shadow: true,
})
export class EnButton {
  /** Variante visual do botão */
  @Prop() variant: ButtonVariant = 'default';

  /**
   * @deprecated Use `variant` com os novos valores semânticos.
   * Mantido por retrocompatibilidade.
   */
  @Prop() color: ButtonColor = 'default';

  /** Tamanho do botão (`default` equivale a `md`) */
  @Prop() size: ButtonSize = 'md';

  /** Tipo HTML do botão */
  @Prop() type: ButtonType = 'button';

  /** Desabilita o botão */
  @Prop({ reflect: true }) disabled: boolean = false;

  /** Exibe spinner de loading no lugar do conteúdo */
  @Prop() loading: boolean = false;

  /** Ocupa 100% da largura do container */
  @Prop() fullWidth: boolean = false;

  /** Border-radius full — formato pílula */
  @Prop() pill: boolean = false;

  /** Emitido ao clicar, respeita disabled e loading */
  @Event({ eventName: 'enClick' }) enClick!: EventEmitter<MouseEvent>;

  private get resolvedVariant(): ButtonVariant {
    // Normalise deprecated aliases
    if (this.variant === 'primary') return 'default';
    if (this.variant === 'danger') return 'negative';
    // Legacy color prop override (deprecated path)
    if (this.color === 'danger') return 'negative';
    if (this.color === 'purple') return 'cta';
    return this.variant;
  }

  private get resolvedSize(): 'sm' | 'md' | 'lg' {
    return this.size === 'default' ? 'md' : this.size as 'sm' | 'md' | 'lg';
  }

  private handleClick = (event: MouseEvent) => {
    if (this.disabled || this.loading) {
      event.stopPropagation();
      return;
    }
    this.enClick.emit(event);
  };

  render() {
    const v = this.resolvedVariant;
    const s = this.resolvedSize;

    return (
      <Host
        class={{
          [`variant-${v}`]: true,
          [`size-${s}`]: true,
          'is-loading': this.loading,
          'is-full-width': this.fullWidth,
          'is-pill': this.pill,
        }}
      >
        <button
          type={this.type}
          disabled={this.disabled || this.loading}
          onClick={this.handleClick}
          aria-busy={this.loading ? 'true' : undefined}
        >
          {this.loading ? (
            <en-spinner size="sm" aria-hidden="true" />
          ) : (
            <slot name="prefix" />
          )}
          <slot />
          <slot name="suffix" />
        </button>
      </Host>
    );
  }
}
