import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'E-commerce',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'IoT Dashboard',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  },
  {
    title: 'FACTURACIÓN',
    group: true,
  },
  {
    title: 'Productos',
    icon: { icon: 'product-hunt', pack: 'fab' },
    children: [
      {
        title: 'Items',
        icon: { icon: 'product-hunt', pack: 'fab' },
        link: '/pages/products/items',
      },
      {
        title: 'Categorias',
        icon: { icon: 'product-hunt', pack: 'fab' },
        link: '/pages/products/categories',
      },
      {
        title: 'Marcas',
        icon: { icon: 'product-hunt', pack: 'fab' },
        link: '/pages/products/brands',
      },
      {
        title: 'Atributos',
        icon: { icon: 'list-alt', pack: 'fas' },
        link: '/pages/products/attributes',
      },
    ],
  },
  {
    title: 'Cuentas contables',
    icon: { icon: 'calculator', pack: 'fas' },
    children: [
      {
        title: 'Clases de cuenta',
        icon: { icon: 'calculator', pack: 'fas' },
        link: '/pages/accounting/class',
      },
      {
        title: 'Grupos contables',
        icon: { icon: 'calculator', pack: 'fas' },
        link: '/pages/accounting/groups',
      },
      // {
      //   title: 'Tipos de cuenta',
      //   link: '/pages/accounting/types',
      // },
      {
        title: 'Catalogo de cuentas',
        icon: { icon: 'calculator', pack: 'fas' },
        link: '/pages/accounting/accounts',
      },
    ],
  },
  {
    title: 'Empresa',
    icon: 'home-outline',
    children: [
      {
        title :   'Datos de la empresa',
        icon: 'home-outline',
      },
      {
        title :   'Suscursales',
        icon: 'home-outline',
      },
      {
        title :   'Departamentos',
        icon: 'home-outline',
      },
      {
        title :   'Bodegas',
        icon: 'home-outline',
      },
      {
        title :   'Tipos de empresa',
        icon: 'home-outline',
      },
    ]
  },
  {
    title: 'General',
    icon: 'layout-outline',
    children: [
      {
        title: 'Impuestos',
        link: '/pages/layout/stepper',
      },
      {
        title: 'Monedas',
        link: '/pages/layout/list',
      }
    ],
  }
];
