import { RouteInfo } from './vertical-menu.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [
  {
    path: 'dashboard', title: 'Dashboard', icon: 'ft-home', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
  {
    path: '', title: 'Ventas', icon: 'fas fa-cash-register', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
      { path: '/pages/sales/pos', title: 'Punto de venta', icon: 'fas fa-store submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/pages/sales/customers', title: 'Clientes', icon: 'far fa-id-card submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  },
  {
    path: '', title: 'Compras y gastos', icon: 'fas fa-hand-holding-usd', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
      { path: '/pages/shopping/invoices', title: 'Compras', icon: 'fas fa-shopping-cart submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/pages/shopping/providers', title: 'Porveedores', icon: 'far fa-id-card submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  },
  {
    path: '', title: 'Productos', icon: 'fab fa-product-hunt', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
      { path: '/pages/products/items', title: 'Items', icon: 'fab fa-product-hunt submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/pages/products/categories', title: 'Categorias', icon: 'fab fa-product-hunt submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/pages/products/brands', title: 'Marcas', icon: 'fab fa-product-hunt submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/pages/products/groups', title: 'Tipos de items', icon: 'fab fa-product-hunt submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/pages/products/attributes', title: 'Atributos', icon: 'fab fa-product-hunt submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/pages/products/terms', title: 'Terminos de atributos', icon: 'fab fa-product-hunt submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/pages/products/units', title: 'Unidades de medida', icon: 'fab fa-product-hunt submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  },
  {
    path: '', title: 'Contabilidad', icon: 'fas fa-calculator', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
      { path: '/pages/accounting/accounts', title: 'Catalogo de cuentas', icon: 'fas fa-calculator submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/pages/accounting/groups', title: 'Grupos contables', icon: 'fas fa-calculator submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/pages/accounting/class', title: 'Clases de cuenta', icon: 'fas fa-calculator submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  },
  {
    path: '', title: 'Empresa', icon: 'fas fa-building', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
      { path: '/pages/companies/branchoffice', title: 'Suscursales', icon: 'fas fa-home submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/pages/companies/pointofsale', title: 'Puntos de venta', icon: 'fas fa-store-alt submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/pages/companies/departaments', title: 'Departamentos', icon: 'fas fa-building submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/pages/companies/wineries', title: 'Bodegas', icon: 'far fa-id-card submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/pages/companies/company', title: 'Datos de la empresa', icon: 'fas fa-building submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/pages/companies/companytype', title: 'Tipos de empresa', icon: 'fas fa-building submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  },
  {
    path: '', title: 'Ajustes', icon: 'fas fa-user-cog', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
      { path: '/pages/general/taxes', title: 'Grupo de impuestos', icon: 'fas fa-shopping-cart submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/pages/general/taxrates', title: 'Rango de impuestos', icon: 'fas fa-user-cog submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/pages/general/currency', title: 'Monedas', icon: 'fas fa-hand-holding-usd submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/pages/general/identitydocuments', title: 'Documentos identidad', icon: 'far fa-id-card submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/pages/general/reports', title: 'Encabezado reportes', icon: 'fas fa-user-cog submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/pages/general/resolutions', title: 'Numeración', icon: 'fas fa-user-cog submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  },
];
