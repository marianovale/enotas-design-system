import { Component, Prop, State, Method, Event, EventEmitter, Host, h } from '@stencil/core';

/**
 * ToastVariant alinhado com o Cosmos DS (mesmas variantes do en-alert).
 */
export type ToastVariant = 'positive' | 'attention' | 'negative' | 'informative';
/** @deprecated Use `ToastVariant`. */
export type ToastIntent = 'success' | 'warning' | 'danger' | 'info';

export type ToastPosition =
  | 'top-right' | 'top-left' | 'top-center'
  | 'bottom-right' | 'bottom-left' | 'bottom-center';

export interface ToastOptions {
  variant?: ToastVariant | ToastIntent;
  heading?: string;
  message?: string;
  /** ms até sumir sozinho; 0 = não some. Padrão: prop `duration` do host. */
  duration?: number;
  /** exibe o botão de fechar. Padrão true. */
  dismissible?: boolean;
}

interface ToastItem {
  id: number;
  variant: ToastVariant;
  heading?: string;
  message: string;
  dismissible: boolean;
  leaving: boolean;
}

/**
 * en-toast — toaster: host de notificações efêmeras flutuantes.
 *
 * Coloque uma vez no layout e dispare via JS:
 *   const t = document.querySelector('en-toast');
 *   t.show({ variant: 'positive', heading: 'Pagamento recebido', message: 'Fatura de maio quitada.' });
 *
 * Empilha no canto (máx `max`), some sozinho após `duration`ms. Para avisos
 * persistentes ancorados ao layout, use `en-alert`.
 */
@Component({
  tag: 'en-toast',
  styleUrl: 'en-toast.css',
  shadow: true,
})
export class EnToast {
  /** Canto onde a pilha aparece */
  @Prop() position: ToastPosition = 'top-right';
  /** Máximo de toasts simultâneos (o mais antigo sai ao exceder) */
  @Prop() max: number = 3;
  /** Duração padrão (ms) até auto-dismiss. 0 desativa. */
  @Prop() duration: number = 5000;

  @State() toasts: ToastItem[] = [];
  private counter = 0;
  private timers = new Map<number, ReturnType<typeof setTimeout>>();

  /** Emitido quando um toast é removido (auto ou manual) */
  @Event({ eventName: 'enToastDismiss' }) enToastDismiss!: EventEmitter<{ id: number }>;

  private resolveVariant(v?: string): ToastVariant {
    const map: Record<string, ToastVariant> = {
      success: 'positive', warning: 'attention', danger: 'negative', info: 'informative',
    };
    return (map[v as string] ?? v ?? 'informative') as ToastVariant;
  }

  /** Exibe um toast. Retorna o id (para dismiss programático). */
  @Method()
  async show(opts: ToastOptions = {}): Promise<number> {
    const id = ++this.counter;
    const item: ToastItem = {
      id,
      variant: this.resolveVariant(opts.variant),
      heading: opts.heading,
      message: opts.message ?? '',
      dismissible: opts.dismissible !== false,
      leaving: false,
    };
    let next = [...this.toasts, item];
    if (next.length > this.max) {
      const dropped = next.slice(0, next.length - this.max);
      dropped.forEach(d => this.clearTimer(d.id));
      next = next.slice(next.length - this.max);
    }
    this.toasts = next;

    const duration = opts.duration ?? this.duration;
    if (duration > 0) {
      this.timers.set(id, setTimeout(() => this.dismiss(id), duration));
    }
    return id;
  }

  /** Remove um toast pelo id (com animação de saída) */
  @Method()
  async dismiss(id: number): Promise<void> {
    this.clearTimer(id);
    this.toasts = this.toasts.map(t => (t.id === id ? { ...t, leaving: true } : t));
    setTimeout(() => {
      this.toasts = this.toasts.filter(t => t.id !== id);
      this.enToastDismiss.emit({ id });
    }, 200);
  }

  /** Remove todos os toasts */
  @Method()
  async clear(): Promise<void> {
    this.timers.forEach(t => clearTimeout(t));
    this.timers.clear();
    this.toasts = [];
  }

  private clearTimer(id: number) {
    const t = this.timers.get(id);
    if (t) { clearTimeout(t); this.timers.delete(id); }
  }

  disconnectedCallback() {
    this.timers.forEach(t => clearTimeout(t));
    this.timers.clear();
  }

  private icon(v: ToastVariant) {
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
    return (
      <Host class={{ [`pos-${this.position}`]: true }} aria-live="polite" aria-atomic="false">
        {this.toasts.map(t => (
          <div
            key={t.id}
            class={{ toast: true, [`variant-${t.variant}`]: true, leaving: t.leaving }}
            role={t.variant === 'negative' || t.variant === 'attention' ? 'alert' : 'status'}
          >
            <span class="icon">{this.icon(t.variant)}</span>
            <div class="content">
              {t.heading && <p class="heading">{t.heading}</p>}
              {t.message && <div class="message">{t.message}</div>}
            </div>
            {t.dismissible && (
              <button class="close-btn" type="button" aria-label="Fechar notificação" onClick={() => this.dismiss(t.id)}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                </svg>
              </button>
            )}
          </div>
        ))}
      </Host>
    );
  }
}
