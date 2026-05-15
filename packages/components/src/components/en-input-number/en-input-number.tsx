import { Component, Prop, Event, EventEmitter, Host, h, State } from '@stencil/core';

@Component({
  tag: 'en-input-number',
  styleUrl: 'en-input-number.css',
  shadow: true,
})
export class EnInputNumber {
  @Prop() label: string | undefined;
  @Prop({ mutable: true }) value: number = 0;
  @Prop() min: number | undefined;
  @Prop() max: number | undefined;
  @Prop() step: number = 1;
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop() required: boolean = false;
  @Prop() error: string | undefined;
  @Prop() hint: string | undefined;
  @Prop() name: string | undefined;

  @State() private focused: boolean = false;

  @Event({ eventName: 'enChange' }) enChange!: EventEmitter<number>;
  @Event({ eventName: 'enInput' }) enInput!: EventEmitter<number>;

  private increment() {
    if (this.disabled) return;
    const next = this.value + this.step;
    if (this.max !== undefined && next > this.max) return;
    this.value = next;
    this.enChange.emit(this.value);
  }

  private decrement() {
    if (this.disabled) return;
    const next = this.value - this.step;
    if (this.min !== undefined && next < this.min) return;
    this.value = next;
    this.enChange.emit(this.value);
  }

  private get currentState() {
    if (this.disabled) return 'inactived';
    if (this.focused) return 'focus';
    if (this.value !== 0) return 'finished';
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
        <div class="input-wrapper">
          <button
            class="btn-step"
            type="button"
            aria-label="Diminuir"
            disabled={this.disabled || (this.min !== undefined && this.value <= this.min)}
            onClick={() => this.decrement()}
          >
            <svg width="12" height="2" viewBox="0 0 12 2" fill="none">
              <path d="M1 1h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
          <input
            type="number"
            name={this.name}
            value={this.value}
            min={this.min}
            max={this.max}
            step={this.step}
            disabled={this.disabled}
            required={this.required}
            aria-invalid={hasError ? 'true' : undefined}
            onInput={(e) => {
              this.value = parseFloat((e.target as HTMLInputElement).value) || 0;
              this.enInput.emit(this.value);
            }}
            onChange={(e) => {
              this.value = parseFloat((e.target as HTMLInputElement).value) || 0;
              this.enChange.emit(this.value);
            }}
            onFocus={() => { this.focused = true; }}
            onBlur={() => { this.focused = false; }}
          />
          <button
            class="btn-step"
            type="button"
            aria-label="Aumentar"
            disabled={this.disabled || (this.max !== undefined && this.value >= this.max)}
            onClick={() => this.increment()}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 1v10M1 6h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
        {hasError && <span class="error-msg" role="alert">{this.error}</span>}
        {!hasError && this.hint && <span class="hint-msg">{this.hint}</span>}
      </Host>
    );
  }
}
