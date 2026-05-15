import { Component, Prop, Host, h } from '@stencil/core';

/**
 * BadgeVariant alinhado com o Cosmos DS.
 * Mapeamento de intent legado: neutral→default, success→positive,
 * warning→attention, danger→negative, info→informative.
 */
export type BadgeVariant =
  | 'default'
  | 'negative'
  | 'positive'
  | 'attention'
  | 'informative'
  | 'brand';

/**
 * @deprecated Use `BadgeVariant`.
 */
export type BadgeIntent = 'neutral' | 'success' | 'warning' | 'danger' | 'info' | 'brand';

export type BadgeSize = 'sm' | 'md';

/**
 * @slot - Texto ou conteúdo do badge
 */
@Component({
  tag: 'en-badge',
  styleUrl: 'en-badge.css',
  shadow: true,
})
export class EnBadge {
  /**
   * Variante visual (alinhado com Cosmos).
   * Aceita também os valores legados de `intent` por retrocompatibilidade.
   */
  @Prop() variant: BadgeVariant | BadgeIntent = 'default';

  /**
   * @deprecated Use `variant`.
   * Mantido por retrocompatibilidade — se informado, sobrescreve `variant`.
   */
  @Prop() intent: BadgeIntent | undefined;

  /** Tamanho */
  @Prop() size: BadgeSize = 'md';

  /** Exibe contorno em vez de fundo sólido */
  @Prop() outline: boolean = false;

  private get resolvedVariant(): BadgeVariant {
    const raw = this.intent ?? this.variant;
    // Map legacy intent values to new variant names
    const map: Record<string, BadgeVariant> = {
      neutral:     'default',
      success:     'positive',
      warning:     'attention',
      danger:      'negative',
      info:        'informative',
    };
    return (map[raw as string] ?? raw) as BadgeVariant;
  }

  render() {
    const v = this.resolvedVariant;
    return (
      <Host
        class={{
          [`variant-${v}`]: true,
          [`size-${this.size}`]: true,
          'is-outline': this.outline,
        }}
      >
        <span>
          <slot />
        </span>
      </Host>
    );
  }
}
