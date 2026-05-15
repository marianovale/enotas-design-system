import { Component, Prop, Event, EventEmitter, Host, h, State } from '@stencil/core';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

@Component({
  tag: 'en-select',
  styleUrl: 'en-select.css',
  shadow: true,
})
export class EnSelect {
  @Prop() label: string | undefined;
  @Prop() placeholder: string = 'Selecione...';
  @Prop({ mutable: true }) value: string = '';
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop() required: boolean = false;
  @Prop() error: string | undefined;
  @Prop() hint: string | undefined;
  @Prop() name: string | undefined;
  @Prop() options: SelectOption[] = [];

  @State() private focused: boolean = false;

  @Event({ eventName: 'enChange' }) enChange!: EventEmitter<string>;
  @Event({ eventName: 'enFocus' }) enFocus!: EventEmitter<void>;
  @Event({ eventName: 'enBlur' }) enBlur!: EventEmitter<void>;

  private get currentState() {
    if (this.disabled) return 'inactived';
    if (this.focused) return 'focus';
    if (this.value) return 'finished';
    return 'default';
  }

  render() {
    const hasError = !!this.error;
    return (
      <Host class={{ [`state-${this.currentState}`]: true, 'has-error': hasError }}>
        {this.label && (
          <label class="label">
            {this.label}
            {this.required && <span class="required" aria-hidden="true"> *</span>}
          </label>
        )}
        <div class="select-wrapper">
          <select
            name={this.name}
            disabled={this.disabled}
            required={this.required}
            onChange={(e) => { this.value = (e.target as HTMLSelectElement).value; this.enChange.emit(this.value); }}
            onFocus={() => { this.focused = true; this.enFocus.emit(); }}
            onBlur={() => { this.focused = false; this.enBlur.emit(); }}
            aria-invalid={hasError ? 'true' : undefined}
          >
            <option value="" disabled selected={!this.value}>{this.placeholder}</option>
            {this.options.map(opt => (
              <option value={opt.value} disabled={opt.disabled} selected={this.value === opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <span class="chevron" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </div>
        {hasError && <span class="error-msg" role="alert">{this.error}</span>}
        {!hasError && this.hint && <span class="hint-msg">{this.hint}</span>}
      </Host>
    );
  }
}
