import { Component, Prop, Event, EventEmitter, Host, h, State } from '@stencil/core';

/**
 * Campo de busca com ícone integrado e estados visuais.
 */
@Component({
  tag: 'en-search',
  styleUrl: 'en-search.css',
  shadow: true,
})
export class EnSearch {
  /** Placeholder do campo */
  @Prop() placeholder: string = 'Buscar...';

  /** Valor atual */
  @Prop({ mutable: true }) value: string = '';

  /** Desabilita o campo */
  @Prop({ reflect: true }) disabled: boolean = false;

  /** Nome do campo (form) */
  @Prop() name: string | undefined;

  @State() private focused: boolean = false;

  @Event({ eventName: 'enInput' }) enInput!: EventEmitter<string>;
  @Event({ eventName: 'enChange' }) enChange!: EventEmitter<string>;
  @Event({ eventName: 'enSearch' }) enSearch!: EventEmitter<string>;
  @Event({ eventName: 'enClear' }) enClear!: EventEmitter<void>;

  private handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.enSearch.emit(this.value);
    }
    if (e.key === 'Escape') {
      this.clear();
    }
  };

  private clear() {
    this.value = '';
    this.enClear.emit();
    this.enChange.emit('');
  }

  render() {
    const hasValue = !!this.value;

    return (
      <Host
        class={{
          'is-focused': this.focused,
          'has-value': hasValue,
          'is-disabled': this.disabled,
        }}
      >
        <div class="wrapper">
          <span class="icon-search" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="7" cy="7" r="5" stroke="currentColor" stroke-width="1.5"/>
              <path d="M11 11l3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </span>
          <input
            type="search"
            name={this.name}
            value={this.value}
            placeholder={this.placeholder}
            disabled={this.disabled}
            aria-label={this.placeholder}
            onInput={(e) => {
              this.value = (e.target as HTMLInputElement).value;
              this.enInput.emit(this.value);
            }}
            onChange={(e) => {
              this.value = (e.target as HTMLInputElement).value;
              this.enChange.emit(this.value);
            }}
            onFocus={() => { this.focused = true; }}
            onBlur={() => { this.focused = false; }}
            onKeyDown={this.handleKeyDown}
          />
          {hasValue && (
            <button
              class="clear-btn"
              type="button"
              aria-label="Limpar busca"
              onClick={() => this.clear()}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 2l8 8M10 2L2 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </button>
          )}
        </div>
      </Host>
    );
  }
}
