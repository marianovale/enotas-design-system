import { Component, Prop, Event, EventEmitter, Host, h, State, Listen, Element } from '@stencil/core';

export interface PopoverItem {
  label: string;
  icon?: string;
  value?: string;
  danger?: boolean;
  disabled?: boolean;
  divider?: boolean;
}

export type PopoverPlacement = 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';

/**
 * Dropdown de opções com trigger via slot.
 * @slot trigger - Elemento que abre/fecha o popover (botão, ícone, avatar)
 */
@Component({
  tag: 'en-popover',
  styleUrl: 'en-popover.css',
  shadow: true,
})
export class EnPopover {
  @Element() el!: HTMLElement;

  /** Itens do menu */
  @Prop() items: PopoverItem[] = [];

  /** Posicionamento relativo ao trigger */
  @Prop() placement: PopoverPlacement = 'bottom-end';

  /** Largura mínima do dropdown em px */
  @Prop() minWidth: number = 200;

  /** Aberto/fechado (controlado externamente) */
  @Prop({ mutable: true, reflect: true }) open: boolean = false;

  @State() private focused: number = -1;

  @Event({ eventName: 'enPopoverSelect' }) enPopoverSelect!: EventEmitter<PopoverItem>;
  @Event({ eventName: 'enPopoverOpen' }) enPopoverOpen!: EventEmitter<void>;
  @Event({ eventName: 'enPopoverClose' }) enPopoverClose!: EventEmitter<void>;

  @Listen('click', { target: 'document' })
  handleOutsideClick(e: MouseEvent) {
    if (this.open && !this.el.contains(e.target as Node)) {
      this.close();
    }
  }

  private toggle() {
    this.open ? this.close() : this.openMenu();
  }

  private openMenu() {
    this.open = true;
    this.focused = -1;
    this.enPopoverOpen.emit();
  }

  private close() {
    this.open = false;
    this.focused = -1;
    this.enPopoverClose.emit();
  }

  private select(item: PopoverItem) {
    if (item.disabled || item.divider) return;
    this.enPopoverSelect.emit(item);
    this.close();
  }

  private handleKeyDown = (e: KeyboardEvent) => {
    if (!this.open) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
        e.preventDefault();
        this.openMenu();
      }
      return;
    }
    const selectable = this.items.filter(i => !i.divider && !i.disabled);
    if (e.key === 'Escape') { e.preventDefault(); this.close(); return; }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      this.focused = Math.min(this.focused + 1, selectable.length - 1);
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      this.focused = Math.max(this.focused - 1, 0);
    }
    if (e.key === 'Enter' && this.focused >= 0) {
      e.preventDefault();
      this.select(selectable[this.focused]);
    }
  };

  render() {
    const selectableIndex = (item: PopoverItem) =>
      this.items.filter(i => !i.divider && !i.disabled).indexOf(item);

    return (
      <Host class={{ 'is-open': this.open }}>
        <div
          class="trigger"
          role="button"
          aria-haspopup="true"
          aria-expanded={String(this.open)}
          tabIndex={0}
          onClick={() => this.toggle()}
          onKeyDown={this.handleKeyDown}
        >
          <slot name="trigger" />
        </div>

        {this.open && (
          <div
            class={`dropdown placement-${this.placement}`}
            role="menu"
            style={{ minWidth: `${this.minWidth}px` }}
          >
            {this.items.map((item, i) => {
              if (item.divider) {
                return <div class="divider" key={i} role="separator" />;
              }
              const si = selectableIndex(item);
              return (
                <button
                  key={i}
                  class={{
                    'item': true,
                    'item-danger': !!item.danger,
                    'item-disabled': !!item.disabled,
                    'item-focused': si === this.focused,
                  }}
                  role="menuitem"
                  disabled={item.disabled}
                  onClick={() => this.select(item)}
                  onMouseEnter={() => { this.focused = si; }}
                >
                  {item.icon && (
                    <en-icon name={item.icon as any} size="16px" aria-hidden="true" />
                  )}
                  <span class="item-label">{item.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </Host>
    );
  }
}
