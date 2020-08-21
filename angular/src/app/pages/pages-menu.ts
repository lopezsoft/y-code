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
    icon: 'layout-outline',
    children: [
      {
        title: 'Items',
        link: '/pages/products/items',
      },
      {
        title: 'Categorias',
        link: '/pages/products/categories',
      },
      {
        title: 'Marcas',
        link: '/pages/products/brands',
      },
      {
        title: 'Atributos',
        link: '/pages/products/attributes',
      },
    ],
  },
  {
    title: 'Cuentas contables',
    icon: 'layout-outline',
    children: [
      {
        title: 'Clases de cuenta',
        link: '/pages/accounting/class',
      },
      {
        title: 'Grupos contables',
        link: '/pages/accounting/groups',
      },
      // {
      //   title: 'Tipos de cuenta',
      //   link: '/pages/accounting/types',
      // },
      {
        title: 'Catalogo de cuentas',
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
