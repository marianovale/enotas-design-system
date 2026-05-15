import { Component, Prop, Event, EventEmitter, Host, h, Watch, Listen } from '@stencil/core';

export type ModalSize = 'sm' | 'md' | 'lg' | 'full';

/**
 * Modal/dialog genérico com backdrop.
 * @slot header - Título do modal
 * @slot - Conteúdo principal
 * @slot footer - Ações (botões)
 */
@Component({
  tag: 'en-modal',
  styleUrl: 'en-modal.css',
  shadow: true,
})
export class EnModal {
  /** Visibilidade */
  @Prop({ mutable: true, reflect: true }) open: boolean = false;

  /** Título (alternativa ao slot header) */
  @Prop() heading: string | undefined;

  /** Tamanho */
  @Prop() size: ModalSize = 'md';

  /**
   * Exibe o botão de fechar (X). Padrão `true`.
   * Substitui `hideClose` (semântica invertida).
   */
  @Prop() closable: boolean = true;

  /**
   * @deprecated Use `closable={false}`.
   * Mantido por retrocompatibilidade.
   */
  @Prop() hideClose: boolean = false;

  /** Impede fechar ao clicar no backdrop */
  @Prop() persistent: boolean = false;

  @Event({ eventName: 'enModalClose' }) enModalClose!: EventEmitter<void>;

  @Watch('open')
  handleOpenChange(isOpen: boolean) {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  @Listen('keydown', { target: 'document' })
  handleEsc(e: KeyboardEvent) {
    if (this.open && e.key === 'Escape' && !this.persistent) this.close();
  }

  private close() {
    this.open = false;
    this.enModalClose.emit();
  }

  render() {
    if (!this.open) return null;

    return (
      <Host>
        <div
          class="backdrop"
          aria-hidden="true"
          onClick={() => { if (!this.persistent) this.close(); }}
        />
        <div
          class={`dialog size-${this.size}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby={this.heading ? 'modal-heading' : undefined}
        >
          <div class="dialog-header">
            <slot name="header">
              {this.heading && <h2 id="modal-heading" class="heading">{this.heading}</h2>}
            </slot>
            {this.closable && !this.hideClose && (
              <button
                class="close-btn"
                type="button"
                aria-label="Fechar modal"
                onClick={() => this.close()}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </button>
            )}
          </div>
          <div class="dialog-body">
            <slot />
          </div>
          <div class="dialog-footer">
            <slot name="footer" />
          </div>
        </div>
      </Host>
    );
  }
}
