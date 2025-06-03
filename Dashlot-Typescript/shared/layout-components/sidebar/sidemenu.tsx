//Icons

const icon1 = <i className="bi bi-house side_menu_img"></i>;
const icon2 = <i className="bi bi-currency-bitcoin side_menu_img"></i>;
const icon3 = <i className="bi bi-activity side_menu_img"></i>;
const icon4 = <i className="bi bi-cart2 side_menu_img"></i>;
const icon5 = <i className="bi bi-boxes side_menu_img"></i>;
const icon6 = <i className="bi bi-briefcase side_menu_img"></i>;
const icon7 = <i className="bi bi-journal-code side_menu_img"></i>;
const icon8 = <i className="bx bx-party side_menu_img"></i>;
const icon9 = <i className="bx bx-grid-alt side_menu_img"></i>;
const icon10 = <i className="bx bx-layer side_menu_img"></i>;
const icon11 = <i className="bi bi-layers side_menu_img"></i>;
const icon12 = <i className="bx bx-envelope side_menu_img"></i>;
const icon13 = <i className="bi bi-cart2 side_menu_img"></i>;
const icon14 = <i className="bx bx-table side_menu_img"></i>;
const icon15 = <i className="bi bi-bar-chart side_menu_img"></i>;
const icon16 = <i className="bx bx-map side_menu_img"></i>;
const icon17 = <i className="bx bx-map side_menu_img"></i>;
const icon18 = <i className="bx bx-store-alt side_menu_img"></i>;
//Badges
const badge1 = <span className="badge bg-secondary-transparent ms-2">New</span>;
const badge2 = <span className="badge bg-success-transparent ms-2">3</span>;

