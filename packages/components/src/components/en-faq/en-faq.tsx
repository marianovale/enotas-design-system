import { Component, Prop, Event, EventEmitter, Host, h, State } from '@stencil/core';

export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * Accordion de perguntas frequentes.
 * Aceita items via prop ou via slot para conteúdo customizado.
 */
@Component({
  tag: 'en-faq',
  styleUrl: 'en-faq.css',
  shadow: true,
})
export class EnFaq {
  /** Lista de perguntas e respostas */
  @Prop() items: FaqItem[] = [];

  /** Índice do item aberto inicialmente (-1 = nenhum) */
  @Prop({ mutable: true }) openIndex: number = -1;

  /** Permite múltiplos itens abertos ao mesmo tempo */
  @Prop() multiple: boolean = false;

  @State() private openIndexes: Set<number> = new Set();

  @Event({ eventName: 'enFaqChange' }) enFaqChange!: EventEmitter<{ index: number; open: boolean }>;

  componentWillLoad() {
    if (this.openIndex >= 0) {
      this.openIndexes = new Set([this.openIndex]);
    }
  }

  private toggle(index: number) {
    const next = new Set(this.openIndexes);
    if (next.has(index)) {
      next.delete(index);
    } else {
      if (!this.multiple) next.clear();
      next.add(index);
    }
    this.openIndexes = next;
    this.enFaqChange.emit({ index, open: this.openIndexes.has(index) });
  }

  render() {
    return (
      <Host>
        {this.items.map((item, i) => {
          const isOpen = this.openIndexes.has(i);
          return (
            <div class={{ 'faq-item': true, 'is-open': isOpen }} key={i}>
              <button
                class="faq-question"
                type="button"
                aria-expanded={String(isOpen)}
                aria-controls={`answer-${i}`}
                onClick={() => this.toggle(i)}
              >
                <span class="question-text">{item.question}</span>
                <span class="chevron" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
              </button>
              <div
                id={`answer-${i}`}
                class="faq-answer"
                role="region"
                aria-hidden={String(!isOpen)}
              >
                <div class="answer-inner">{item.answer}</div>
              </div>
            </div>
          );
        })}
      </Host>
    );
  }
}
