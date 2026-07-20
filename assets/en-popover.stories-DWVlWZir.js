const h=[{label:"Meu perfil",icon:"user",value:"profile"},{label:"Configurações",icon:"setting",value:"settings"},{divider:!0},{label:"Sair",icon:"exit-door",value:"logout",danger:!0}],b=[{label:"NFS-e #1042 emitida",icon:"nfs",value:"nfs-1042"},{label:"NF-e #893 cancelada",icon:"nfe-canceled",value:"nfe-893"},{label:"Falha ao emitir NF-e #901",icon:"alert-circle",value:"nfe-901",danger:!0}],y={title:"Compostos/EnPopover",tags:["autodocs"],argTypes:{placement:{control:"select",options:["bottom-end","bottom-start","top-end","top-start"]},minWidth:{control:"number"}},args:{placement:"bottom-end",minWidth:200}},i={render:({placement:n,minWidth:t})=>{const e=document.createElement("en-popover");e.items=h,e.placement=n,e.minWidth=t;const r=document.createElement("en-button");r.setAttribute("slot","trigger"),r.setAttribute("variant","ghost"),r.setAttribute("size","sm"),r.textContent="Minha conta ▾",e.appendChild(r);const s=document.createElement("div");return s.style.cssText="display:flex;justify-content:flex-end;padding:1rem",s.appendChild(e),s}},o={name:"Menu de perfil",render:()=>{const n=document.createElement("div");n.style.cssText="display:flex;justify-content:flex-end;padding:1rem";const t=document.createElement("en-popover");t.items=h,t.placement="bottom-end";const e=document.createElement("div");return e.setAttribute("slot","trigger"),e.style.cssText="width:36px;height:36px;border-radius:50%;background:#22baa0;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:600;cursor:pointer",e.textContent="MV",t.appendChild(e),n.appendChild(t),n}},a={name:"Menu de notificações",render:()=>{const n=document.createElement("div");n.style.cssText="display:flex;justify-content:flex-end;padding:1rem";const t=document.createElement("en-popover");t.items=b,t.placement="bottom-end",t.minWidth=280;const e=document.createElement("div");return e.setAttribute("slot","trigger"),e.innerHTML='<en-icon name="notification" size="20px"></en-icon>',e.style.cursor="pointer",t.appendChild(e),n.appendChild(t),n}};var c,l,d;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: ({
    placement,
    minWidth
  }) => {
    const el = document.createElement('en-popover') as any;
    el.items = PROFILE_ITEMS;
    el.placement = placement;
    el.minWidth = minWidth;
    const trigger = document.createElement('en-button') as any;
    trigger.setAttribute('slot', 'trigger');
    trigger.setAttribute('variant', 'ghost');
    trigger.setAttribute('size', 'sm');
    trigger.textContent = 'Minha conta ▾';
    el.appendChild(trigger);
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display:flex;justify-content:flex-end;padding:1rem';
    wrapper.appendChild(el);
    return wrapper;
  }
}`,...(d=(l=i.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,m,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Menu de perfil',
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display:flex;justify-content:flex-end;padding:1rem';
    const el = document.createElement('en-popover') as any;
    el.items = PROFILE_ITEMS;
    el.placement = 'bottom-end';
    const trigger = document.createElement('div');
    trigger.setAttribute('slot', 'trigger');
    trigger.style.cssText = 'width:36px;height:36px;border-radius:50%;background:#22baa0;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:600;cursor:pointer';
    trigger.textContent = 'MV';
    el.appendChild(trigger);
    wrapper.appendChild(el);
    return wrapper;
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,f,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Menu de notificações',
  render: () => {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display:flex;justify-content:flex-end;padding:1rem';
    const el = document.createElement('en-popover') as any;
    el.items = NOTIFICATION_ITEMS;
    el.placement = 'bottom-end';
    el.minWidth = 280;
    const trigger = document.createElement('div');
    trigger.setAttribute('slot', 'trigger');
    trigger.innerHTML = '<en-icon name="notification" size="20px"></en-icon>';
    trigger.style.cursor = 'pointer';
    el.appendChild(trigger);
    wrapper.appendChild(el);
    return wrapper;
  }
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const E=["Default","ProfileMenu","NotificationsMenu"];export{i as Default,a as NotificationsMenu,o as ProfileMenu,E as __namedExportsOrder,y as default};
