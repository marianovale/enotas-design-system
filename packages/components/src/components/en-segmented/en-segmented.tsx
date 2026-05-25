import { Component, Prop, Event, EventEmitter, Watch, Host, h } from '@stencil/core';

export interface SegmentedOption {
  value: string;
  label: string;
  disabled?: boolean;
}

@Component({
  tag: 'en-segmented',
  styleUrl: 'en-segmented.css',
  shadow: true,
})
export class EnSegmented {
  @Prop() options: SegmentedOption[] = [];
  @Prop({ mutable: true, reflect: true }) value: string | undefined;
  @Prop({ reflect: true }) disabled: boolean = false;

  @Event({ eventName: 'enSegmentedChange' }) enSegmentedChange!: EventEmitter<string>;

  @Watch('options')
  optionsChanged(val: any) {
    if (typeof val === 'string') {
      try { this.options = JSON.parse(val); } catch (_e) { /* JSON inválido — mantém valor anterior */ }
    }
  }

  private select(opt: SegmentedOption) {
    if (this.disabled || opt.disabled) return;
    this.value = opt.value;
    this.enSegmentedChange.emit(opt.value);
  }

  render() {
    return (
      <Host role="group">
        {this.options.map(opt => (
          <button
            key={opt.value}
            class={{
              'segment': true,
              'segment--active': this.value === opt.value,
              'segment--disabled': !!opt.disabled || this.disabled,
            }}
            disabled={opt.disabled || this.disabled}
            aria-pressed={String(this.value === opt.value)}
            onClick={() => this.select(opt)}
          >
            {opt.label}
          </button>
        ))}
      </Host>
    );
  }
}
