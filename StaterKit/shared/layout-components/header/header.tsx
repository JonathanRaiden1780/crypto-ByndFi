import { Fragment, useEffect, useState } from 'react';
import { Button, Dropdown, Form, InputGroup, ListGroup, ListGroupItem, Modal, Nav, NavLink, Offcanvas, OverlayTrigger, Tab, Tooltip } from 'react-bootstrap';
import { connect } from "react-redux";
import { ThemeChanger } from '../../../shared/redux/action';
import SimpleBar from "simplebar-react";
import store from '../../../shared/redux/store';
import { MENUITEMS } from '../sidebar/sidemenu';
import { basePath } from '@/next.config';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = ({ local_varaiable, ThemeChanger }: any) => {
    //offcanvas
    const [show3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
    //Modal search
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //
    const [searchval, setsearchval] = useState("Type something");
    const [show2, setShow2] = useState(false);
    const [NavData, setNavData] = useState([]);
    const [searchcolor, setsearchcolor] = useState("text-dark");
    const [show1, setShow1] = useState(false);
    const [InputValue, setInputValue] = useState("");

    const myfunction = (inputvalue: any) => {
        document.querySelector(".search-result")?.classList.remove("d-none");

        const i: any = [];
        const allElement2: any = [];

        MENUITEMS.forEach((mainLevel: any) => {
            if (mainLevel.children) {
                setShow1(true);
                mainLevel.children.forEach((subLevel: any) => {
                    i.push(subLevel);
                    if (subLevel.children) {
                        subLevel.children.forEach((subLevel1: any) => {
                            i.push(subLevel1);
                            if (subLevel1.children) {
                                subLevel1.children.forEach((subLevel2: any) => {
                                    i.push(subLevel2);
                                });
                            }
                        });
                    }
                });
            }
        });

        for (const allElement of i) {
            if (allElement.title.toLowerCase().includes(inputvalue.toLowerCase())) {
                if (allElement.title.toLowerCase().startsWith(inputvalue.toLowerCase())) {
                    setShow2(true);
                    allElement2.push(allElement);
                }
            }
        }

        if (!allElement2.length || inputvalue === "") {
            if (inputvalue === "") {
                setShow2(false);
                setsearchval("Type something");
                setsearchcolor('text-dark');
            }
            if (!allElement2.length) {
                setShow2(false);
                setsearchcolor('text-danger');
                setsearchval("There is no component with this name");
            }
        }

        setNavData(allElement2);
    };

    const demo = [
        { id: 1, src: "/assets/images/users/12.jpg", name: 'Maryam Naz', contact: '(11)+390-2309' },
        { id: 2, src: "/assets/images/users/2.jpg", name: 'Sahar Darya', contact: '(21)+326-1254' },
        { id: 3, src: "/assets/images/users/4.jpg", name: 'Maryam Naz', contact: '(54)+125-7861' },
        { id: 4, src: "/assets/images/users/5.jpg", name: 'Yolduz Rafi', contact: '(14)+025-5621' },
        { id: 5, src: "/assets/images/users/8.jpg", name: 'Nargis Hawa', contact: '(11)+458-1205' },
        { id: 6, src: "/assets/images/users/3.jpg", name: 'Khadija Mehr', contact: '(21)+654-9517' },
        { id: 7, src: "/assets/images/users/14.jpg", name: 'Petey Cruiser', contact: '(14)+753-4268' },
        { id: 8, src: "/assets/images/users/11.jpg", name: 'Khadija Mehr', contact: '(10)+111-1611' },

    ];
    // FullScreen
    const [fullScreen, setFullScreen] = useState(false);

    const toggleFullScreen = () => {
        const elem = document.documentElement;

        if (!document.fullscreenElement) {
            elem.requestFullscreen().then(() => setFullScreen(true));
        } else {
            document.exitFullscreen().then(() => setFullScreen(false));
        }
    };

    const handleFullscreenChange = () => {
        setFullScreen(!!document.fullscreenElement);
    };

    useEffect(() => {
        document.addEventListener('fullscreenchange', handleFullscreenChange);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
        };
    }, []);

    const cartProduct = [
        {
            id: 1,
            src: "/assets/images/media/10.jpg",
            name: 'Mens Solid Bomber jacket',
            text1: '2 x $12',
            text2: '$24',
            // text: '6gb Ram'
        },
        {
            id: 2,
            src: "/assets/images/media/6.jpg",
            name: 'Handbag',
            text1: '3 x $20',
            text2: '$60',
            // text: 'Free shipping'
        },
        {
            id: 3,
            src: "/assets/images/media/12.jpg",
            name: 'Head Phones',
            text1: '1 x $116',
            text2: '$116',
            // text: '$999'
        },
        {
            id: 4,
            src: "/assets/images/media/13.jpg",
            name: 'College bag',
            text1: '1 x $57',
            text2: '$57',
            // text: '50MM'
        },
        {
            id: 5,
            src: "/assets/images/media/15.jpg",
            name: 'Soft Toy',
            text1: '1 x $20',
            text2: '$20',
            // text: 'Sports'
        },
        {
            id: 6,
            src: "/assets/images/media/4.jpg",
            name: 'Smart Watch',
            text1: '2 x $49',
            text2: '$98',
            // text: 'Sports'
        },
    ];

    const [cartItems, setCartItems] = useState([...cartProduct]);
    const [cartItemCount, setCartItemCount] = useState(cartProduct.length);

    const handleRemove = (itemId: any) => {
        const updatedCart = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCart);
        setCartItemCount(updatedCart.length);
    };

    const ToggleDark = () => {

        ThemeChanger({
            ...local_varaiable,
            "dataThemeMode": local_varaiable.dataThemeMode == 'dark' ? 'light' : 'dark',
            "dataHeaderStyles": local_varaiable.dataThemeMode == 'dark' ? 'light' : 'dark',
            "dataMenuStyles": 'dark',
            "bodyBg": "",
            "bodyBg1": "",
            "Light": "",
            "inputBorder": "",
        });
        const theme = store.getState();

        if (theme.dataThemeMode != 'dark') {

            ThemeChanger({
                ...theme,
                "bodyBg1": '',
                "bodyBg2": '',
                "darkBg": '',
                "inputBorder": '',
            });
            localStorage.removeItem("dashlotdarktheme");
            localStorage.removeItem("darkBgRGB1");
            localStorage.removeItem("darkBgRGB2");
            localStorage.removeItem("darkBgRGB3");
            localStorage.removeItem("darkBgRGB4");
            localStorage.removeItem("dashlotMenu");
            localStorage.removeItem("dashlotHeader");
        }
        else {
            localStorage.setItem("dashlotdarktheme", "dark");
            localStorage.removeItem("dashlotHeader");
            localStorage.removeItem("dashlotlighttheme");
            localStorage.removeItem("dashlotMenu");
        }

    };
    //Modal search
    function menuClose() {
        const theme = store.getState();
        ThemeChanger({ ...theme, "toggled": "close" });
    }
    const swichermainright = () => {
        document.querySelector(".offcanvas-end")?.classList.toggle("show");
        if (document.querySelector(".switcher-backdrop")?.classList.contains('d-none')) {
            document.querySelector(".switcher-backdrop")?.classList.add("d-block");
            document.querySelector(".switcher-backdrop")?.classList.remove("d-none");
        }
    };

    const toggleSidebar = () => {
        const theme = store.getState();
        const sidemenuType = theme.dataNavLayout;
        if (window.innerWidth >= 992) {
            if (sidemenuType === 'vertical') {
                const verticalStyle = theme.dataVerticalStyle;
                const navStyle = theme.dataNavStyle;
                switch (verticalStyle) {
                    // closed
                    case "closed":
                        ThemeChanger({ ...theme, "dataNavStyle": "" });
                        if (theme.toggled === "close-menu-close") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        } else {
                            ThemeChanger({ ...theme, "toggled": "close-menu-close" });
                        }
                        break;
                    // icon-overlay
                    case "overlay":

                        ThemeChanger({ ...theme, "dataNavStyle": "" });
                        if (theme.toggled === "icon-overlay-close") {
                            ThemeChanger({ ...theme, "toggled": "", "iconOverlay": '' });
                        } else {
                            if (window.innerWidth >= 992) {
                                ThemeChanger({ ...theme, "toggled": "icon-overlay-close", "iconOverlay": '' });
                            }
                        }
                        break;
                    // icon-text
                    case "icontext":
                        ThemeChanger({ ...theme, "dataNavStyle": "" });
                        if (theme.toggled === "icon-text-close") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        } else {
                            ThemeChanger({ ...theme, "toggled": "icon-text-close" });
                        }
                        break;
                    // doublemenu
                    case "doublemenu":
                        ThemeChanger({ ...theme, "dataNavStyle": "" });
                        if (theme.toggled === "double-menu-open") {
                            ThemeChanger({ ...theme, "toggled": "double-menu-close" });
                        } else {
                            const sidemenu = document.querySelector(".side-menu__item.active");
                            if (sidemenu) {
                                if (sidemenu.nextElementSibling) {
                                    sidemenu.nextElementSibling.classList.add("double-menu-active");
                                    ThemeChanger({ ...theme, "toggled": "double-menu-open" });
                                } else {

                                    ThemeChanger({ ...theme, "toggled": "double-menu-close" });
                                }
                            }
                        }

                        break;
                    // detached
                    case "detached":
                        if (theme.toggled === "detached-close") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        } else {
                            ThemeChanger({ ...theme, "toggled": "detached-close" });
                        }
                        break;
                    // default
                    case "default":
                        ThemeChanger({ ...theme, "toggled": "" });

                }
                switch (navStyle) {
                    case "menu-click":
                        if (theme.toggled === "menu-click-closed") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        }
                        else {
                            ThemeChanger({ ...theme, "toggled": "menu-click-closed" });
                        }
                        break;
                    // icon-overlay
                    case "menu-hover":
                        if (theme.toggled === "menu-hover-closed") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        } else {
                            ThemeChanger({ ...theme, "toggled": "menu-hover-closed" });

                        }
                        break;
                    case "icon-click":
                        if (theme.toggled === "icon-click-closed") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        } else {
                            ThemeChanger({ ...theme, "toggled": "icon-click-closed" });

                        }
                        break;
                    case "icon-hover":
                        if (theme.toggled === "icon-hover-closed") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        } else {
                            ThemeChanger({ ...theme, "toggled": "icon-hover-closed" });

                        }
                        break;
                }
            }
        }
        else {
            if (theme.toggled === "close") {
                ThemeChanger({ ...theme, "toggled": "open" });

                setTimeout(() => {
                    if (theme.toggled == "open") {
                        const overlay = document.querySelector("#responsive-overlay");

                        if (overlay) {
                            overlay.classList.add("active");
                            overlay.addEventListener("click", () => {
                                const overlay = document.querySelector("#responsive-overlay");

                                if (overlay) {
                                    overlay.classList.remove("active");
                                    menuClose();
                                }
                            });
                        }
                    }

                    window.addEventListener("resize", () => {
                        if (window.screen.width >= 992) {
                            const overlay = document.querySelector("#responsive-overlay");

                            if (overlay) {
                                overlay.classList.remove("active");
                            }
                        }
                    });
                }, 100);
            } else {
                ThemeChanger({ ...theme, "toggled": "close" });
            }
        }
    };

    const initialNotifications = [
        { id: 1, icon: "ti ti-circle-check", name: "One task completed.", content: "Consetetur amet invidunt magna takimata sea.", time: "15:00", avatarcolor: "primary", },
        { id: 2, icon: "ti ti-server-2", name: "Server Rebooted", content: "Voluptua takimata lorem est et epsum bari.", time: "12:00", avatarcolor: "secondary", },
        { id: 3, icon: "ti ti-circle", name: "3 new comments", content: "someone commented on  new projects.", time: "13:50", avatarcolor: "success", },
        { id: 4, icon: "ti ti-thumb-up", name: "Anna liked your post.", content: "Sea voluptua at sanctus valited of maybe.", time: "05:20", avatarcolor: "purple", },
        { id: 5, icon: "ti ti-file-alert", name: "Application error.", content: "Sed et at the time lorem upsum wened.", time: "05:50", avatarcolor: "info", },
        { id: 6, icon: "ti ti-server-2", name: "Server Rebooted", content: "Voluptua takimata lorem est et time of tode.", time: "11:00", avatarcolor: "secondary", },
    ];

    const [notifications, setNotifications] = useState([...initialNotifications]);

    const handleNotificationClose = (index: any) => {
        // Create a copy of the notifications array and remove the item at the specified index
        const updatedNotifications = [...notifications];
        updatedNotifications.splice(index, 1);
        setNotifications(updatedNotifications);

    };
    const router = useRouter();

    const handleItemClick = () => {
        router.push("#!");
    }
    const [isCartOpen, setCartOpen] = useState(false);

    const handleLinkClick = () => {
        // Close the cart when the link is clicked
        setCartOpen(false);
    };
    return (
        <Fragment>
            <header className="app-header">
                <div className="main-header-container container-fluid">

                    <div className="header-content-left">
                        <div className="header-element">
                            <div className="horizontal-logo">
                                <Link href={"/components/crm/crmdashboard"} className="header-logo">
                                    <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/desktop-logo.png`} alt="logo" className="desktop-logo" />
                                    <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/toggle-logo.png`} alt="logo" className="toggle-logo" />
                                    <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/desktop-dark.png`} alt="logo" className="desktop-dark" />
                                    <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/toggle-dark.png`} alt="logo" className="toggle-dark" />
                                </Link>
                            </div>
                        </div>
                        <div className="header-element">
                            <Link aria-label="Hide Sidebar" href="#!"
                                className="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle " onClick={() => toggleSidebar()} data-bs-toggle="sidebar"
                            >
                                <i className="bi bi-justify-left header-link-icon"></i></Link>
                        </div>
                    </div>
                    <div className="header-content-right">
                        <div className="header-element header-search">
                            <Link href="#!" className="header-link" data-bs-toggle="modal" data-bs-target="#searchModal" onClick={() => handleShow()}>
                                <i className="bi bi-search header-link-icon"></i>
                            </Link>
                            <Modal className='search-modal'
                                show={show}
                                onHide={() => handleClose()}
                                keyboard={false}
                                size='lg'
                                onChange={(ele: any) => {
                                    myfunction(ele.target.value);
                                    setInputValue(ele.target.value);
                                }}
                            >
                                <Modal.Header closeButton>
                                    <InputGroup className="">
                                        <Form.Control className=' border-0'
                                            placeholder="Search anything..."
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                            type='search'
                                        />
                                        <Link href="#!" className="input-group-text bg-transparent border-0 justify-content-center pe-3"><i className="ti ti-search"></i></Link>
                                    </InputGroup>
                                </Modal.Header>
                                <Modal.Body>
                                    {show1 ? (
                                        <div className="search-result p-absolute  border mt-1">
                                            <div className="search-items">
                                                <h6 className=" mx-3 my-2 text-break">
                                                    Search result of " {InputValue} "{" "}
                                                </h6>
                                            </div>
                                            <ul className="">
                                                {show2 ? (
                                                    NavData.map((e: any) => (
                                                        <li key={Math.random()}>
                                                            <Link
                                                                className='search-result-item'
                                                                href={`${e.path}/`}
                                                                onClick={() => {
                                                                    setShow1(false);
                                                                    setInputValue("");
                                                                    handleClose(); // Close the modal when the link is clicked
                                                                }}
                                                            >
                                                                {e.title}
                                                            </Link>
                                                        </li>
                                                    ))
                                                ) : (
                                                    <b
                                                        className={`${searchcolor} search-items-result ms-3`}
                                                    >
                                                        {searchval}
                                                    </b>
                                                )}
                                            </ul>
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                    <p className="my-2 h6 text-muted">Recent Searches</p>
                                    <ListGroup as="a" href='#!' className="list-group">
                                        <ListGroup.Item className="list-group-item-action text-truncate" onClick={handleClose}>
                                            <i className="ti ti-history fs-15 me-2 opacity-75 d-inline-block"></i>
                                            <span>Spruha Admin Dashboard - Themeforest</span>
                                        </ListGroup.Item>
                                        <ListGroup.Item className="list-group-item-action text-truncate" onClick={handleClose}>
                                            <i className="ti ti-history fs-15 me-2 opacity-75 d-inline-block"></i>
                                            <span>Bootstrap 5 Latest - Bootstrap</span>
                                        </ListGroup.Item>
                                        <ListGroup.Item className="list-group-item-action text-truncate" onClick={handleClose}>
                                            <i className="ti ti-history fs-15 me-2 opacity-75 d-inline-block"></i>
                                            <span>Slica – Bootstrap Responsive Flat Admin Dashboard HTML5 Template</span>
                                        </ListGroup.Item>
                                        <ListGroup.Item className="list-group-item-action text-truncate" onClick={handleClose}>
                                            <i className="ti ti-history fs-15 me-2 opacity-75 d-inline-block"></i>
                                            <span>Xia Admin Template - Themeforest</span>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="primary" onClick={handleClose}>
                                        Search
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>

                        <Dropdown className="header-element country-selector">
                            <Dropdown.Toggle as="a" href='#!' role='button' className="header-link dropdown-toggle no-caret border-0" data-bs-auto-close="outside" data-bs-toggle="dropdown">
                                <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/flags/us_flag.jpg`} className="rounded-circle header-link-icon" alt="image" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu as="ul" className="main-header-dropdown dropdown-menu dropdown-menu-end" data-popper-placement="none">
                                <li>
                                    <Link className="dropdown-item d-flex align-items-center" href="#!">
                                        <span className="avatar avatar-xs lh-1 me-2">
                                            <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/flags/us_flag.jpg`} alt="image" />
                                        </span>
                                        English
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item d-flex align-items-center" href="#!">
                                        <span className="avatar avatar-xs lh-1 me-2">
                                            <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/flags/spain_flag.jpg`} alt="img" />
                                        </span>
                                        Spanish
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item d-flex align-items-center" href="#!">
                                        <span className="avatar avatar-xs lh-1 me-2">
                                            <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/flags/french_flag.jpg`} alt="img" />
                                        </span>
                                        French
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item d-flex align-items-center" href="#!">
                                        <span className="avatar avatar-xs lh-1 me-2">
                                            <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/flags/germany_flag.jpg`} alt="img" />
                                        </span>
                                        German
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item d-flex align-items-center" href="#!">
                                        <span className="avatar avatar-xs lh-1 me-2">
                                            <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/flags/italy_flag.jpg`} alt="img" />
                                        </span>
                                        Italian
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item d-flex align-items-center" href="#!">
                                        <span className="avatar avatar-xs lh-1 me-2">
                                            <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/flags/russia_flag.jpg`} alt="img" />
                                        </span>
                                        Russian
                                    </Link>
                                </li>
                            </Dropdown.Menu>
                        </Dropdown>
                        <div className="header-element header-theme-mode">
                            <Link href="#!" className="header-link layout-setting" onClick={() => ToggleDark()}>
                                <span className="light-layout">
                                    <i className="bi bi-cloud-moon header-link-icon"></i>
                                </span>
                                <span className="dark-layout">
                                    <i className="bi bi-cloud-sun header-link-icon"></i>
                                </span>
                            </Link>
                        </div>

                        <Dropdown className="header-element cart-dropdown" autoClose="outside">

                            <Dropdown.Toggle as="a" href='#!' role='button' className="header-link dropdown-toggle" data-bs-auto-close="outside" data-bs-toggle="dropdown" >
                                <i className="bi bi-cart-check header-link-icon" ></i>
                                <span className="badge bg-danger rounded-pill header-icon-badge" id="cart-icon-badge">{cartItemCount}</span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu as="ul" className="main-header-dropdown  dropdown-menu-end"  >
                                <Dropdown.Header className="p-3  bg-header-image p-3 text-fixed-white">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="flex-grow-1">
                                            <h5 className="mb-1 fw-500">Shopping Cart</h5>
                                            <span className="fs-12" id="cart-data">{cartItemCount} Item{cartItemCount !== 1 ? 's' : ''}</span>
                                        </div>
                                        <div>
                                            <Link href="#!" className="min-w-fit-content btn btn-sm btn-white ms-2 my-auto">Checkout</Link>
                                        </div>
                                    </div>
                                </Dropdown.Header>
                                <Dropdown.Divider className="dropdown-divider"></Dropdown.Divider>
                                <SimpleBar id="header-dropdown-scroll1">
                                    <div>
                                        {cartItems.map((idx) => (
                                            <Dropdown.Item as="li" className="dropdown-item d-flex align-items-center position-relative" key={idx.id} >

                                                <div className="me-2 min-w-fit-content">
                                                    <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}${idx.src}`} alt="img" className="avatar avatar-md rounded-circle" />
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <div className="d-flex align-items-center">
                                                        <Link href={"#!"} className="mb-0 text-truncate flex-grow-1 h6">{idx.name}</Link>
                                                        <div className="align-self-start text-danger ms-3 fs-15 z-3 dropdown-item-close"
                                                            onClick={() => handleRemove(idx.id)}>
                                                            <i className="ti ti-trash"></i>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <span className="fs-12 text-gray-600 flex-grow-1 text-truncate">{idx.text1}</span>
                                                        <span className="h6 ms-3 mb-0">{idx.text2}</span>
                                                    </div>
                                                </div>

                                            </Dropdown.Item>
                                        ))}

                                    </div>
                                    <div className={`p-3 empty-header-item1 border-top ${cartItems.length === 0 ? "d-none" : "d-block"}`}>
                                        <div className="d-grid">
                                            <Link href={"#!"} className="btn btn-primary">View All</Link>
                                        </div>
                                    </div>
                                </SimpleBar>
                                <div className={`p-5 empty-item1 ${cartItems.length === 0 ? 'd-block' : 'd-none'}`}>
                                    <div className="text-center">
                                        <span className="avatar avatar-xl avatar-rounded bg-secondary-transparent">
                                            <i className="ri-shopping-cart-2-line fs-2"></i>
                                        </span>
                                        <h6 className="fw-semibold mt-3 text-dark">Your Cart is Empty</h6>
                                    </div>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown className="header-element notifications-dropdown" autoClose="outside">
                            <Dropdown.Toggle as="a" href='#!' role='button' className="header-link dropdown-toggle no-caret border-0" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" >
                                <i className="bi bi-bell header-link-icon"  ></i>

                                <span className="badge bg-success rounded-pill header-icon-badge">6</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="main-header-dropdown dropdown-menu dropdown-menu-end" data-popper-placement="none" >
                                <Dropdown.Header className="p-3 dropdown-header bg-header-image p-3 text-fixed-white">
                                    <div className="d-flex align-items-end justify-content-between align-items-center">
                                        <div className="flex-grow-1">
                                            <h5 className="mb-1 fw-500">Notifications</h5>
                                            <span className="fs-12">{`${notifications.length} Unread`}</span>
                                        </div>
                                        <div>
                                            <Link className="min-w-fit-content btn btn-white btn-sm ms-2" href={"#!"}>View All</Link>
                                        </div>
                                    </div>
                                </Dropdown.Header>
                                <Dropdown.Divider className="dropdown-divider"></Dropdown.Divider>
                                <div >
                                    <SimpleBar id="header-notification-scroll">

                                        {notifications.map((notification, index) => (

                                            <Dropdown.Item as="li" key={index} >


                                                <div className="d-flex align-items-center position-relative">
                                                    <div className="me-2 min-w-fit-content">
                                                        <span className={`avatar avatar-md rounded-circle bg-${notification.avatarcolor}-transparent text-${notification.avatarcolor} fs-5`}><i className={notification.icon}></i></span>
                                                    </div>
                                                    <div className="d-flex">
                                                        <div className="flex-grow-1 overflow-hidden">
                                                            <Link href={"#!"} className="mb-1" onClick={handleLinkClick}>{notification.name}</Link>
                                                            <p className="mb-0 text-gray-600 lh-sm fs-13">{notification.content}</p>
                                                        </div>
                                                        <div className="d-grid">
                                                            <span className="align-self-start text-muted fs-12 ms-3">{notification.time}</span>
                                                            <Link href="#!" className="ms-4 text-muted me-1 dropdown-item-close1 ms-4" onClick={() => handleNotificationClose(index)}><i className="ti ti-x fs-16"></i></Link>
                                                        </div>

                                                    </div>
                                                </div>

                                            </Dropdown.Item>
                                        ))}

                                    </SimpleBar>
                                    <div className={`p-3 empty-header-item1 border-top ${notifications.length === 0 ? "d-none" : "d-block"}`}>
                                        <div className="d-grid">
                                            <Link href={"#!"} className="btn btn-primary">View All</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className={`p-5 empty-item1 ${notifications.length === 0 ? 'd-block' : 'd-none'}`}>
                                    <div className="text-center">
                                        <span className="avatar avatar-xl avatar-rounded bg-secondary-transparent">
                                            <i className="ri-notification-off-line fs-2"></i>
                                        </span>
                                        <h6 className="fw-semibold text-default mt-3">No New Notifications</h6>
                                    </div>
                                </div>
                            </Dropdown.Menu>

                        </Dropdown>
                        <Dropdown className="header-element header-shortcuts-dropdown">
                            <Dropdown.Toggle as="a" href='#!' role='button' className="header-link dropdown-toggle no-caret border-0" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" >
                                <i className="bi bi-chat-dots header-link-icon" ></i>
                                <span className="badge bg-secondary rounded-pill header-icon-badge pulse pulse-secondary" >6</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="main-header-dropdown header-shortcuts-dropdown dropdown-menu pb-0 dropdown-menu-end">
                                <div className="p-3 dropdown-header bg-header-image text-fixed-white">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="flex-grow-1">
                                            <h5 className="mb-1 fw-500">Messages</h5>
                                            <span className="fs-12">3 Unread</span>
                                        </div>
                                        <div>
                                            <Link className="min-w-fit-content btn btn-sm btn-white ms-2" href={"#!"} >View All</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown-divider mb-0"></div>
                                <div >
                                    <SimpleBar id="header-dropdown-scroll3" >
                                        <div>
                                            <Dropdown.Item className="dropdown-item d-flex align-items-center position-relative" onClick={handleItemClick}>

                                                <div className="me-2 min-w-fit-content">
                                                    <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/users/6.jpg`} alt="img" className="avatar avatar-md rounded-circle" />
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h6 className="mb-1 text-truncate">Madeleine</h6>

                                                    <p className="mb-0 text-truncate text-gray-600 lh-sm fs-13">Im sorry but im not sure how to help you with that</p>
                                                </div>
                                                <span className="align-self-start text-muted fs-12 ms-3">15:00</span>
                                            </Dropdown.Item>
                                        </div>
                                        <div>
                                            <Dropdown.Item className="dropdown-item d-flex align-items-center position-relative" onClick={handleItemClick}>

                                                <div className="me-2 min-w-fit-content">
                                                    <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/users/7.jpg`} alt="img" className="avatar avatar-md rounded-circle" />
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h6 className="mb-1 text-truncate">Nargis Hawa</h6>
                                                    <p className="mb-0 text-truncate text-gray-600 lh-sm fs-13">All set! Now, time to get to you now</p>
                                                </div>
                                                <span className="align-self-start text-muted fs-12 ms-3">12:07</span>
                                            </Dropdown.Item>
                                        </div>
                                        <div>
                                            <Dropdown.Item className="dropdown-item d-flex align-items-center position-relative" onClick={handleItemClick}>

                                                <div className="me-2 min-w-fit-content">
                                                    <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/users/10.jpg`} alt="img" className="avatar avatar-md rounded-circle" />
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h6 className="mb-1 text-truncate">Sahar Darya</h6>
                                                    <p className="mb-0 text-truncate text-gray-600 lh-sm fs-13">Here are some products i found for you form database.</p>
                                                </div>
                                                <span className="align-self-start text-muted fs-12 ms-3">11:35</span>
                                            </Dropdown.Item>
                                        </div>
                                        <div>
                                            <Dropdown.Item className="dropdown-item d-flex align-items-center position-relative" onClick={handleItemClick}>

                                                <div className="me-2 min-w-fit-content">
                                                    <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/users/11.jpg`} alt="img" className="avatar avatar-md rounded-circle" />
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h6 className="mb-1 text-truncate">Khadija Mehr</h6>
                                                    <p className="mb-0 text-truncate text-gray-600 lh-sm fs-13">Are you ready to pickup your Delivery.</p>
                                                </div>
                                                <span className="align-self-start text-muted fs-12 ms-3">07:03</span>
                                            </Dropdown.Item>
                                        </div>
                                        <div>
                                            <Dropdown.Item className="dropdown-item d-flex align-items-center position-relative" onClick={handleItemClick}>

                                                <div className="me-2 min-w-fit-content">
                                                    <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/users/13.jpg`} alt="img" className="avatar avatar-md rounded-circle" />
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h6 className="mb-1 text-truncate">Naruto Uzumaki</h6>
                                                    <p className="mb-0 text-truncate text-gray-600 lh-sm fs-13">One day Ill become Hokage.</p>
                                                </div>
                                                <span className="align-self-start text-muted fs-12 ms-3">09-08-22</span>
                                            </Dropdown.Item>
                                        </div>
                                        <div>
                                            <Dropdown.Item className="dropdown-item d-flex align-items-center position-relative" onClick={handleItemClick}>

                                                <div className="me-2 min-w-fit-content">
                                                    <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/users/7.jpg`} alt="img" className="avatar avatar-md rounded-circle" />
                                                </div>
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <h6 className="mb-1 text-truncate">Nargis Hawa</h6>
                                                    <p className="mb-0 text-truncate text-gray-600 lh-sm fs-13">All set! Now, time to get to you now</p>
                                                </div>
                                                <span className="align-self-start text-muted fs-12 ms-3">12:07</span>
                                            </Dropdown.Item>
                                        </div>
                                    </SimpleBar>

                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                        <div className="header-element header-fullscreen">
                            <Link onClick={toggleFullScreen} href="#!" className="header-link">
                                {fullScreen ? (
                                    <i className="bi bi-fullscreen-exit full-screen-close header-link-icon"></i>
                                ) : (
                                    <i className="bi bi-fullscreen header-link-icon"></i>
                                )}
                            </Link>
                        </div>

                        <Dropdown className="header-element header-profile">
                            <Dropdown.Toggle as="a" href='#!' role='button' className="header-link dropdown-toggle no-caret border-0" id="mainHeaderProfile" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                <div className="d-flex align-items-center">
                                    <div className="me-sm-2 me-0">
                                        <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/faces/9.jpg`} alt="img" width="32" height="32" className="rounded-circle" />
                                    </div>
                                    <div className="d-sm-block d-none">
                                        <p className="mb-0 lh-1">Jonathan Mills </p>
                                    </div>
                                </div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu as="ul" className="main-header-dropdown dropdown-menu pt-0 overflow-hidden header-profile-dropdown dropdown-menu-end" aria-labelledby="mainHeaderProfile">

                                <Dropdown.Item as="li" className="d-flex">
                                    <Link href={"#!"}><i className="ti ti-user-circle fs-18 me-2 op-7"></i>Profile</Link></Dropdown.Item>
                                <Dropdown.Item as="li" className="d-flex">
                                    <Link href={"#!"}><i className="ti ti-inbox fs-18 me-2 op-7"></i>Inbox </Link> <span className="badge bg-success-transparent ms-auto">25</span></Dropdown.Item>
                                <Dropdown.Item as="li" className="d-flex">
                                    <Link href={"#!"}><i className="ti ti-adjustments-horizontal fs-18 me-2 op-7"></i>Settings</Link></Dropdown.Item>
                                <Dropdown.Item as="li" className="d-flex">
                                    <Link href={"#!"}><i className="ti ti-wallet fs-18 me-2 op-7"></i>Bal: $7,12,950</Link></Dropdown.Item>
                                <Dropdown.Item as="li" className="d-flex">
                                    <Link href={"#!"}><i className="ti ti-headset fs-18 me-2 op-7"></i>Support</Link></Dropdown.Item>
                                <Dropdown.Item as="li" className="d-flex">
                                    <Link href={"#!"}><i className="ti ti-logout fs-18 me-2 op-7"></i>Log Out</Link></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <div className="header-element header-dropdown-toggle">
                            <Link href="#!" className="header-link dropdown-toggle" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight1"
                                onClick={handleShow3}
                            > <i className="bi bi-justify-right header-link-icon" ></i></Link>
                        </div>
                        <Offcanvas placement='end' show={show3} onHide={handleClose3} className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight1" aria-labelledby="offcanvasRightLabel">
                            <div className="sidebar sidebar-right sidebar-animate">
                                <Offcanvas.Header closeButton className='bg-primary-transparent p-3 text-end mb-3 d-flex justify-content-between align-items-center'>

                                    <h5 className="mb-0 fw-400 ">Activity Center</h5>
                                </Offcanvas.Header>

                                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                    <Nav as="ul" variant="tabs" id="myTab-4" role="tablist" className="nav-tabs flex-nowrap border-bottom-0 px-3 tabs-style-1">
                                        <Nav.Item as="li">
                                            <Nav.Link as="a" id="home-tab-4" className="flex-grow-1" eventKey="first" >Friends</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item as="li">
                                            <Nav.Link as="a" eventKey="second" className="flex-grow-1">Activity</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item as="li">
                                            <Nav.Link as="a" eventKey="third" className="flex-grow-1">Todo</Nav.Link>
                                        </Nav.Item>
                                    </Nav>

                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <div className="px-3">
                                                <InputGroup className="mb-3">
                                                    <Form.Control placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                    <Button variant='primary-transparent' id="basic-addon2"><i className="ti ti-search"></i></Button>
                                                </InputGroup>
                                            </div>
                                            <hr className="my-0" />
                                            <ListGroup className="list-unstyled list-group-flush" as="ul">
                                                {demo.map((idx) => (
                                                    <ListGroup.Item className='px-3 py-2-5' as="li" key={idx.id}>
                                                        <div className="d-flex align-items-start" key={Math.random()}>
                                                            <div className="d-flex align-items-center flex-grow-1 position-relative">
                                                                <div className="me-2 min-w-fit-content">
                                                                    <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}${idx.src}`} alt="img" className="avatar avatar-md rounded-circle" />
                                                                </div>
                                                                <div className="flex-grow-1">
                                                                    <p className="mb-0 fw-500 text-truncate fs-15">{idx.name}</p>
                                                                    <span className="fs-13 text-muted text-truncate">{idx.contact}</span>
                                                                </div>
                                                            </div>
                                                            <Dropdown className='ms-2 pt-1'>
                                                                <Dropdown.Toggle className='no-caret' as='a' variant="" id="dropdown-basic">
                                                                    <i className="ti ti-dots-vertical"></i>
                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu>
                                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </div>
                                                    </ListGroup.Item>
                                                ))}

                                            </ListGroup>
                                            <ul className="list-unstyled list-group list-group-flush">

                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane className='pt-0' eventKey="second">
                                            <ListGroup className="list-unstyled list-group-flush">
                                                <ListGroupItem className=" px-3 py-2-5">
                                                    <Link href="#!" className="stretched-link"></Link>
                                                    <div className="d-flex align-items-start">
                                                        <div className="me-2 min-w-fit-content">
                                                            <span className="avatar avatar-md rounded-circle bg-secondary text-fixed-white">CH</span>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <p className="mb-0 fw-500 fs-15">New website is created</p>
                                                            <span className="fs-13 text-muted text-truncate"><i className="fe fe-clock me-1 align-baseline"></i>30 mins</span>
                                                        </div>
                                                    </div>
                                                </ListGroupItem>
                                                <ListGroupItem className="px-3 py-2-5">
                                                    <Link href="#!" className="stretched-link"></Link>
                                                    <div className="d-flex align-items-start">
                                                        <div className="me-2 min-w-fit-content">
                                                            <span className="avatar avatar-md rounded-circle bg-info text-fixed-white">A</span>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <p className="mb-0 fw-500 fs-15">Prepare For the Next Project</p>
                                                            <span className="fs-13 text-muted text-truncate"><i className="fe fe-clock me-1 align-baseline"></i>2 hrs</span>
                                                        </div>
                                                    </div>
                                                </ListGroupItem>
                                                <ListGroupItem className="px-3 py-2-5">
                                                    <Link href="#!" className="stretched-link"></Link>
                                                    <div className="d-flex align-items-start">
                                                        <div className="me-2 min-w-fit-content">
                                                            <span className="avatar avatar-md rounded-circle bg-success text-fixed-white">N</span>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <p className="mb-0 fw-500 fs-15">Decide the live Discussion Time</p>
                                                            <span className="fs-13 text-muted text-truncate"><i className="fe fe-clock me-1 align-baseline"></i>3 hrs</span>
                                                        </div>
                                                    </div>
                                                </ListGroupItem>
                                                <ListGroupItem className="px-3 py-2-5">
                                                    <Link href="#!" className="stretched-link"></Link>
                                                    <div className="d-flex align-items-start">
                                                        <div className="me-2 min-w-fit-content">
                                                            <span className="avatar avatar-md rounded-circle bg-danger text-fixed-white">HO</span>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <p className="mb-0 fw-500 fs-15">Team Review meeting</p>
                                                            <span className="fs-13 text-muted text-truncate"><i className="fe fe-clock me-1 align-baseline"></i>10-8-22</span>
                                                        </div>
                                                    </div>
                                                </ListGroupItem>
                                                <ListGroupItem className="px-3 py-2-5">
                                                    <Link href="#!" className="stretched-link"></Link>
                                                    <div className="d-flex align-items-start">
                                                        <div className="me-2 min-w-fit-content">
                                                            <span className="avatar avatar-md rounded-circle bg-purple text-fixed-white">N</span>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <p className="mb-0 fw-500 fs-15">Prepare for Presentation</p>
                                                            <span className="fs-13 text-muted text-truncate"><i className="fe fe-clock me-1 align-baseline"></i>10-08-22</span>
                                                        </div>
                                                    </div>
                                                </ListGroupItem>
                                                <ListGroupItem className="px-3 py-2-5">
                                                    <Link href="#!" className="stretched-link"></Link>
                                                    <div className="d-flex align-items-start">
                                                        <div className="me-2 min-w-fit-content">
                                                            <span className="avatar avatar-md rounded-circle bg-warning text-fixed-white">E</span>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <p className="mb-0 fw-500 fs-15">Prepare for Presentation</p>
                                                            <span className="fs-13 text-muted text-truncate"><i className="fe fe-clock me-1 align-baseline"></i>10-08-22</span>
                                                        </div>
                                                    </div>
                                                </ListGroupItem>
                                                <ListGroupItem className="px-3 py-2-5 border-bottom">
                                                    <Link href="#!" className="stretched-link"></Link>
                                                    <div className="d-flex align-items-start">
                                                        <div className="me-2 min-w-fit-content">
                                                            <span className="avatar avatar-md rounded-circle bg-primary text-fixed-white">Y</span>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <p className="mb-0 fw-500 fs-15">Prepare for Presentation</p>
                                                            <span className="fs-13 text-muted text-truncate"><i className="fe fe-clock me-1 align-baseline"></i>09-08-22</span>
                                                        </div>
                                                    </div>
                                                </ListGroupItem>
                                            </ListGroup>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <div className="px-3 mb-3">
                                                <div className="d-flex align-items-stretch">
                                                    <div className="flex-grow-1">
                                                        <input type="text" className="form-control" placeholder="Enter your task" />
                                                    </div>
                                                    <div className="min-w-fit-content ms-2">
                                                        <div className="d-grid">
                                                            <Link href="#!" className="btn btn-primary-transparent">Add</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <ListGroup>
                                                <ListGroup.Item className='rounded-0'>
                                                    <div className="d-flex align-items-center">
                                                        <div className="form-check m-0 flex-grow-1">
                                                            <input className="form-check-input" type="checkbox" id="td1" />
                                                            <label className="form-check-label d-block" htmlFor="td1">Do Even More</label>
                                                        </div>
                                                        <div className="min-w-fit-content align-self-start ms-2">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                                                <Link href="#!" className="text-info" title="Edit"><i className="ti ti-edit fs-18 me-2"></i></Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                                <Link href="#!" className="text-danger" title="Delete"><i className="ti ti-trash fs-18"></i></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item >
                                                    <div className="d-flex align-items-center">
                                                        <div className="form-check m-0 flex-grow-1">
                                                            <input className="form-check-input" type="checkbox" id="td2" defaultChecked />
                                                            <label className="form-check-label d-block" htmlFor="td2">Find an idea</label>
                                                        </div>
                                                        <div className="min-w-fit-content align-self-start ms-2">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                                                <Link href="#!" className="text-info" title="Edit"><i className="ti ti-edit fs-18 me-2"></i></Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                                <Link href="#!" className="text-danger" title="Delete"><i className="ti ti-trash fs-18"></i></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <div className="d-flex align-items-center">
                                                        <div className="form-check m-0 flex-grow-1">
                                                            <input className="form-check-input" type="checkbox" id="td3" />
                                                            <label className="form-check-label d-block" htmlFor="td3">Hangout with friends</label>
                                                        </div>
                                                        <div className="min-w-fit-content align-self-start ms-2">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                                                <Link href="#!" className="text-info" title="Edit"><i className="ti ti-edit fs-18 me-2"></i></Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                                <Link href="#!" className="text-danger" title="Delete"><i className="ti ti-trash fs-18"></i></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <div className="d-flex align-items-center">
                                                        <div className="form-check m-0 flex-grow-1">
                                                            <input className="form-check-input" type="checkbox" id="td4" />
                                                            <label className="form-check-label d-block" htmlFor="td4">Do Something else</label>
                                                        </div>
                                                        <div className="min-w-fit-content align-self-start ms-2">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                                                <Link href="#!" className="text-info" title="Edit"><i className="ti ti-edit fs-18 me-2"></i></Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                                <Link href="#!" className="text-danger" title="Delete"><i className="ti ti-trash fs-18"></i></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                </ListGroup.Item>
                                                <li className="list-group-item px-3 py-2-5">
                                                    <div className="d-flex align-items-center">
                                                        <div className="form-check m-0 flex-grow-1">
                                                            <input className="form-check-input" type="checkbox" id="td5" defaultChecked />
                                                            <label className="form-check-label d-block" htmlFor="td5">Eat healthy, Eat Fresh</label>
                                                        </div>
                                                        <div className="min-w-fit-content align-self-start ms-2">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                                                <Link href="#!" className="text-info" title="Edit"><i className="ti ti-edit fs-18 me-2"></i></Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                                <Link href="#!" className="text-danger" title="Delete"><i className="ti ti-trash fs-18"></i></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                </li>
                                                <ListGroup.Item>
                                                    <div className="d-flex align-items-center">
                                                        <div className="form-check m-0 flex-grow-1">
                                                            <input className="form-check-input" type="checkbox" id="td6" defaultChecked />
                                                            <label className="form-check-label d-block" htmlFor="td6">Finsh something more</label>
                                                        </div>
                                                        <div className="min-w-fit-content align-self-start ms-2">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                                                <Link href="#!" className="text-info" title="Edit"><i className="ti ti-edit fs-18 me-2"></i></Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                                <Link href="#!" className="text-danger" title="Delete"><i className="ti ti-trash fs-18"></i></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <div className="d-flex align-items-center">
                                                        <div className="form-check m-0 flex-grow-1">
                                                            <input className="form-check-input" type="checkbox" id="td7" />
                                                            <label className="form-check-label d-block" htmlFor="td7">Do something more</label>
                                                        </div>
                                                        <div className="min-w-fit-content align-self-start ms-2">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                                                <Link href="#!" className="text-info" title="Edit"><i className="ti ti-edit fs-18 me-2"></i></Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                                <Link href="#!" className="text-danger" title="Delete"><i className="ti ti-trash fs-18"></i></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <div className="d-flex align-items-center">
                                                        <div className="form-check m-0 flex-grow-1">
                                                            <input className="form-check-input" type="checkbox" id="td8" />
                                                            <label className="form-check-label d-block" htmlFor="td8">Updated more files</label>
                                                        </div>
                                                        <div className="min-w-fit-content align-self-start ms-2">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                                                <Link href="#!" className="text-info" title="Edit"><i className="ti ti-edit fs-18 me-2"></i></Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                                <Link href="#!" className="text-danger" title="Delete"><i className="ti ti-trash fs-18"></i></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <div className="d-flex align-items-center">
                                                        <div className="form-check m-0 flex-grow-1">
                                                            <input className="form-check-input" type="checkbox" id="td9" defaultChecked />
                                                            <label className="form-check-label d-block" htmlFor="td9">System updated</label>
                                                        </div>
                                                        <div className="min-w-fit-content align-self-start ms-2">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                                                <Link href="#!" className="text-info" title="Edit"><i className="ti ti-edit fs-18 me-2"></i></Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                                <Link href="#!" className="text-danger" title="Delete"><i className="ti ti-trash fs-18"></i></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                </ListGroup.Item>
                                                <ListGroup.Item className='rounded-0'>
                                                    <div className="d-flex align-items-center">
                                                        <div className="form-check m-0 flex-grow-1">
                                                            <input className="form-check-input" type="checkbox" id="td10" />
                                                            <label className="form-check-label d-block" htmlFor="td10">Settings Changings</label>
                                                        </div>
                                                        <div className="min-w-fit-content align-self-start ms-2">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                                                <Link href="#!" className="text-info" title="Edit"><i className="ti ti-edit fs-18 me-2"></i></Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                                <Link href="#!" className="text-danger" title="Delete"><i className="ti ti-trash fs-18"></i></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Tab.Pane>
                                    </Tab.Content>

                                </Tab.Container>

                            </div>
                        </Offcanvas>
                        <div className="header-element">
                            <Link href="#!" className="header-link switcher-icon" data-bs-toggle="offcanvas" data-bs-target="#switcher-canvas"
                                onClick={() => swichermainright()}
                            >
                                <i className="bi bi-gear header-link-icon"></i>
                            </Link>
                        </div>

                    </div>
                </div>
            </header>
        </Fragment >

    );
};
const mapStateToProps = (state: any) => ({
    local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Header);
