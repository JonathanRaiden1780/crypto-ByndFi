//Icons

const icon1 = <i className="bi bi-house side_menu_img"></i>;
const icon10 = <i className="bx bx-layer side_menu_img"></i>;
const icon17 = <i className="bx bx-map side_menu_img"></i>;
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
			
		],
	},

	{
		title: "Custom Pages", icon: icon17, type: "sub", menutitle: "", badgetxt: "", active: false, selected: false, dirchange: false,
		children: [
			
			{ path: "/components/custompages/error400", type: "link", active: false, selected: false, title: "400" },
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
];
export interface NestedMenuItem extends menu {
	children: (menu | NestedMenuItem)[];
}



