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
  Items?: menu[];
  title?: string;
  icon?: JSX.Element;
  type?: string;
  selected?: boolean;
  active?: boolean;
  path?: string;
  children?: menu[];
  badge?: string;
  badgetxt?: string;
}
export const MENUITEMS: any = [
  {
    title: "Market Maker",
    icon: icon4,
    type: "sub",
    active: false,
    selected: false,
    dirchange: false,
    badgetxt: "",
    children: [{ path: "/components/marketmaker/dashboard/", type: "link", active: false, selected: false, title: "Panamerican" }],
  },
  {
    title: "BeyondFi",
    icon: icon2,
    badgetxt: "",
    type: "sub",
    active: false,
    selected: false,
    dirchange: false,
    children: [{ path: "/components/beyondfi/dashboard", type: "link", active: false, selected: false, dirchange: false, title: "News" }],
  },
];
export interface NestedMenuItem extends menu {
  children: (menu | NestedMenuItem)[];
}
