import { Component, Prop, Event, EventEmitter, Host, h } from '@stencil/core';

export type TabStatus = 'active' | 'inactive' | 'hovered';

/**
 * @slot - Label da tab
 */
@Component({
  tag: 'en-tab',
  styleUrl: 'en-tab.css',
  shadow: true,
})
export class EnTab {
  @Prop({ mutable: true, reflect: true }) status: TabStatus = 'inactive';
  @Prop({ mutable: true }) value: string | undefined;
  @Prop({ reflect: true }) disabled: boolean = false;
  /** Badge de contagem exibido ao lado do label */
  @Prop() count: number | undefined;
  /** Renderiza como link <a> */
  @Prop() href: string | undefined;

  @Event({ eventName: 'enTabClick' }) enTabClick!: EventEmitter<string>;

  private handleClick = () => {
    if (this.disabled) return;
    this.status = 'active';
    this.enTabClick.emit(this.value);
  };

  render() {
    const Tag = this.href ? 'a' : 'button';
    const linkProps = this.href ? { href: this.href } : {};

    return (
      <Host
        class={{ [`status-${this.status}`]: true }}
        role="tab"
        aria-selected={String(this.status === 'active')}
        aria-disabled={this.disabled ? 'true' : undefined}
      >
        <Tag
          class="inner"
          tabIndex={this.disabled ? -1 : 0}
          disabled={!this.href && this.disabled}
          onClick={this.handleClick}
          onKeyDown={(e: KeyboardEvent) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.handleClick(); } }}
          {...linkProps}
        >
          <span class="label"><slot /></span>
          {this.count !== undefined && <span class="count">{this.count}</span>}
        </Tag>
        <span class="indicator" aria-hidden="true" />
      </Host>
    );
  }
}
