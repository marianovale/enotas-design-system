import { Component, Prop, Host, h, State } from '@stencil/core';

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';
export type TooltipAlign = 'start' | 'center' | 'end';

/**
 * Tooltip exibido ao hover/focus no elemento filho.
 * @slot - Elemento trigger
 */
@Component({
  tag: 'en-tooltip',
  styleUrl: 'en-tooltip.css',
  shadow: true,
})
export class EnTooltip {
  /**
   * Conteúdo do tooltip (texto).
   * Substitui a prop `text` (alinhamento com Cosmos).
   */
  @Prop() content: string = '';

  /**
   * @deprecated Use `content`.
   * Mantido por retrocompatibilidade.
   */
  @Prop() text: string = '';

  /** Posicionamento (equivalente ao `side` do Cosmos) */
  @Prop() placement: TooltipPlacement = 'top';

  /** Alinhamento do tooltip em relação ao trigger */
  @Prop() align: TooltipAlign = 'center';

  /** Desabilita o tooltip */
  @Prop() disabled: boolean = false;

  @State() private visible: boolean = false;

  private get resolvedContent(): string {
    return this.content || this.text;
  }

  private show() { if (!this.disabled) this.visible = true; }
  private hide() { this.visible = false; }

  render() {
    const tooltipText = this.resolvedContent;
    return (
      <Host
        class={{
          [`placement-${this.placement}`]: true,
          [`align-${this.align}`]: true,
        }}
        onMouseEnter={() => this.show()}
        onMouseLeave={() => this.hide()}
        onFocusin={() => this.show()}
        onFocusout={() => this.hide()}
      >
        <slot />
        {this.visible && tooltipText && (
          <div class="tooltip" role="tooltip">
            {tooltipText}
            <span class="arrow" aria-hidden="true" />
          </div>
        )}
      </Host>
    );
  }
}
