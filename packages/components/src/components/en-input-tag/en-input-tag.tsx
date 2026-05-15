import { Component, Prop, Event, EventEmitter, Host, h, State, Watch } from '@stencil/core';

/**
 * Campo de input que permite adicionar múltiplas tags.
 * Enter ou vírgula confirmam uma tag; Backspace remove a última.
 */
@Component({
  tag: 'en-input-tag',
  styleUrl: 'en-input-tag.css',
  shadow: true,
})
export class EnInputTag {
  /** Label do campo */
  @Prop() label: string | undefined;

  /** Placeholder enquanto sem tags */
  @Prop() placeholder: string = 'Adicionar...';

  /** Tags atuais (array separado por vírgula ao setar via HTML attribute) */
  @Prop({ mutable: true }) value: string[] = [];

  /** Desabilita o campo */
  @Prop({ reflect: true }) disabled: boolean = false;

  /** Mensagem de erro */
  @Prop() error: string | undefined;

  /** Texto auxiliar abaixo do campo */
  @Prop() hint: string | undefined;

  @State() private inputValue: string = '';
  @State() private focused: boolean = false;

  @Event({ eventName: 'enChange' }) enChange!: EventEmitter<string[]>;
  @Event({ eventName: 'enTagAdd' }) enTagAdd!: EventEmitter<string>;
  @Event({ eventName: 'enTagRemove' }) enTagRemove!: EventEmitter<string>;

  @Watch('value')
  valueChanged() {
    // ensure value is always an array (handles HTML attribute string)
    if (typeof this.value === 'string') {
      this.value = (this.value as string).split(',').map(v => v.trim()).filter(Boolean);
    }
  }

  private addTag(raw: string) {
    const tag = raw.trim();
    if (!tag || this.value.includes(tag)) {
      this.inputValue = '';
      return;
    }
    this.value = [...this.value, tag];
    this.inputValue = '';
    this.enTagAdd.emit(tag);
    this.enChange.emit(this.value);
  }

  private removeTag(tag: string) {
    this.value = this.value.filter(t => t !== tag);
    this.enTagRemove.emit(tag);
    this.enChange.emit(this.value);
  }

  private handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      this.addTag(this.inputValue);
    } else if (e.key === 'Backspace' && !this.inputValue && this.value.length > 0) {
      this.removeTag(this.value[this.value.length - 1]);
    }
  };

  private handleInput = (e: Event) => {
    const val = (e.target as HTMLInputElement).value;
    // auto-confirm on comma
    if (val.endsWith(',')) {
      this.addTag(val.slice(0, -1));
    } else {
      this.inputValue = val;
    }
  };

  private handleWrapperClick = () => {
    if (!this.disabled) {
      this.el?.shadowRoot?.querySelector('input')?.focus();
    }
  };

  private el!: HTMLElement;

  render() {
    const hasError = !!this.error;
    const showPlaceholder = this.value.length === 0 && !this.inputValue;

    return (
      <Host
        class={{
          'is-focused': this.focused,
          'has-error': hasError,
          'has-tags': this.value.length > 0,
        }}
        ref={el => { this.el = el as HTMLElement; }}
      >
        {this.label && <label class="label">{this.label}</label>}
        <div class="input-wrapper" onClick={this.handleWrapperClick}>
          {this.value.map(tag => (
            <span class="tag" key={tag}>
              <span class="tag-label">{tag}</span>
              {!this.disabled && (
                <button
                  class="tag-remove"
                  type="button"
                  aria-label={`Remover ${tag}`}
                  onClick={(e) => { e.stopPropagation(); this.removeTag(tag); }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 2l6 6M8 2l-6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                </button>
              )}
            </span>
          ))}
          <input
            type="text"
            value={this.inputValue}
            placeholder={showPlaceholder ? this.placeholder : ''}
            disabled={this.disabled}
            onInput={this.handleInput}
            onKeyDown={this.handleKeyDown}
            onFocus={() => { this.focused = true; }}
            onBlur={() => {
              this.focused = false;
              if (this.inputValue.trim()) this.addTag(this.inputValue);
            }}
            aria-label={this.label ?? 'Tags'}
          />
        </div>
        {hasError && <span class="error-msg" role="alert">{this.error}</span>}
        {!hasError && this.hint && <span class="hint-msg">{this.hint}</span>}
      </Host>
    );
  }
}
