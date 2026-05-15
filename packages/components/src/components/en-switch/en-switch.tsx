import { Component, Prop, Event, EventEmitter, Host, h } from '@stencil/core';

/**
 * Switch toggle — componente de conveniência com a mesma aparência do
 * `<en-checkbox type="switch">`, mas com API simplificada (sem `type`).
 */
@Component({
  tag: 'en-switch',
  styleUrl: 'en-switch.css',
  shadow: true,
})
export class EnSwitch {
  /** Label visível ao lado do switch */
  @Prop() label: string | undefined;

  /** Estado ligado/desligado */
  @Prop({ mutable: true, reflect: true }) checked: boolean = false;

  /** Desabilita o switch */
  @Prop({ reflect: true }) disabled: boolean = false;

  /** Nome do campo (formulários) */
  @Prop() name: string | undefined;

  /** Valor submetido ao formulário quando checked */
  @Prop() value: string = 'on';

  /** Emitido quando o estado muda. Payload: novo valor de `checked`. */
  @Event({ eventName: 'enChange' }) enChange!: EventEmitter<boolean>;

  private handleToggle = () => {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.enChange.emit(this.checked);
  };

  render() {
    return (
      <Host
        class={{ 'is-checked': this.checked }}
        role="switch"
        aria-checked={String(this.checked)}
        aria-disabled={this.disabled ? 'true' : undefined}
        tabIndex={this.disabled ? -1 : 0}
        onClick={this.handleToggle}
        onKeyDown={(e: KeyboardEvent) => {
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            this.handleToggle();
          }
        }}
      >
        {/* Hidden native input for form support */}
        {this.name && (
          <input
            type="checkbox"
            name={this.name}
            value={this.value}
            checked={this.checked}
            disabled={this.disabled}
            aria-hidden="true"
            tabIndex={-1}
            class="sr-only"
            onChange={() => {/* controlled by host */}}
          />
        )}

        <span class="track" aria-hidden="true">
          <span class="thumb" />
        </span>

        {this.label && (
          <span class="label">{this.label}</span>
        )}
      </Host>
    );
  }
}
