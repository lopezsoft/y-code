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
        title: 'Productos',
        link: '/pages/layout/stepper',
      },
      {
        title: 'Marcas',
        link: '/pages/layout/list',
      },
      {
        title: 'Categorias',
        link: '/pages/layout/list',
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
