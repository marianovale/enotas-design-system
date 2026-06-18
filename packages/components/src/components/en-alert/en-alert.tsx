import { Component, Prop, State, Event, EventEmitter, Host, h } from '@stencil/core';

/**
 * AlertVariant alinhado com o Cosmos DS.
 * Mapeamento de intent legado: success→positive, warning→attention,
 * danger→negative, info→informative.
 */
export type AlertVariant = 'positive' | 'attention' | 'negative' | 'informative';

/**
 * @deprecated Use `AlertVariant`.
 */
export type AlertIntent = 'success' | 'warning' | 'danger' | 'info';

/**
 * en-alert — aviso persistente inline (banner).
 *
 * Para pendências, avisos e confirmações que ficam na tela (não somem sozinhos).
 * Para confirmações efêmeras flutuantes, use `en-toast` (quando disponível).
 *
 * Status é comunicado por **ícone + cor** (nunca só cor — WCAG 1.4.1).
 *
 * @slot - Descrição/corpo do alerta
 * @slot action - Ação(ões): link ou botão (ex: <en-button>)
 */
@Component({
  tag: 'en-alert',
  styleUrl: 'en-alert.css',
  shadow: true,
})
export class EnAlert {
  /**
   * Variante semântica (alinhado com Cosmos).
   * Aceita também os valores legados de `intent` por retrocompatibilidade.
   */
  @Prop() variant: AlertVariant | AlertIntent = 'informative';

  /**
   * @deprecated Use `variant`.
   * Mantido por retrocompatibilidade — se informado, sobrescreve `variant`.
   */
  @Prop() intent: AlertIntent | undefined;

  /** Título (opcional, exibido em bold acima da descrição) */
  @Prop() heading: string | undefined;

  /** Exibe o botão de fechar (X) */
  @Prop() dismissible: boolean = false;

  /** Exibe o ícone de status à esquerda. Padrão `true`. */
  @Prop() icon: boolean = true;

  /** Controla a visibilidade (interno, ao fechar) */
  @State() dismissed: boolean = false;

  /** Emitido ao fechar o alerta */
  @Event({ eventName: 'enAlertDismiss' }) enAlertDismiss!: EventEmitter<void>;

  private get resolvedVariant(): AlertVariant {
    const raw = this.intent ?? this.variant;
    const map: Record<string, AlertVariant> = {
      success: 'positive',
      warning: 'attention',
      danger:  'negative',
      info:    'informative',
    };
    return (map[raw as string] ?? raw) as AlertVariant;
  }

  private close = () => {
    this.dismissed = true;
    this.enAlertDismiss.emit();
  };

  private renderIcon(v: AlertVariant) {
    // Ícones de status (16px, currentColor). Comunicam a semântica junto da cor.
    switch (v) {
      case 'positive':
        return (
          <svg viewBox="0 0 20 20" width="20" height="20" fill="none" aria-hidden="true">
            <circle cx="10" cy="10" r="9" fill="currentColor" opacity="0.15" />
            <path d="M6 10.5l2.5 2.5L14 7.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        );
      case 'attention':
        return (
          <svg viewBox="0 0 20 20" width="20" height="20" fill="none" aria-hidden="true">
            <path d="M10 2.5l8 14H2l8-14z" fill="currentColor" opacity="0.15" />
            <path d="M10 8v3.5M10 14h.01" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
          </svg>
        );
      case 'negative':
        return (
          <svg viewBox="0 0 20 20" width="20" height="20" fill="none" aria-hidden="true">
            <circle cx="10" cy="10" r="9" fill="currentColor" opacity="0.15" />
            <path d="M10 5.5v5M10 14h.01" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
          </svg>
        );
      case 'informative':
      default:
        return (
          <svg viewBox="0 0 20 20" width="20" height="20" fill="none" aria-hidden="true">
            <circle cx="10" cy="10" r="9" fill="currentColor" opacity="0.15" />
            <path d="M10 9v5M10 6h.01" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
          </svg>
        );
    }
  }

  render() {
    if (this.dismissed) return null;
    const v = this.resolvedVariant;
    // danger/warning são assertivos; info/success são educados (status).
    const role = v === 'negative' || v === 'attention' ? 'alert' : 'status';

    return (
      <Host class={{ [`variant-${v}`]: true }}>
        <div class="alert" role={role}>
          {this.icon && <span class="icon">{this.renderIcon(v)}</span>}
          <div class="content">
            {this.heading && <p class="heading">{this.heading}</p>}
            <div class="body">
              <slot />
            </div>
            <div class="action">
              <slot name="action" />
            </div>
          </div>
          {this.dismissible && (
            <button class="close-btn" type="button" aria-label="Fechar alerta" onClick={this.close}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
              </svg>
            </button>
          )}
        </div>
      </Host>
    );
  }
}
