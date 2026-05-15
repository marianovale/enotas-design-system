import { Component, Prop, Host, h } from '@stencil/core';

/**
 * Rodapé da aplicação eNotas.
 * @slot links - Links de navegação secundária
 * @slot - Conteúdo extra (copyright, versão)
 */
@Component({
  tag: 'en-footer',
  styleUrl: 'en-footer.css',
  shadow: true,
})
export class EnFooter {
  /** Texto de copyright */
  @Prop() copyright: string = `© ${new Date().getFullYear()} eNotas — Hotmart`;

  /** Versão do sistema */
  @Prop() version: string | undefined;

  render() {
    return (
      <Host>
        <footer class="footer">
          <div class="col-left">
            <slot name="links" />
          </div>
          <div class="col-right">
            <slot />
            <span class="copyright">{this.copyright}</span>
            {this.version && <span class="version">v{this.version}</span>}
          </div>
        </footer>
      </Host>
    );
  }
}
