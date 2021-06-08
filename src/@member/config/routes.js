export { insertParams } from "../helpers/routerHelpers";

export default Object.freeze({
	members: {
		_: "/member",

		catalog: {
			_: "/member/catalog/",

			products: {
				_: "/member/catalog/products/",

				overview: {
					_: "/member/servers/details/:productId/overview/",
				},
				features: {
					_: "/member/servers/details/:productId/my-plan/",
				},
				addons: {
					_: "/member/servers/details/:productId/addons/",
				},
				serverStatus: {
					_: "/member/servers/details/:productId/server-status/",
				},
				contacts: {
					_: "/member/servers/details/:productId/administration/",
				},
			},
		    categories: {
			  _: "/member/catalog/categories/",
		    },
		    brands: {
			  _: "/member/catalog/brands/",
		    },
		},
		sales: {
			_: "/member/sales/",

			orders: {
				_: "/member/sales/orders/",
				details: "/member/sales/orders/details/:id/overview/",
			},
		},

	},
});
