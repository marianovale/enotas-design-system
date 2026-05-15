import { Component, Prop, Event, EventEmitter, Host, h } from '@stencil/core';

export type CheckboxType = 'square' | 'round' | 'switch';

@Component({
  tag: 'en-checkbox',
  styleUrl: 'en-checkbox.css',
  shadow: true,
})
export class EnCheckbox {
  /** Variante visual */
  @Prop() type: CheckboxType = 'square';

  /** Label visível */
  @Prop() label: string | undefined;

  /**
   * Estado marcado. Aceita `true`, `false` ou `'indeterminate'`.
   * Quando `'indeterminate'`, exibe ícone de traço (−) e seta aria-checked="mixed".
   */
  @Prop({ mutable: true, reflect: true }) checked: boolean | 'indeterminate' = false;

  /** Desabilitado */
  @Prop({ reflect: true }) disabled: boolean = false;

  /** Nome do campo */
  @Prop() name: string | undefined;

  /** Valor do campo */
  @Prop() value: string = 'on';

  @Event({ eventName: 'enChange' }) enChange!: EventEmitter<boolean>;

  private get isIndeterminate(): boolean {
    return this.checked === 'indeterminate';
  }

  private handleChange = () => {
    if (this.disabled) return;
    // indeterminate → checked on click
    if (this.isIndeterminate) {
      this.checked = true;
    } else {
      this.checked = !this.checked;
    }
    this.enChange.emit(this.checked as boolean);
  };

  render() {
    const isChecked = this.checked === true;
    const isIndeterminate = this.isIndeterminate;
    const ariaChecked = isIndeterminate ? 'mixed' : String(isChecked);

    return (
      <Host
        class={{
          [`type-${this.type}`]: true,
          'is-checked': isChecked,
          'is-indeterminate': isIndeterminate,
        }}
        onClick={this.handleChange}
        role={this.type === 'switch' ? 'switch' : 'checkbox'}
        aria-checked={ariaChecked}
        aria-disabled={this.disabled ? 'true' : undefined}
        tabIndex={this.disabled ? -1 : 0}
        onKeyDown={(e: KeyboardEvent) => {
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            this.handleChange();
          }
        }}
      >
        <span class="control" aria-hidden="true">
          {this.type === 'switch' && <span class="thumb" />}
          {this.type !== 'switch' && isIndeterminate && (
            /* dash icon for indeterminate */
            <svg viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          )}
          {this.type !== 'switch' && isChecked && !isIndeterminate && (
            <svg viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 5l3.5 3.5L11 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          )}
        </span>
        {this.label && <span class="label">{this.label}</span>}
      </Host>
    );
  }
}
