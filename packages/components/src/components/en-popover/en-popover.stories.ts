import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const PROFILE_ITEMS = [
  { label: 'Meu perfil', icon: 'user', value: 'profile' },
  { label: 'Configurações', icon: 'setting', value: 'settings' },
  { divider: true },
  { label: 'Sair', icon: 'exit-door', value: 'logout', danger: true },
];

const NOTIFICATION_ITEMS = [
  { label: 'NFS-e #1042 emitida', icon: 'nfs', value: 'nfs-1042' },
  { label: 'NF-e #893 cancelada', icon: 'nfe-canceled', value: 'nfe-893' },
  { label: 'Falha ao emitir NF-e #901', icon: 'alert-circle', value: 'nfe-901', danger: true },
];

const meta: Meta = {
  title: 'Compostos/EnPopover',
  tags: ['autodocs'],
  argTypes: {
    placement: { control: 'select', options: ['bottom-end', 'bottom-start', 'top-end', 'top-start'] },
    minWidth:  { control: 'number' },
  },
  args: { placement: 'bottom-end', minWidth: 200 },
};
export default meta;

export const Default: StoryObj = {
  render: ({ placement, minWidth }) => {
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
  },
};

export const ProfileMenu: StoryObj = {
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
  },
};

export const NotificationsMenu: StoryObj = {
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
  },
};