export interface menu {
	Items?: menu[]
	title?: string
	icon?: JSX.Element
	type?: string
	selected?: boolean
	active?: boolean
	path?: string
	children?: menu[]
	badge?: string
	badgetxt?: string
}
export const MENUITEMS: any = [

	{
		title: "Crm", icon: icon1, badgetxt: "", type: "sub", active: false, selected: false, dirchange: false,
		children: [
			{ path: "/components/crm/crmdashboard", type: "link", active: false, selected: false, dirchange: false, title: "Dashboard", },
			{ path: "/components/crm/projects", type: "link", active: false, selected: false, dirchange: false, title: "Projects" },
			{ path: "/components/crm/projectdescription", type: "link", active: false, selected: false, dirchange: false, title: "Projects description" },
			{ path: "/components/crm/clients", type: "link", active: false, selected: false, dirchange: false, title: "Clients" },
			{ path: "/components/crm/reports", type: "link", active: false, selected: false, dirchange: false, title: "Reports" },

		],
	},

	{
		title: "Crypto Currency", icon: icon2, badgetxt: "", type: "sub", active: false, selected: false, dirchange: false,
		children: [
			{ path: "/components/cryptocurrency/dashboard", type: "link", active: false, selected: false, dirchange: false, title: "Dashboard" },
			{ path: "/components/cryptocurrency/marketcap", type: "link", active: false, selected: false, dirchange: false, title: "Marketcap" },
			{ path: "/components/cryptocurrency/currencyexchange", type: "link", active: false, selected: false, dirchange: false, title: "Currency Exchange" },
			{ path: "/components/cryptocurrency/buysell", type: "link", active: false, selected: false, dirchange: false, title: "Buy/Sell" },
			{ path: "/components/cryptocurrency/wallet", type: "link", active: false, selected: false, dirchange: false, title: "Wallet" },
			{ path: "/components/cryptocurrency/transaction", type: "link", active: false, selected: false, dirchange: false, title: "Transaction" },
			{ path: "/components/cryptocurrency/news", type: "link", active: false, selected: false, dirchange: false, title: "News" },

		],

	},

	{
		title: "Analytics", icon: icon3, badgetxt: "", type: "sub", active: false, selected: false, dirchange: false,
		children: [
			{ path: "/components/analytics/alydashboard", type: "link", active: false, selected: false, title: "Dashboard" },
			{ path: "/components/analytics/alycustomer", type: "link", active: false, selected: false, title: "Customer" },
			{ path: "/components/analytics/alyreports", type: "link", active: false, selected: false, title: "Reports" },
		]
	},
	{
		title: "Ecommerce", icon: icon4, type: "sub", active: false, selected: false, dirchange: false, badgetxt: "",
		children: [
			{ path: "/components/ecommerce/ecdashboard", type: "link", active: false, selected: false, title: "Dashboard" },
			{ path: "/components/ecommerce/products", type: "link", active: false, selected: false, title: " Products" },
			{ path: "/components/ecommerce/productsstyle1", type: "link", active: false, selected: false, title: "Products-style1" },
			{ path: "/components/ecommerce/productslist", type: "link", active: false, selected: false, title: "Products list" },
			{ path: "/components/ecommerce/productdetails", type: "link", active: false, selected: false, title: "Product details" },
			{ path: "/components/ecommerce/cart", type: "link", active: false, selected: false, title: "Cart" },
			{ path: "/components/ecommerce/checkout", type: "link", active: false, selected: false, title: "Checkout" },
			{ path: "/components/ecommerce/invoice", type: "link", active: false, selected: false, title: "Invoice" },
			{ path: "/components/ecommerce/productinfo", type: "link", active: false, selected: false, title: "Product-info" }

		],
	},
	{
		title: "Ui Elements", icon: icon5, type: "sub", active: false, selected: false, dirchange: false,
		children: [
			{ path: "/components/elements/alerts", type: "link", active: false, selected: false, title: "Alerts" },
			{ path: "/components/elements/badges", type: "link", active: false, selected: false, title: "Badge" },
			{ path: "/components/elements/breadcrumb", type: "link", active: false, selected: false, title: "Breadcrumb" },
			{ path: "/components/elements/buttons", type: "link", active: false, selected: false, title: "Buttons" },
			{ path: "/components/elements/buttongroup", type: "link", active: false, selected: false, title: "Button Group" },
			{ path: "/components/elements/cards", type: "link", active: false, selected: false, title: "Cards" },
			{ path: "/components/elements/dropdowns", type: "link", active: false, selected: false, title: "Dropdowns" },
			{ path: "/components/elements/imagesfigures", type: "link", active: false, selected: false, title: "Images & Figures" },
			{ path: "/components/elements/listgroup", type: "link", active: false, selected: false, title: "List Group" },
			{ path: "/components/elements/navtabs", type: "link", active: false, selected: false, title: "Navs & Tabs" },
			{ path: "/components/elements/objectfit", type: "link", active: false, selected: false, title: "Object Fit" },
			{ path: "/components/elements/paginations", type: "link", active: false, selected: false, title: "Pagination" },
			{ path: "/components/elements/popovers", type: "link", active: false, selected: false, title: "Popovers" },
			{ path: "/components/elements/progress", type: "link", active: false, selected: false, title: "Progress" },
			{ path: "/components/elements/spinners", type: "link", active: false, selected: false, title: "Spinners" },
			{ path: "/components/elements/toasts", type: "link", active: false, selected: false, title: "Toasts" },
			{ path: "/components/elements/tooltips", type: "link", active: false, selected: false, title: "Tooltips" },
			{ path: "/components/elements/typography", type: "link", active: false, selected: false, title: "Typography" },

		],
	},
	{
		title: "Utilities", icon: icon6, type: "sub", active: false, selected: false, dirchange: false,
		children: [
			{ path: "/components/utilities/avatars", type: 'link', active: false, selected: false, title: 'Avatars' },
			{ path: "/components/utilities/borders", type: 'link', active: false, selected: false, title: 'Borders' },
			{ path: "/components/utilities/breakpoints", type: 'link', active: false, selected: false, title: 'Break points' },
			{ path: "/components/utilities/colors", type: 'link', active: false, selected: false, title: 'Colors' },
			{ path: "/components/utilities/columns", type: 'link', active: false, selected: false, title: 'Columns' },
			{ path: "/components/utilities/flex", type: 'link', active: false, selected: false, title: 'Flex' },
			{ path: "/components/utilities/gutters", type: 'link', active: false, selected: false, title: 'Gutters' },
			{ path: "/components/utilities/helpers", type: 'link', active: false, selected: false, title: 'Helpers' },
			{ path: "/components/utilities/position", type: 'link', active: false, selected: false, title: 'Position' },
			{ path: "/components/utilities/additionalcontent", type: 'link', active: false, selected: false, title: 'Additional Content' }
		],
	},
	{
		title: "Forms", icon: icon7, type: "sub", active: false, selected: false, dirchange: false,
		children: [
			{
				title: "Form Elements",
				type: "sub",
				selected: false,
				active: false,
				children: [
					{
						path: "/components/forms/formelements/inputs",
						title: "Inputs",
						type: "link",
						active: false,
						selected: false,
					},
					{
						path: "/components/forms/formelements/checksradios",
						title: "Checks & Radios",
						type: "link",
						active: false,
						selected: false,
					},
					{
						path: "/components/forms/formelements/inputgroup",
						title: "Input Group",
						type: "link",
						active: false,
						selected: false,
					},
					{
						path: "/components/forms/formelements/formselect",
						title: "Form Select",
						type: "link",
						active: false,
						selected: false,
					},
					{
						path: "/components/forms/formelements/rangeslider",
						title: "Range Slider",
						type: "link",
						active: false,
						selected: false,
					},
					{
						path: "/components/forms/formelements/inputmasks",
						title: "Input Masks",
						type: "link",
						active: false,
						selected: false,
					},
					{
						path: "/components/forms/formelements/fileuploads",
						title: "File Uploads",
						type: "link",
						active: false,
						selected: false,
					},
					{
						path: "/components/forms/formelements/datetimepicker",
						title: "Date,Time Picker",
						type: "link",
						active: false,
						selected: false,
					},
					{
						path: "/components/forms/formelements/colorpickers",
						title: "Color Pickers",
						type: "link",
						active: false,
						selected: false,
					}
				],
			},
			{ path: "/components/forms/floatinglabel", type: 'link', active: false, selected: false, title: 'Floating Labels' },
			{ path: "/components/forms/formlayouts", type: 'link', active: false, selected: false, title: 'Form Layouts' },
			{
				title: "Form Editors",
				type: "sub",
				selected: false,
				active: false,
				children: [
					{
						path: "/components/forms/formeditor/quilleditor",
						title: "Quill Editor",
						type: "link",
						active: false,
						selected: false,
					},
				],
			},
			{ path: "/components/forms/validation", type: 'link', active: false, selected: false, title: 'Validation' },
			{ path: "/components/forms/select2", type: 'link', active: false, selected: false, title: 'Select2' }
		]
	},
	{
		title: "Advanced Ui", icon: icon8, type: "sub", badgetxt: "", active: false, selected: false, dirchange: false,
		children: [
			{ path: "/components/advancedui/accordions-collapse", type: 'link', active: false, selected: false, title: 'Accordions & Collapse' },
			{ path: "/components/advancedui/carousel", type: 'link', active: false, selected: false, title: 'Carousel' },
			{ path: "/components/advancedui/draggablecards", type: 'link', active: false, selected: false, title: 'Draggable Cards' },
			{ path: "/components/advancedui/modalscloses", type: 'link', active: false, selected: false, title: 'Modals & Closes' },
			{ path: "/components/advancedui/navbar", type: 'link', active: false, selected: false, title: 'Navbar' },
			{ path: "/components/advancedui/offcanvas", type: 'link', active: false, selected: false, title: 'Offcanvas' },
			{ path: "/components/advancedui/placeholders", type: 'link', active: false, selected: false, title: 'Placeholders' },
			{ path: "/components/advancedui/ratings", type: 'link', active: false, selected: false, title: 'Ratings' },
			{ path: "/components/advancedui/swiperjs", type: 'link', active: false, selected: false, title: 'Swiper JS' },

		]
	},
	{
		title: "Apps", icon: icon9, badgetxt: badge1, type: "sub", active: false, selected: false, dirchange: false,
		children: [
			{
				path: "/components/apps/fullcalendar",
				type: "link",
				active: false,
				selected: false,
				title: "Full Calendar",
			},
			{
				path: "/components/apps/gallery",
				type: "link",
				active: false,
				selected: false,
				title: "Gallery",
			},
			{
				path: "/components/apps/sweetalerts",
				type: "link",
				active: false,
				selected: false,
				title: "Sweet Alerts",
			},
		],
	},
	{
		title: "Nested Menu", icon: icon10, type: "sub", active: false, selected: false, dirchange: false,
		children: [
			{
				path: "",
				title: "Level-1",
				type: "empty",
				active: false,
				selected: false,
			},
			{
				title: "Level-2",
				type: "sub",
				selected: false,
				active: false,
				children: [
					{
						path: "",
						title: "Level-2.1",
						type: "empty",
						active: false,
						selected: false,
					},
					{

						title: "Level-2.2",
						type: "sub",
						active: false,
						selected: false,
						children: [
							{
								path: "",
								title: "Level-2.2.1",
								type: "empty",
								active: false,
								selected: false,
							},
							{
								path: "",
								title: "Level-2.2.2",
								type: "empty",
								active: false,
								selected: false,
							},
						]
					},

				],
			},
		],
	},
	{
		title: "Pages", icon: icon11, type: "sub", active: false, selected: false, dirchange: false,
		children: [
			{ path: "/components/pages/profile", type: "link", active: false, selected: false, title: "Profile" },
			{ path: "/components/pages/emptypage", type: "link", active: false, selected: false, title: "Empty Page" },
			{ id: 109, path: "/components/pages/aboutus", type: "link", active: false, selected: false, title: "About us" },
			{ id: 110, path: "/components/pages/services", type: "link", active: false, selected: false, title: "Services" },
			{ id: 111, path: "/components/pages/faqs", type: "link", active: false, selected: false, title: "FAQS " },
			{ id: 112, path: "/components/pages/terms", type: "link", active: false, selected: false, title: "Terms" },
			{ id: 113, path: "/components/pages/pgsinvoice", type: "link", active: false, selected: false, title: "Invoice" },
			{ id: 114, path: "/components/pages/pricingtables", type: "link", active: false, selected: false, title: "Pricing Tables" },
			{ id: 113, path: "/components/pages/notifications", type: "link", active: false, selected: false, title: "Notifications" },
			{
				id: 115, title: "Blog", type: "sub", active: false, selected: false, children: [
					{ id: 116, path: "/components/pages/blog/blog", type: "link", active: false, selected: false, title: "Blog" },
					{ id: 117, path: "/components/pages/blog/blogdetails", type: "link", active: false, selected: false, title: "Blog Details" },
					{ id: 118, path: "/components/pages/blog/blogpost", type: "link", active: false, selected: false, title: "Blog Post" }
				]
			},
			{
				id: 119, title: "File Manager", type: "sub", active: false, selected: false, children: [
					{ id: 120, path: "/components/pages/filemanager/filemanager", type: "link", active: false, selected: false, title: "File Manager" },
					{ id: 121, path: "/components/pages/filemanager/filemanager-list", type: "link", active: false, selected: false, title: "File Manager List" },
					{ id: 122, path: "/components/pages/filemanager/filedetails", type: "link", active: false, selected: false, title: "File Details" },

				]
			}
		],
	},
	{
		title: "Mail", icon: icon12, type: "sub", active: false, selected: false, dirchange: false,
		children: [
			{ id: 126, path: "/components/mail/email", type: "link", active: false, selected: false, title: "Email" },
			{ id: 127, path: "/components/mail/emailservices", type: "link", active: false, selected: false, title: "Email Services" },
			{ id: 128, path: "/components/mail/readmessages", type: "link", active: false, selected: false, title: "Read Messages" },
		],
	},
	{
		title: "Components", icon: icon13, type: "sub", menutitle: "", badgetxt: "", active: false, selected: false, dirchange: false,
		children: [
			{ id: 131, path: "/components/components/widgets", type: "link", active: false, selected: false, title: "Widgets" },
			{ id: 134, path: "/components/components/contactstyles", type: "link", active: false, selected: false, title: "Contact-Styles" },
			{ id: 135, path: "/components/components/caltoactions", type: "link", active: false, selected: false, title: "Cal-to-actions" },
			{ id: 136, path: "/components/components/userlist", type: "link", active: false, selected: false, title: "UserList" },
			{ id: 137, path: "/components/components/timeline", type: "link", active: false, selected: false, title: "Timeline" },
			{ id: 138, path: "/components/components/ribbons", type: "link", active: false, selected: false, title: "Ribbons" },
			{ id: 139, path: "/components/components/testimonials", type: "link", active: false, selected: false, title: "Testimonials" },
			{ id: 143, path: "/components/components/newsletter", type: "link", active: false, selected: false, title: "Newsletter" },
			{ id: 145, path: "/components/components/portfolio", type: "link", active: false, selected: false, title: "Portfolio" },
			{ id: 147, path: "/components/components/user-cards", type: "link", active: false, selected: false, title: "User-cards" },
			{ id: 148, path: "/components/components/videos", type: "link", active: false, selected: false, title: "Videos" },
		],
	},
	{
		title: "Tables", icon: icon14, type: "sub", menutitle: "", badgetxt: badge2, active: false, selected: false, dirchange: false,
		children: [
			{
				path: "/components/tables/tables",
				title: "Tables",
				type: "link",
				active: false,
				selected: false,
			},
			{
				path: "/components/tables/gridjstables",
				title: "Grid JS Tables",
				type: "link",
				active: false,
				selected: false,
			},
			{
				path: "/components/tables/datatables",
				title: "Data Tables",
				type: "link",
				active: false,
				selected: false,
			},
		],
	},
	{
		title: "Charts", icon: icon15, type: "sub", menutitle: "", badgetxt: "", active: false, selected: false, dirchange: false,
		children: [
			{
				title: "Apex Charts",
				type: "sub",
				selected: false,
				active: false,
				children: [
					{
						path: "/components/charts/apexcharts/linecharts",
						title: "Line Charts",
						type: "link",
						active: false,
						selected: false,
					},
					{
						path: "/components/charts/apexcharts/areacharts",

						title: "Area Charts",
						type: "link",
						active: false,
						selected: false,
					},
					{
						path: "/components/charts/apexcharts/columncharts",
						title: "Column Charts",
						type: "link",
						active: false,
						selected: false,
					},
					{
						path: "/components/charts/apexcharts/barcharts",
						title: "Bar Charts",
						type: "link",
						active: false,
						selected: false,
					},
					{
						path: "/components/charts/apexcharts/mixedcharts",
						title: "Mixed Charts",
						type: "link",
						active: false,
						selected: false,
					},
					{
						path: "/components/charts/apexcharts/rangeareacharts",
						title: "Range Area Charts",
						type: "link",
						active: false,
						selected: false,
					},
					{
						path: "/components/charts/apexcharts/timelinecharts",
						title: "Timeline Charts",
						type: "link",
						active: false,
						selected: false,
					},
					{
						path: "/components/charts/apexcharts/candlestickcharts",
						title: "CandleStick Charts",
						type: "link",
						active: false,
						selected: false,
					},
					{
						path: "/components/charts/apexcharts/boxplotcharts",
						title: "Boxplot Charts",
						type: "link",
						active: false,
						selected: false,
					},
					{
						path: "/components/charts/apexcharts/bubblecharts",
						title: "Bubble Charts",
						type: "link",
						active: false,
						selected: false,
					},
					{
						path: "/components/charts/apexcharts/scattercharts",
						title: "Scatter Charts",
						type: "link",
						active: false,
						selected: false,
					},
					{
						path: "/components/charts/apexcharts/heatmapcharts",
						title: "Heatmap Charts",
						type: "link",
						active: false,
						selected: false,
					},
					{
						path: "/components/charts/apexcharts/treemapcharts",
						title: "Treemap Charts",
						type: "link",
						active: false,
						selected: false,
					},
					{
						path: "/components/charts/apexcharts/piecharts",
						title: "Pie Charts",
						type: "link",
						active: false,
						selected: false,
					},
					{
						path: "/components/charts/apexcharts/radialbarcharts",
						title: "Radialbar Charts",
						type: "link",
						active: false,
						selected: false,
					},
					{
						path: "/components/charts/apexcharts/radarcharts",
						title: "Radar Charts",
						type: "link",
						active: false,
						selected: false,
					},
					{
						path: "/components/charts/apexcharts/polarareacharts",
						title: "Polararea Charts",
						type: "link",
						active: false,
						selected: false,
					}
				],
			},
			{
				path: "/components/charts/chartjscharts",
				title: "Chartjs Charts",
				type: "link",
				active: false,
				selected: false,
			},
			{
				path: "/components/charts/echartcharts",
				title: "Echart Charts",
				type: "link",
				active: false,
				selected: false,
			},
		],
	},
	{
		title: "Maps", icon: icon16, type: "sub", menutitle: "", badgetxt: "", active: false, selected: false, dirchange: false,
		children: [
			{
				path: "/components/maps/leafletmaps",
				title: "Leaflet Maps",
				type: "link",
				active: false,
				selected: false,
			},
			{
				path: "/components/maps/vectormaps",
				title: "Vector Maps",
				type: "link",
				active: false,
				selected: false,
			},
		],
	},
	{
		title: "Custom Pages", icon: icon17, type: "sub", menutitle: "", badgetxt: "", active: false, selected: false, dirchange: false,
		children: [
			{ path: "/components/custompages/login", type: "link", active: false, selected: false, title: "Login" },
			{ path: "/components/custompages/register", type: "link", active: false, selected: false, title: "Register" },
			{ path: "/components/custompages/forgotpassword", type: "link", active: false, selected: false, title: "Forgot Password" },
			{ path: "/components/custompages/lockscreen", type: "link", active: false, selected: false, title: "Lockscreen" },
			{ path: "/components/custompages/underconstruction", type: "link", active: false, selected: false, title: "Under Construction" },
			{ path: "/components/custompages/error400", type: "link", active: false, selected: false, title: "400" },
			{ path: "/components/custompages/error401", type: "link", active: false, selected: false, title: "401" },
			{ path: "/components/custompages/error403", type: "link", active: false, selected: false, title: "403" },
			{ path: "/components/custompages/error404", type: "link", active: false, selected: false, title: "404" },
			{ path: "/components/custompages/error500", type: "link", active: false, selected: false, title: "500" },
			{ path: "/components/custompages/error501", type: "link", active: false, selected: false, title: "501" },
			{ path: "/components/custompages/error503", type: "link", active: false, selected: false, title: "503" },
		],
	},
	{ path: "/components/icons/icons", icon: icon8, type: "link", active: false, selected: false, dirchange: false, title: "Icons" },
];
export interface NestedMenuItem extends menu {
	children: (menu | NestedMenuItem)[];
}



