import{b as r}from"./lit-element-DYTQqYiP.js";const f={title:"Primitives/Segmented",tags:["autodocs"],argTypes:{disabled:{control:"boolean"},value:{control:"text"}}},y=[{value:"month",label:"Mês"},{value:"quarter",label:"Trimestre"},{value:"year",label:"Ano"}],n={render:()=>{const e=r`<en-segmented value="month"></en-segmented>`;return setTimeout(()=>{document.querySelector("en-segmented").options=y},0),e}},t={render:()=>{const e=r`<en-segmented value="nfse"></en-segmented>`;return setTimeout(()=>{document.querySelector("en-segmented").options=[{value:"nfse",label:"NFS-e"},{value:"nfe",label:"NF-e"}]},0),e}},o={render:()=>{const e=r`<en-segmented value="all"></en-segmented>`;return setTimeout(()=>{document.querySelector("en-segmented").options=[{value:"all",label:"Todos"},{value:"nfse",label:"NFS-e"},{value:"nfe",label:"NF-e"},{value:"dev",label:"Devolução"}]},0),e}},s={render:()=>{const e=r`<en-segmented value="month"></en-segmented>`;return setTimeout(()=>{document.querySelector("en-segmented").options=[{value:"month",label:"Mês"},{value:"quarter",label:"Trimestre",disabled:!0},{value:"year",label:"Ano"}]},0),e}};var l,a,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const el = html\`<en-segmented value="month"></en-segmented>\`;
    setTimeout(() => {
      (document.querySelector('en-segmented') as any).options = options;
    }, 0);
    return el;
  }
}`,...(u=(a=n.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};var m,d,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const el = html\`<en-segmented value="nfse"></en-segmented>\`;
    setTimeout(() => {
      (document.querySelector('en-segmented') as any).options = [{
        value: 'nfse',
        label: 'NFS-e'
      }, {
        value: 'nfe',
        label: 'NF-e'
      }];
    }, 0);
    return el;
  }
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var i,p,v;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const el = html\`<en-segmented value="all"></en-segmented>\`;
    setTimeout(() => {
      (document.querySelector('en-segmented') as any).options = [{
        value: 'all',
        label: 'Todos'
      }, {
        value: 'nfse',
        label: 'NFS-e'
      }, {
        value: 'nfe',
        label: 'NF-e'
      }, {
        value: 'dev',
        label: 'Devolução'
      }];
    }, 0);
    return el;
  }
}`,...(v=(p=o.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var g,b,S;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const el = html\`<en-segmented value="month"></en-segmented>\`;
    setTimeout(() => {
      (document.querySelector('en-segmented') as any).options = [{
        value: 'month',
        label: 'Mês'
      }, {
        value: 'quarter',
        label: 'Trimestre',
        disabled: true
      }, {
        value: 'year',
        label: 'Ano'
      }];
    }, 0);
    return el;
  }
}`,...(S=(b=s.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const h=["Default","TwoOptions","FourOptions","WithDisabledOption"];export{n as Default,o as FourOptions,t as TwoOptions,s as WithDisabledOption,h as __namedExportsOrder,f as default};
