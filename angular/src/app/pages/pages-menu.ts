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
    icon: { icon: 'building', pack: 'fas' },
    children: [
      {
        title :   'Datos de la empresa',
        icon: { icon: 'building', pack: 'fas' },
        link: '/pages/companies/company',
      },
      {
        title :   'Suscursales',
        icon: { icon: 'building', pack: 'fas' },
        link: '/pages/companies/branch-office',
      },
      {
        title :   'Departamentos',
        icon: { icon: 'building', pack: 'fas' },
        link: '/pages/companies/departaments',
      },
      {
        title :   'Bodegas',
        icon: { icon: 'building', pack: 'fas' },
        link: '/pages/companies/wineries',
      },
      {
        title :   'Tipos de empresa',
        icon: { icon: 'building', pack: 'fas' },
        link: '/pages/companies/companytype',
      },
    ]
  },
  {
    title: 'General',
    icon: 'layout-outline',
    children: [
      {
        title: 'Impuestos',
        link: '/pages/general/taxes',
      },
      {
        title: 'Monedas',
        link: '/pages/general/currency',
      },
      {
        title: 'Documentos',
        link: '/pages/general/identity',
      },
      {
        title: 'Rango de impuestos',
        link: '/pages/general/tas_rates',
      }

    ],
  }
];
