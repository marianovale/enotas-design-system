import { Component, Prop, Host, h } from '@stencil/core';

export type IconSize = '8px' | '12px' | '16px' | '20px' | '24px';

// Nomes disponíveis no Figma eNotas DS
export type IconName =
  | 'curve-arrow' | 'alert' | 'arrow-shuffle' | 'arrow-right' | 'arrow-down' | 'arrow-up'
  | 'chart' | 'company' | 'credit-cards' | 'dashboard' | 'exit-door' | 'help'
  | 'link-shear' | 'message-smile' | 'messages-chat' | 'notification' | 'news-paper'
  | 'rocket' | 'setting' | 'thunder' | 'ticket' | 'user' | 'eye-show-visible' | 'search'
  | 'hourglass' | 'wallet' | 'invoice' | 'closed' | 'invoice-checkmark-with-list'
  | 'calendar-enter-arrow-right' | 'calendar-return-arrow' | 'calendar-schedule-back'
  | 'calendar-schedule-parevious-date' | 'calendar-tucked-corner' | 'arrow-left'
  | 'certificate-medal' | 'download' | 'print' | 'share-arrow' | 'clock-time'
  | 'eye-hidden' | 'code-document' | 'plus-add' | 'documents-eye' | 'mail-open'
  | 'shopping-bag-line' | 'percent' | 'price' | 'users' | 'nfe' | 'nfe-devolution'
  | 'nfs' | 'nfe-split' | 'nfe-history' | 'nfe-transfer' | 'nfe-alert' | 'nfe-canceled'
  | 'nfe-done' | 'nfe-xml' | 'nf-paper' | 'calculator' | 'done-check' | 'equals'
  | 'question' | 'envelope' | 'cube' | 'file-programming-code' | 'documents-file-pdf'
  | 'users-profile-group' | 'refresh-rotate' | 'rotate-refresh-loading' | 'block-delete-stop'
  | 'done-check-circle' | 'power-appliances-shutdown' | 'trash' | 'earth-world' | 'map'
  | 'message-question-checkmark' | 'grid-layout-add' | 'add' | 'remove-user' | 'target'
  | 'arrow-left-2' | 'infornation-info' | 'filter-sort' | 'clock' | 'invoice-checkmark'
  | 'setting-2' | 'alert-circle' | 'code' | 'chart-line' | 'link' | 'transfer'
  | 'nota com cifra' | 'pen' | 'arrow-down-2' | 'faq' | 'robo' | 'archive' | 'house'
  | 'box' | 'key' | 'dual-arrow' | 'users-profile-group-2' | 'box-2' | 'box-and-star'
  | 'star' | 'done-check-circle-2' | 'clock-2' | 'padlock-unlock' | 'padlock-lock'
  | 'grid' | 'shopping-cart' | 'arrow-up-2' | 'less';

@Component({
  tag: 'en-icon',
  styleUrl: 'en-icon.css',
  shadow: true,
})
export class EnIcon {
  /** Nome do ícone (conforme Figma) */
  @Prop() name!: IconName;

  /** Tamanho */
  @Prop() size: IconSize = '16px';

  /** Label acessível */
  @Prop() label: string | undefined;

  render() {
    const px = parseInt(this.size);
    return (
      <Host
        class={`size-${this.size.replace('px', '')}`}
        role={this.label ? 'img' : undefined}
        aria-label={this.label}
        aria-hidden={!this.label ? 'true' : undefined}
      >
        {/* Ícones carregados via sprite SVG externo — substitua /icons/sprite.svg pelo path do seu bundle */}
        <svg width={px} height={px} viewBox={`0 0 ${px} ${px}`} fill="currentColor">
          <use href={`/icons/sprite.svg#${this.name}`} />
        </svg>
      </Host>
    );
  }
}
