import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'E-commerce',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },
  // {
  //   title: 'IoT Dashboard',
  //   icon: 'home-outline',
  //   link: '/pages/iot-dashboard',
  // },
  // {
  //   title: 'FACTURACIÓN',
  //   group: true,
  // },
  {
    title: 'Ventas',
    icon: { icon: 'cash-register', pack: 'fas' },
    children: [
      {
        title: 'Punto de venta',
        icon: { icon: 'store', pack: 'fas' },
        link: '/pages/sales/pos',
      },
      {
        title: 'Clientes',
        icon: { icon: 'id-card', pack: 'far' },
        link: '/pages/sales/customers',
      },
    ]
  },
  {
    title: 'Compras y gastos',
    icon: { icon: 'hand-holding-usd', pack: 'fas' },
    children: [
      {
        title: 'Compras',
        icon: { icon: 'shopping-cart', pack: 'fas' },
        link: '/pages/shopping/invoices',
      },
      {
        title: 'Proveedores',
        icon: { icon: 'id-card', pack: 'far' },
        link: '/pages/shopping/providers',
      },
    ]
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
        title: 'Tipos de items',
        icon: { icon: 'calculator', pack: 'fas' },
        link: '/pages/products/groups',
      },
      {
        title: 'Atributos',
        icon: { icon: 'list-alt', pack: 'fas' },
        link: '/pages/products/attributes',
      },
      {
        title: 'Terminos de atributos',
        icon: { icon: 'list-alt', pack: 'fas' },
        link: '/pages/products/terms',
      },
      {
        title: 'Unidades de medida',
        icon: { icon: 'list-alt', pack: 'fas' },
        link: '/pages/products/units',
      },
    ],
  },
  {
    title: 'Contabilidad',
    icon: { icon: 'calculator', pack: 'fas' },
    children: [
      {
        title: 'Catalogo de cuentas',
        icon: { icon: 'calculator', pack: 'fas' },
        link: '/pages/accounting/accounts',
      },
      {
        title: 'Grupos contables',
        icon: { icon: 'calculator', pack: 'fas' },
        link: '/pages/accounting/groups',
      },
      {
        title: 'Clases de cuenta',
        icon: { icon: 'calculator', pack: 'fas' },
        link: '/pages/accounting/class',
      },
    ],
  },
  {
    title: 'Empresa',
    icon: { icon: 'building', pack: 'fas' },
    children: [
      {
        title :   'Suscursales',
        icon: { icon: 'home', pack: 'fas' },
        link: '/pages/companies/branchoffice',
      },
      {
        title :   'Puntos de venta',
        icon: { icon: 'store-alt', pack: 'fas' },
        link: '/pages/companies/pointofsale',
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
        title :   'Datos de la empresa',
        icon: { icon: 'building', pack: 'fas' },
        link: '/pages/companies/company',
      },
      {
        title :   'Tipos de empresa',
        icon: { icon: 'building', pack: 'fas' },
        link: '/pages/companies/companytype',
      },
    ]
  },
  {
    title: 'Ajustes',
    icon: { icon: 'user-cog', pack: 'fas' },
    children: [
      {
        title: 'Grupo de impuestos',
        icon: { icon: 'user-cog', pack: 'fas' },
        link: '/pages/general/taxes',
      },
      {
        title: 'Rango de impuestos',
        icon: { icon: 'user-cog', pack: 'fas' },
        link: '/pages/general/taxrates',
      },
      {
        title: 'Monedas',
        icon: { icon: 'hand-holding-usd', pack: 'fas' },
        link: '/pages/general/currency',
      },
      {
        title: 'Documentos identidad',
        icon: { icon: 'id-card', pack: 'far' },
        link: '/pages/general/identitydocuments',
      }
    ],
  }
];
