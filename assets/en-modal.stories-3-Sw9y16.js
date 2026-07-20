import{b as u}from"./lit-element-DYTQqYiP.js";var n=Object.freeze,g=Object.defineProperty,b=(e,a)=>n(g(e,"raw",{value:n(e.slice())})),r,d;const y={title:"Compostos/EnModal",tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},persistent:{control:"boolean"},hideClose:{control:"boolean"}},args:{size:"md",persistent:!1,hideClose:!1}},t={render:({size:e,persistent:a,hideClose:v})=>u(r||(r=b([`
    <en-button variant="primary" id="open-modal">Abrir modal</en-button>
    <en-modal id="demo-modal" heading="Confirmar cancelamento" size=`," ?persistent="," ?hide-close=",`>
      <p style="margin:0;color:#6b6b6b">Tem certeza que deseja cancelar a NF-e #1042? Esta ação não pode ser desfeita.</p>
      <div slot="footer">
        <en-button variant="secondary" id="cancel-modal">Voltar</en-button>
        <en-button variant="primary" color="danger">Confirmar cancelamento</en-button>
      </div>
    </en-modal>
    <script>
      document.getElementById('open-modal').addEventListener('enClick', () => {
        document.getElementById('demo-modal').open = true;
      });
      document.getElementById('cancel-modal').addEventListener('enClick', () => {
        document.getElementById('demo-modal').open = false;
      });
    <\/script>
  `])),e,a,v)},o={name:"Termos de uso",render:()=>u(d||(d=b([`
    <en-button variant="secondary" id="open-terms">Ver termos</en-button>
    <en-modal id="terms-modal" heading="Termos de uso" size="md">
      <p style="color:#6b6b6b;line-height:1.7">
        Ao utilizar o eNotas, você concorda com os termos de uso e política de privacidade da Hotmart.
        Os dados de notas fiscais são armazenados de forma segura e utilizados exclusivamente para fins de emissão
        e consulta conforme a legislação fiscal brasileira vigente.
      </p>
      <div slot="footer">
        <en-button variant="primary" id="accept-terms">Aceitar e continuar</en-button>
      </div>
    </en-modal>
    <script>
      document.getElementById('open-terms').addEventListener('enClick', () => {
        document.getElementById('terms-modal').open = true;
      });
      document.getElementById('accept-terms').addEventListener('enClick', () => {
        document.getElementById('terms-modal').open = false;
      });
    <\/script>
  `])))};var s,m,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: ({
    size,
    persistent,
    hideClose
  }) => html\`
    <en-button variant="primary" id="open-modal">Abrir modal</en-button>
    <en-modal id="demo-modal" heading="Confirmar cancelamento" size=\${size} ?persistent=\${persistent} ?hide-close=\${hideClose}>
      <p style="margin:0;color:#6b6b6b">Tem certeza que deseja cancelar a NF-e #1042? Esta ação não pode ser desfeita.</p>
      <div slot="footer">
        <en-button variant="secondary" id="cancel-modal">Voltar</en-button>
        <en-button variant="primary" color="danger">Confirmar cancelamento</en-button>
      </div>
    </en-modal>
    <script>
      document.getElementById('open-modal').addEventListener('enClick', () => {
        document.getElementById('demo-modal').open = true;
      });
      document.getElementById('cancel-modal').addEventListener('enClick', () => {
        document.getElementById('demo-modal').open = false;
      });
    <\/script>
  \`
}`,...(i=(m=t.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var l,c,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Termos de uso',
  render: () => html\`
    <en-button variant="secondary" id="open-terms">Ver termos</en-button>
    <en-modal id="terms-modal" heading="Termos de uso" size="md">
      <p style="color:#6b6b6b;line-height:1.7">
        Ao utilizar o eNotas, você concorda com os termos de uso e política de privacidade da Hotmart.
        Os dados de notas fiscais são armazenados de forma segura e utilizados exclusivamente para fins de emissão
        e consulta conforme a legislação fiscal brasileira vigente.
      </p>
      <div slot="footer">
        <en-button variant="primary" id="accept-terms">Aceitar e continuar</en-button>
      </div>
    </en-modal>
    <script>
      document.getElementById('open-terms').addEventListener('enClick', () => {
        document.getElementById('terms-modal').open = true;
      });
      document.getElementById('accept-terms').addEventListener('enClick', () => {
        document.getElementById('terms-modal').open = false;
      });
    <\/script>
  \`
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const E=["Default","Terms"];export{t as Default,o as Terms,E as __namedExportsOrder,y as default};
