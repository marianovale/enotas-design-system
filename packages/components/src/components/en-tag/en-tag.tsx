import { Component, Prop, Event, EventEmitter, Host, h } from '@stencil/core';

export type TagVariant = 'neutral' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'purple';

/**
 * Tag / chip colorido com suporte a dismiss.
 * @slot - Conteúdo da tag
 */
@Component({
  tag: 'en-tag',
  styleUrl: 'en-tag.css',
  shadow: true,
})
export class EnTag {
  /** Cor da tag */
  @Prop() variant: TagVariant = 'neutral';

  /** Exibe botão de fechar (dismiss) */
  @Prop({ reflect: true }) dismissible: boolean = false;

  /** Emitido ao clicar no botão de fechar */
  @Event({ eventName: 'enDismiss' }) enDismiss!: EventEmitter<void>;

  private handleDismiss = (e: MouseEvent) => {
    e.stopPropagation();
    this.enDismiss.emit();
  };

  render() {
    return (
      <Host class={`variant-${this.variant}`}>
        <span class="tag-content">
          <slot />
        </span>
        {this.dismissible && (
          <button
            class="dismiss-btn"
            type="button"
            aria-label="Remover tag"
            onClick={this.handleDismiss}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
              <path d="M2 2l6 6M8 2l-6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </button>
        )}
      </Host>
    );
  }
}
