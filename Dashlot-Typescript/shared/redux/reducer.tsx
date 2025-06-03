import { Maindata } from "../data/ecommerce/productdata";

const initialState: any = {
    lang: "en",
    dir: "ltr",
    dataThemeMode: "light",
    dataMenuStyles: "dark",
    dataNavLayout: "vertical",
    dataHeaderStyles: "light",
    dataVerticalStyle: "overlay",
    StylebodyBg: "107 64 64",
    StyleDarkBg: "93 50 50",
    toggled: "",
    dataNavStyle: "",
    horStyle: "",
    dataPageStyle: "regular",
    dataWidth: "fullwidth",
    dataMenuPosition: "fixed",
    dataHeaderPosition: "fixed",
    iconOverlay: "",
    colorPrimaryRgb: "",
    bodyBg1: "",
    bodyBg: "",
    darkBg: "",
    Light: "",
    inputBorder: "",
    bgImg: "",
    iconText: "",
    body: {
        class: ""
    },
    ecommercedata:[
    { id: 1, title: 'Sony Headphone', preview: '/assets/images/media/12.jpg',size:"XXl",color:" Black color", price: 124, oldPrice: 257, rating: 3 },
    {
        id: 2,
        preview: '/assets/images/media/7.jpg',
        title: 'ARM Chair',
        productUrl: '/components/ecommerce/productdetails/1', // Adjust URL as per your routing structure
        price: 124,
        oldPrice: 257,
        rating: 4,
        size:"XL",
        color:"Green and Black color"
    },
    {
        id: 3,
        preview: '/assets/images/media/10.jpg',
        title: 'Mens Shirt',
        productUrl: '/components/ecommerce/productdetails/2',
        price: 46,
        oldPrice: 79,
        rating: 3.5,
        size:"XL",
        color:"Blue color"
    },
    {
        id: 4,
        preview: '/assets/images/media/4.jpg',
        title: 'Digital Watch',
        productUrl: '/components/ecommerce/productdetails/3',
        price: 89,
        oldPrice: 129,
        rating: 3.5,
        size:"XL",
        color:"White color"
    },
    {
        id: 5,
        preview: '/assets/images/media/6.jpg',
        title: 'Womens Bag',
        productUrl: '/components/ecommerce/productdetails/4',
        price: 32,
        oldPrice: 46,
        rating: 2.5,
        size:"11-12 inches",
        color:"LightGray color"
    },
    {
        id: 6,
        preview: '/assets/images/media/2.jpg',
        title: 'Kids Frock',
        productUrl: '/components/ecommerce/productdetails/5',
        price: 49,
        oldPrice: 89,
        rating: 3,
        size:"L",
        color:" LightPink color"
    },

]

};

export default function reducer(state = initialState, action:any) {
	const { type, payload } = action;

	switch (type) {

	case "ThemeChanger":
		state = payload;
		return state;
		break;

        case "ADD_TO_CART":
            return {
            ...state,
            ecommercedata: Maindata.filter((item) => item.id == payload)
            };
            
            return state;

	case "PRODUCT":
		state.ecommercedata = Maindata.filter((idx:any) => {
			return idx.id == payload;
		});
		return state;
		break;

	default:
		return state;
	}
}
  


