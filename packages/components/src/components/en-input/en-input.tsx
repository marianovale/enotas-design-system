import { Component, Prop, Event, EventEmitter, Host, h, State } from '@stencil/core';

export type InputState = 'default' | 'focus' | 'finished' | 'inactived';
export type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
/** Tamanho visual do campo. `default` = 40 px de altura. */
export type InputVariantSize = 'sm' | 'default' | 'lg';

/**
 * @slot prefix - Ícone ou elemento antes do input
 * @slot suffix - Ícone ou elemento após o input
 */
@Component({
  tag: 'en-input',
  styleUrl: 'en-input.css',
  shadow: true,
})
export class EnInput {
  /** Label do campo */
  @Prop() label: string | undefined;

  /** Placeholder */
  @Prop() placeholder: string = '';

  /** Valor atual */
  @Prop({ mutable: true }) value: string = '';

  /** Tipo HTML do input */
  @Prop() type: InputType = 'text';

  /** Desabilita o campo */
  @Prop({ reflect: true }) disabled: boolean = false;

  /** Torna o campo obrigatório */
  @Prop() required: boolean = false;

  /** Mensagem de erro */
  @Prop() error: string | undefined;

  /** Texto auxiliar abaixo do campo */
  @Prop() hint: string | undefined;

  /** Nome do campo (form) */
  @Prop() name: string | undefined;

  /** Tamanho visual do campo (sm=32px, default=40px, lg=48px) */
  @Prop() variantSize: InputVariantSize = 'default';

  @State() private focused: boolean = false;

  @Event({ eventName: 'enInput' }) enInput!: EventEmitter<string>;
  @Event({ eventName: 'enChange' }) enChange!: EventEmitter<string>;
  @Event({ eventName: 'enFocus' }) enFocus!: EventEmitter<void>;
  @Event({ eventName: 'enBlur' }) enBlur!: EventEmitter<void>;

  private get currentState(): InputState {
    if (this.disabled) return 'inactived';
    if (this.focused) return 'focus';
    if (this.value) return 'finished';
    return 'default';
  }

  private handleInput = (e: Event) => {
    this.value = (e.target as HTMLInputElement).value;
    this.enInput.emit(this.value);
  };

  private handleChange = (e: Event) => {
    this.value = (e.target as HTMLInputElement).value;
    this.enChange.emit(this.value);
  };

  private handleFocus = () => {
    this.focused = true;
    this.enFocus.emit();
  };

  private handleBlur = () => {
    this.focused = false;
    this.enBlur.emit();
  };

  render() {
    const state = this.currentState;
    const hasError = !!this.error;

    return (
      <Host class={{ [`state-${state}`]: true, 'has-error': hasError, [`vsize-${this.variantSize}`]: true }}>
        {this.label && (
          <label class="label">
            {this.label}
            {this.required && <span class="required" aria-hidden="true"> *</span>}
          </label>
        )}
        <div class="input-wrapper">
          <slot name="prefix" />
          <input
            type={this.type}
            name={this.name}
            value={this.value}
            placeholder={this.placeholder}
            disabled={this.disabled}
            required={this.required}
            onInput={this.handleInput}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            aria-invalid={hasError ? 'true' : undefined}
            aria-describedby={hasError ? 'error-msg' : this.hint ? 'hint-msg' : undefined}
          />
          <slot name="suffix" />
        </div>
        {hasError && <span id="error-msg" class="error-msg" role="alert">{this.error}</span>}
        {!hasError && this.hint && <span id="hint-msg" class="hint-msg">{this.hint}</span>}
      </Host>
    );
  }
}
