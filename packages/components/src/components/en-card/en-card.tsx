import { Component, Prop, Host, h } from '@stencil/core';

export type CardSize = 'large' | 'small';

/**
 * @slot header - Área superior do card (título, ícone, badge)
 * @slot - Conteúdo principal do card
 * @slot footer - Área inferior do card (ações, links)
 */
@Component({
  tag: 'en-card',
  styleUrl: 'en-card.css',
  shadow: true,
})
export class EnCard {
  /** Tamanho do card */
  @Prop() size: CardSize = 'large';

  /** Adiciona borda ao card */
  @Prop() bordered: boolean = false;

  /** Remove o padding interno */
  @Prop() flush: boolean = false;

  /** Torna o card clicável (cursor pointer + hover elevado) */
  @Prop() clickable: boolean = false;

  render() {
    return (
      <Host
        class={{
          [`size-${this.size}`]: true,
          'is-bordered': this.bordered,
          'is-flush': this.flush,
          'is-clickable': this.clickable,
        }}
      >
        <slot name="header" />
        <div class="body">
          <slot />
        </div>
        <slot name="footer" />
      </Host>
    );
  }
}
