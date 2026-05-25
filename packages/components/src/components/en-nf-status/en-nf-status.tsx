import { Component, Prop, Host, h } from '@stencil/core';

export type NfType = 'nfs-e' | 'nf-e' | 'nf-e de devolução' | 'all';
export type NfStatus =
  | 'emitida'
  | 'em processo de emissão'
  | 'pendente'
  | 'cancelada'
  | 'falha ao cancelar'
  | 'falha ao emitir'
  | 'nao-emitir'
  | 'none';

const STATUS_CONFIG: Record<NfStatus, { label: string; intent: string }> = {
  'emitida':                { label: 'Emitida',                intent: 'success' },
  'em processo de emissão': { label: 'Em processo de emissão', intent: 'warning' },
  'pendente':               { label: 'Pendente',               intent: 'info'    },
  'cancelada':              { label: 'Cancelada',              intent: 'neutral' },
  'falha ao cancelar':      { label: 'Falha ao cancelar',      intent: 'danger'  },
  'falha ao emitir':        { label: 'Falha ao emitir',        intent: 'danger'  },
  'nao-emitir':             { label: 'Não emitir',             intent: 'neutral' },
  'none':                   { label: '',                       intent: 'neutral' },
};

@Component({
  tag: 'en-nf-status',
  styleUrl: 'en-nf-status.css',
  shadow: true,
})
export class EnNfStatus {
  /** Tipo de nota fiscal */
  @Prop() type: NfType = 'nf-e';

  /** Status da nota */
  @Prop() status: NfStatus = 'emitida';

  /** Exibe o badge em modo hovering */
  @Prop() hovering: boolean = false;

  render() {
    const config = STATUS_CONFIG[this.status] ?? STATUS_CONFIG['none'];
    const typeLabel = this.type === 'all' ? null : this.type.toUpperCase();

    return (
      <Host
        class={{
          [`intent-${config.intent}`]: true,
          [`type-${this.type.replace(/[\s/]/g, '-')}`]: true,
          'is-hovering': this.hovering,
        }}
      >
        {typeLabel && <span class="type-label">{typeLabel}</span>}
        {config.label && <span class="status-label">{config.label}</span>}
      </Host>
    );
  }
}
