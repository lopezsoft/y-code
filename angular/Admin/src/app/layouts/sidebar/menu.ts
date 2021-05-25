import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    // {
    //     id: 1,
    //     label: 'MENUITEMS.MENU.TEXT',
    //     isTitle: true
    // },
    {
        id: 2,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'uil-home-alt',
        badge: {
            variant: 'primary',
            text: '01', //'MENUITEMS.DASHBOARDS.BADGE',
        },
        link: '/dashboard',
    },
    // {
        // id: 3,
        // isLayout: true
    // },
    // {
    //     id: 4,
    //     label: 'MENUITEMS.APPS.TEXT',
    //     isTitle: true
    // },
    {
			id				: 3,
			label			: 'Ventas',
			icon			: 'uil-calender',
			subItems: [
				{
					id				: 30,
					label			: 'Facturar',
					link			: '/sales/check-in',
					parentId	: 3
				},
				{
					id				: 31,
					label			: 'Punto de venta',
					link			: '/sales/pos',
					parentId	: 3
				},
				{
					id				: 32,
					label			: 'Clientes',
					link			: '/sales/customers',
					parentId	: 3
				},
			]
    },
    {
			id				: 4,
			label			: 'Compras y gastos',
			icon			: 'uil-calender',
			subItems: [
				{
					id				: 41,
					label			: 'Compras',
					icon			: 'uil-calender',
					link			: '/shopping/invoices',
					parentId	: 4
				},
				{
					id				: 42,
					label			: 'Proveedores',
					link			: '/shopping/providers',
					parentId	: 4
				},
			]
    },
    {
			id				: 5,
			label			: 'Productos',
			icon			: 'uil-calender',
			subItems: [
				{
					id				: 51,
					label			: 'Items',
					icon			: 'uil-calender',
					link			: '/products/items',
					parentId	: 5
				},
				{
					id				: 52,
					label			: 'Categorias',
					link			: '/products/categories',
					parentId	: 5
				},
				{
					id				: 53,
					label			: 'Marcas',
					link			: '/products/brands',
					parentId	: 5
				},
				{
					id				: 54,
					label			: 'Tipos de items',
					link			: '/products/groups',
					parentId	: 5
				},
				{
					id				: 55,
					label			: 'Atributos',
					link			: '/products/attributes',
					parentId	: 5
				},
				{
					id				: 56,
					label			: 'Terminos de atributos',
					link			: '/products/terms',
					parentId	: 5
				},
				{
					id				: 57,
					label			: 'Unidades de medida',
					link			: '/products/units',
					parentId	: 5
				},
			]
    },
		{
			id				: 6,
			label			: 'Contabilidad',
			icon			: 'uil-calender',
			subItems: [
				{
					id				: 61,
					label			: 'Catalogo de cuentas',
					icon			: 'uil-calender',
					link			: '/accounting/accounts',
					parentId	: 6
				},
				{
					id				: 62,
					label			: 'Grupos contables',
					link			: '/accounting/groups',
					parentId	: 6
				},
				{
					id				: 63,
					label			: 'Clases de cuentas',
					link			: '/accounting/class',
					parentId	: 6
				},
			]
    },
		{
			id				: 8,
			label			: 'Usuarios',
			icon			: 'uil-user',
			subItems: [
				{
					id				: 81,
					label			: 'Perfil',
					icon			: 'uil-user',
					link			: '/users/profile',
					parentId	: 8
				},
				{
					id				: 82,
					label			: 'Lista de usuario',
					link			: '/users/list',
					parentId	: 8
				},
			]
    },
		{
			id				: 19,
			label			: 'Empresa',
			icon			: 'uil-home',
			subItems: [
				{
					id				: 191,
					label			: 'Datos empresa',
					icon			: 'uil-calender',
					link			: '/companies/company',
					parentId	: 19
				},
				{
					id				: 192,
					label			: 'Sucursales',
					link			: '/companies/branchoffice',
					parentId	: 19
				},
				{
					id				: 193,
					label			: 'Puntos de venta',
					link			: '/companies/pointofsale',
					parentId	: 19
				},
				{
					id				: 194,
					label			: 'Departamentos',
					link			: '/companies/departments',
					parentId	: 19
				},
				{
					id				: 195,
					label			: 'Bodegas',
					link			: '/companies/wineries',
					parentId	: 19
				},
				{
					id				: 196,
					label			: 'Tipos de empresa',
					link			: '/companies/companytype',
					parentId	: 19
				},
			]
    },
		{
			id				: 9,
			label			: 'Ajustes',
			icon			: 'uil-cog',
			subItems: [
				{
					id				: 91,
					label			: 'Grupos de impuestos',
					icon			: 'uil-calender',
					link			: '/general/taxes',
					parentId	: 9
				},
				{
					id				: 92,
					label			: 'Rango de impuestos',
					link			: '/general/taxrates',
					parentId	: 9
				},
				{
					id				: 93,
					label			: 'Monedas',
					link			: '/general/currency',
					parentId	: 9
				},
				{
					id				: 94,
					label			: 'Documentos de identidad',
					link			: '/general/identitydocuments',
					parentId	: 9
				},
				{
					id				: 95,
					label			: 'Encabezado reportes',
					link			: '/general/reports',
					parentId	: 9
				},
				{
					id				: 96,
					label			: 'Numeración',
					link			: '/general/resolutions',
					parentId	: 9
				},
			]
    },
   
];

