/**
 * Code Connect — en-toast
 *
 * en-toast é um host imperativo (não se escreve um toast no markup). Coloca-se
 * o host uma vez e dispara via JS: host.show({ variant, heading, message }).
 * Por isso o Code Connect mostra o padrão de USO (chamada show), não props
 * de um nó instanciável.
 *
 * Aponta para a página de documentação "Toast" do arquivo do DS.
 * NODE_ID a preencher após criar a doc no Figma (ver abaixo).
 */

import figma from '@figma/code-connect';

const BASE_URL =
  'https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=';

// TODO: trocar TODO-en-toast pelo node-id da página de doc "Toast".
figma.connect(`${BASE_URL}TODO-en-toast`, {
  example: () =>
    `<!-- uma vez no layout -->
<en-toast position="top-right"></en-toast>

<!-- dispara via JS -->
<script>
  const toaster = document.querySelector('en-toast');
  toaster.show({
    variant: 'positive',
    heading: 'Pagamento recebido',
    message: 'A fatura de maio foi quitada.',
  });
</script>`,
});
