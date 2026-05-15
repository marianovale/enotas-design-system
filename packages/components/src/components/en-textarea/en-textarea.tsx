import { Component, Prop, Event, EventEmitter, Host, h, State } from '@stencil/core';

/** Tamanho visual do textarea. `default` = fonte md. */
export type TextareaVariantSize = 'sm' | 'default' | 'lg';

@Component({
  tag: 'en-textarea',
  styleUrl: 'en-textarea.css',
  shadow: true,
})
export class EnTextarea {
  @Prop() label: string | undefined;
  @Prop() placeholder: string = '';
  @Prop({ mutable: true }) value: string = '';
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop() required: boolean = false;
  @Prop() error: string | undefined;
  @Prop() hint: string | undefined;
  @Prop() name: string | undefined;
  @Prop() rows: number = 4;

  /** Tamanho visual (afeta font-size; sm=xs, default=sm, lg=md) */
  @Prop() variantSize: TextareaVariantSize = 'default';

  @State() private focused: boolean = false;

  @Event({ eventName: 'enInput' }) enInput!: EventEmitter<string>;
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
      <Host class={{ [`state-${this.currentState}`]: true, 'has-error': hasError, [`vsize-${this.variantSize}`]: true }}>
        {this.label && (
          <label class="label">
            {this.label}
            {this.required && <span class="required" aria-hidden="true"> *</span>}
          </label>
        )}
        <textarea
          name={this.name}
          placeholder={this.placeholder}
          disabled={this.disabled}
          required={this.required}
          rows={this.rows}
          onInput={(e) => { this.value = (e.target as HTMLTextAreaElement).value; this.enInput.emit(this.value); }}
          onChange={(e) => { this.value = (e.target as HTMLTextAreaElement).value; this.enChange.emit(this.value); }}
          onFocus={() => { this.focused = true; this.enFocus.emit(); }}
          onBlur={() => { this.focused = false; this.enBlur.emit(); }}
          aria-invalid={hasError ? 'true' : undefined}
        >{this.value}</textarea>
        {hasError && <span class="error-msg" role="alert">{this.error}</span>}
        {!hasError && this.hint && <span class="hint-msg">{this.hint}</span>}
      </Host>
    );
  }
}
