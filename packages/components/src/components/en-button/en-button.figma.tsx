import figma from '@figma/code-connect';

figma.connect('https://www.figma.com/design/KeXcEZ17XRl5yxs8vJEQeh/eNotas-Design-System?node-id=290-3105&m=dev', {
  props: {
    variant: figma.enum('variant', {
      primary:     'default',
      default:     'default',
      outline:     'secondary',
      link:        'link',
      Simple:      'ghost',
      tab:         'ghost',
      danger:      'negative',
      negative:    'negative',
      positive:    'positive',
      attention:   'attention',
      informative: 'informative',
      cta:         'cta',
      white:       'white',
    }),
    size: figma.enum('size', {
      sm: 'sm',
      md: 'md',
      lg: 'lg',
    }),
    disabled: figma.enum('state', { inactive: true }),
    loading:  figma.enum('state', { loading: true }),
    iconPosition: figma.enum('icon', {
      left:   'left',
      right:  'right',
      center: 'center',
      dual:   'left',
    }),
  },
  example: ({ variant, size, iconPosition, disabled, loading }) => {
    const iconAttr = iconPosition ? ` icon-position="${iconPosition}"` : '';
    const isIconOnly = iconPosition === 'center';
    const content = isIconOnly ? `\n  <en-icon slot="icon" name="alert"></en-icon>\n` : 'Label';
    return `<en-button variant="${variant ?? 'default'}" size="${size ?? 'md'}"${iconAttr}${disabled ? ' disabled' : ''}${loading ? ' loading' : ''}>${content}</en-button>`;
  },
});
