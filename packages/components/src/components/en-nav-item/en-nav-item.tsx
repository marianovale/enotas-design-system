import { Component, Prop, Event, EventEmitter, Host, h } from '@stencil/core';

export type NavItemState = 'default' | 'active';

/**
 * Item de navegação lateral (sidebar).
 * @slot - Label do item
 */
@Component({
  tag: 'en-nav-item',
  styleUrl: 'en-nav-item.css',
  shadow: true,
})
export class EnNavItem {
  /** Estado ativo */
  @Prop({ mutable: true, reflect: true }) active: boolean = false;

  /** Nome do ícone (en-icon) */
  @Prop() icon: string | undefined;

  /** Valor identificador */
  @Prop() value: string | undefined;

  /** Href para navegação nativa */
  @Prop() href: string | undefined;

  /** Desabilitado */
  @Prop({ reflect: true }) disabled: boolean = false;

  /** Badge de contagem */
  @Prop() count: number | undefined;

  @Event({ eventName: 'enNavSelect' }) enNavSelect!: EventEmitter<string | undefined>;

  private handleClick = () => {
    if (this.disabled) return;
    this.enNavSelect.emit(this.value);
  };

  render() {
    const Tag = this.href ? 'a' : 'button';
    return (
      <Host class={{ 'is-active': this.active }}>
        <Tag
          class="item"
          href={this.href}
          type={!this.href ? 'button' : undefined}
          disabled={!this.href && this.disabled}
          aria-current={this.active ? 'page' : undefined}
          onClick={this.handleClick}
        >
          {this.icon && (
            <span class="icon" aria-hidden="true">
              <en-icon name={this.icon as any} size="20px" />
            </span>
          )}
          <span class="label"><slot /></span>
          {this.count !== undefined && (
            <span class="count" aria-label={`${this.count} itens`}>{this.count > 99 ? '99+' : this.count}</span>
          )}
        </Tag>
      </Host>
    );
  }
}
