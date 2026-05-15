import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'en-loading-bar',
  styleUrl: 'en-loading-bar.css',
  shadow: true,
})
export class EnLoadingBar {
  /** 0–100 para modo determinado; omitir para indeterminado (animação contínua) */
  @Prop() value: number | undefined;
  /** Exibe ou esconde a barra */
  @Prop({ reflect: true }) active: boolean = false;

  render() {
    const indeterminate = this.value === undefined;
    const pct = indeterminate ? 0 : Math.min(100, Math.max(0, this.value as number));

    return (
      <Host
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={indeterminate ? undefined : pct}
        aria-hidden={!this.active ? 'true' : undefined}
      >
        <div
          class={{ 'bar': true, 'bar--indeterminate': indeterminate }}
          style={!indeterminate ? { width: `${pct}%` } : {}}
        />
      </Host>
    );
  }
}
