import { Component, Prop, Event, EventEmitter, Host, h, State, Watch } from '@stencil/core';

export interface LookupOption {
  value: string;
  label: string;
  disabled?: boolean;
}

@Component({
  tag: 'en-lookup',
  styleUrl: 'en-lookup.css',
  shadow: true,
})
export class EnLookup {
  /** Label do campo */
  @Prop() label: string | undefined;

  /** Placeholder do input de busca */
  @Prop() placeholder: string = 'Buscar...';

  /** Valor(es) selecionado(s) */
  @Prop({ mutable: true }) value: LookupOption | LookupOption[] | undefined;

  /** Lista de opções disponíveis */
  @Prop() options: LookupOption[] = [];

  /** Exibe spinner e bloqueia interação do dropdown */
  @Prop() loading: boolean = false;

  /** Permite selecionar múltiplas opções */
  @Prop({ reflect: true }) multiple: boolean = false;

  /** Desabilita o campo */
  @Prop({ reflect: true }) disabled: boolean = false;

  /** Mensagem de erro */
  @Prop() error: string | undefined;

  /** Texto auxiliar abaixo do campo */
  @Prop() hint: string | undefined;

  @State() private inputText: string = '';
  @State() private isOpen: boolean = false;
  @State() private highlightedIndex: number = -1;

  @Event({ eventName: 'enSearch' }) enSearch!: EventEmitter<string>;
  @Event({ eventName: 'enLookupChange' }) enLookupChange!: EventEmitter<LookupOption | LookupOption[]>;
  @Event({ eventName: 'enLookupClear' }) enLookupClear!: EventEmitter<void>;

  @Watch('options')
  optionsChanged() {
    this.highlightedIndex = -1;
  }

  private get selectedValues(): LookupOption[] {
    if (!this.value) return [];
    return Array.isArray(this.value) ? this.value : [this.value];
  }

  private get filteredOptions(): LookupOption[] {
    if (!this.inputText) return this.options;
    const term = this.inputText.toLowerCase();
    return this.options.filter(opt => opt.label.toLowerCase().includes(term));
  }

  private isSelected(option: LookupOption): boolean {
    return this.selectedValues.some(v => v.value === option.value);
  }

  private selectOption(option: LookupOption) {
    if (option.disabled) return;
    if (this.multiple) {
      const current = this.selectedValues;
      const exists = current.findIndex(v => v.value === option.value);
      const next = exists >= 0
        ? current.filter(v => v.value !== option.value)
        : [...current, option];
      this.value = next;
      this.enLookupChange.emit(next);
    } else {
      this.value = option;
      this.inputText = option.label;
      this.isOpen = false;
      this.enLookupChange.emit(option);
    }
  }

  private removeChip(option: LookupOption) {
    const next = this.selectedValues.filter(v => v.value !== option.value);
    this.value = next;
    this.enLookupChange.emit(next);
  }

  private clearAll() {
    this.value = undefined;
    this.inputText = '';
    this.isOpen = false;
    this.enLookupClear.emit();
  }

  private handleInput = (e: Event) => {
    const text = (e.target as HTMLInputElement).value;
    this.inputText = text;
    this.isOpen = true;
    this.highlightedIndex = -1;
    this.enSearch.emit(text);
  };

  private handleFocus = () => {
    if (!this.loading && this.options.length > 0) {
      this.isOpen = true;
    }
  };

  private handleBlur = () => {
    // Delay close so click on option registers first
    setTimeout(() => {
      this.isOpen = false;
      // If single and no selection, clear text
      if (!this.multiple && !this.value) {
        this.inputText = '';
      }
    }, 150);
  };

  private handleKeyDown = (e: KeyboardEvent) => {
    const items = this.filteredOptions;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      this.highlightedIndex = Math.min(this.highlightedIndex + 1, items.length - 1);
      this.isOpen = true;
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      this.highlightedIndex = Math.max(this.highlightedIndex - 1, 0);
    } else if (e.key === 'Enter' && this.highlightedIndex >= 0) {
      e.preventDefault();
      const opt = items[this.highlightedIndex];
      if (opt) this.selectOption(opt);
    } else if (e.key === 'Escape') {
      this.isOpen = false;
    }
  };

  render() {
    const hasError = !!this.error;
    const chips = this.multiple ? this.selectedValues : [];
    const showClear = !this.multiple && !!this.value;
    const filtered = this.filteredOptions;

    return (
      <Host class={{ 'has-error': hasError, 'is-open': this.isOpen }}>
        {this.label && (
          <label class="label">{this.label}</label>
        )}

        <div class="input-wrapper">
          {/* Search icon */}
          <svg class="icon-search" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="7" cy="7" r="4.5" stroke="currentColor" stroke-width="1.5"/>
            <path d="M10.5 10.5l2.5 2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>

          {/* Multiple mode chips */}
          {chips.map(chip => (
            <span class="chip" key={chip.value}>
              <span class="chip-label">{chip.label}</span>
              {!this.disabled && (
                <button
                  class="chip-remove"
                  type="button"
                  aria-label={`Remover ${chip.label}`}
                  onClick={(e) => { e.stopPropagation(); this.removeChip(chip); }}
                >
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M1.5 1.5l5 5M6.5 1.5l-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                </button>
              )}
            </span>
          ))}

          <input
            type="text"
            class="search-input"
            value={this.inputText}
            placeholder={chips.length === 0 ? this.placeholder : ''}
            disabled={this.disabled}
            aria-autocomplete="list"
            aria-expanded={String(this.isOpen)}
            aria-label={this.label ?? 'Buscar'}
            onInput={this.handleInput}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onKeyDown={this.handleKeyDown}
          />

          {/* Loading spinner */}
          {this.loading && (
            <en-spinner size="sm" class="icon-right" aria-hidden="true" />
          )}

          {/* Clear button (single mode) */}
          {showClear && !this.loading && !this.disabled && (
            <button
              class="clear-btn"
              type="button"
              aria-label="Limpar seleção"
              onClick={() => this.clearAll()}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </button>
          )}
        </div>

        {/* Dropdown */}
        {this.isOpen && !this.loading && filtered.length > 0 && (
          <ul class="dropdown" role="listbox">
            {filtered.map((opt, i) => (
              <li
                key={opt.value}
                class={{
                  'option': true,
                  'is-highlighted': i === this.highlightedIndex,
                  'is-selected': this.isSelected(opt),
                  'is-disabled': !!opt.disabled,
                }}
                role="option"
                aria-selected={String(this.isSelected(opt))}
                aria-disabled={opt.disabled ? 'true' : undefined}
                onMouseDown={(e) => { e.preventDefault(); this.selectOption(opt); }}
              >
                {this.multiple && (
                  <span class={`option-check ${this.isSelected(opt) ? 'is-checked' : ''}`} aria-hidden="true">
                    {this.isSelected(opt) && (
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4l2.5 2.5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    )}
                  </span>
                )}
                <span class="option-label">{opt.label}</span>
              </li>
            ))}
          </ul>
        )}

        {this.isOpen && this.loading && (
          <div class="dropdown dropdown-loading">
            <en-spinner size="sm" />
            <span>Buscando...</span>
          </div>
        )}

        {hasError && (
          <span id="lookup-error" class="error-msg" role="alert">{this.error}</span>
        )}
        {!hasError && this.hint && (
          <span class="hint-msg">{this.hint}</span>
        )}
      </Host>
    );
  }
}
