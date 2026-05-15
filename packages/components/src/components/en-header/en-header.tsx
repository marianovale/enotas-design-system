import { Component, Prop, Event, EventEmitter, Host, h } from '@stencil/core';

/**
 * Header principal do eNotas.
 * @slot logo - Substitui o logo padrão
 * @slot search - Campo de busca (recomendado: en-search)
 * @slot actions - Ações extras antes dos ícones padrão
 */
@Component({
  tag: 'en-header',
  styleUrl: 'en-header.css',
  shadow: true,
})
export class EnHeader {
  /** URL do logo */
  @Prop() logoSrc: string | undefined;

  /** Alt text do logo */
  @Prop() logoAlt: string = 'eNotas';

  /** Nome/email do usuário logado */
  @Prop() userName: string | undefined;

  /** URL do avatar do usuário */
  @Prop() avatarSrc: string | undefined;

  /** Exibir campo de busca */
  @Prop() showSearch: boolean = true;

  /** Número de notificações não lidas */
  @Prop() notificationCount: number = 0;

  @Event({ eventName: 'enNotificationClick' }) enNotificationClick!: EventEmitter<void>;
  @Event({ eventName: 'enProfileClick' }) enProfileClick!: EventEmitter<void>;
  @Event({ eventName: 'enHelpClick' }) enHelpClick!: EventEmitter<void>;
  @Event({ eventName: 'enLogoClick' }) enLogoClick!: EventEmitter<void>;

  render() {
    const initials = this.userName
      ? this.userName.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase()
      : '?';

    return (
      <Host>
        <header class="header">
          {/* Logo */}
          <div class="col-logo">
            <slot name="logo">
              <button
                class="logo-btn"
                type="button"
                aria-label={`Ir para início — ${this.logoAlt}`}
                onClick={() => this.enLogoClick.emit()}
              >
                {this.logoSrc
                  ? <img src={this.logoSrc} alt={this.logoAlt} class="logo-img" />
                  : <span class="logo-text">{this.logoAlt}</span>
                }
              </button>
            </slot>
          </div>

          {/* Search */}
          {this.showSearch && (
            <div class="col-search">
              <slot name="search">
                <en-search placeholder="Buscar notas fiscais..." />
              </slot>
            </div>
          )}

          {/* Actions */}
          <div class="col-actions">
            <slot name="actions" />

            {/* Notificações */}
            <button
              class="action-btn"
              type="button"
              aria-label={`Notificações${this.notificationCount > 0 ? ` — ${this.notificationCount} não lidas` : ''}`}
              onClick={() => this.enNotificationClick.emit()}
            >
              <en-icon name="notification" size="20px" />
              {this.notificationCount > 0 && (
                <span class="badge" aria-hidden="true">
                  {this.notificationCount > 99 ? '99+' : this.notificationCount}
                </span>
              )}
            </button>

            {/* Ajuda */}
            <button
              class="action-btn"
              type="button"
              aria-label="Ajuda"
              onClick={() => this.enHelpClick.emit()}
            >
              <en-icon name="help" size="20px" />
            </button>

            {/* Perfil */}
            <button
              class="action-btn profile-btn"
              type="button"
              aria-label={`Perfil — ${this.userName ?? 'Usuário'}`}
              onClick={() => this.enProfileClick.emit()}
            >
              {this.avatarSrc
                ? <img src={this.avatarSrc} alt={this.userName ?? 'Avatar'} class="avatar-img" />
                : <span class="avatar-initials">{initials}</span>
              }
            </button>
          </div>
        </header>
      </Host>
    );
  }
}
