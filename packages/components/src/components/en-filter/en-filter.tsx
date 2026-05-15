import { Component, Prop, Event, EventEmitter, Host, h } from '@stencil/core';

export type FilterStatus = 'default' | 'active';

/**
 * Chip de filtro clicável — toggle entre default e active.
 * @slot - Label do filtro
 * @slot icon - Ícone opcional antes do label
 */
@Component({
  tag: 'en-filter',
  styleUrl: 'en-filter.css',
  shadow: true,
})
export class EnFilter {
  /** Estado ativo do filtro */
  @Prop({ mutable: true, reflect: true }) active: boolean = false;

  /** Valor identificador (útil em grupos de filtro) */
  @Prop() value: string | undefined;

  /** Desabilita o filtro */
  @Prop({ reflect: true }) disabled: boolean = false;

  /** Exibe badge com contagem */
  @Prop() count: number | undefined;

  @Event({ eventName: 'enFilterChange' }) enFilterChange!: EventEmitter<{ value: string | undefined; active: boolean }>;

  private handleClick = () => {
    if (this.disabled) return;
    this.active = !this.active;
    this.enFilterChange.emit({ value: this.value, active: this.active });
  };

  render() {
    return (
      <Host
        class={{ 'is-active': this.active }}
        role="button"
        aria-pressed={String(this.active)}
        aria-disabled={this.disabled ? 'true' : undefined}
        tabIndex={this.disabled ? -1 : 0}
        onClick={this.handleClick}
        onKeyDown={(e: KeyboardEvent) => {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.handleClick(); }
        }}
      >
        <slot name="icon" />
        <span class="label"><slot /></span>
        {this.count !== undefined && (
          <span class="count" aria-label={`${this.count} itens`}>{this.count}</span>
        )}
      </Host>
    );
  }
}
