import Link from "next/link";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { MENUITEMS } from "./sidemenu";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { ThemeChanger } from "../../redux/action";
import store from "@/shared/redux/store";
import SimpleBar from "simplebar-react";
import Menuloop from "../../data/menuloop";
import { basePath } from "../../../next.config.js";


const Sidebar = ({ local_varaiable, ThemeChanger }: any) => {
	const [menuitems, setMenuitems] = useState(MENUITEMS);

	function closeMenuFn() {
		const closeMenuRecursively = (items: any) => {
			items?.forEach((item: any) => {
				item.active = false;
				closeMenuRecursively(item.children);
			});
		};
		closeMenuRecursively(MENUITEMS);
		setMenuitems((arr: any) => [...arr]);
	}

	useEffect(() => {

		const mainContent = document.querySelector(".main-content");
		mainContent!.addEventListener("click", menuClose);
		//////////////////////
		// const mainPage1 = document.querySelector(".page");
		// mainPage1!.addEventListener("click", menuClose);
		// const Container = document.querySelector(".layout");
		// Container!.addEventListener("click", Containerclick);
	}, []);

	// const location = useLocation();
	const location = useRouter();

	function Onhover() {
		const theme = store.getState();
		if ((theme.toggled == "icon-overlay-close" || theme.toggled == "detached-close") && theme.iconOverlay != "open") {
			ThemeChanger({ ...theme, "iconOverlay": "open" });
		}
	}
	function Outhover() {
		const theme = store.getState();
		if ((theme.toggled == "icon-overlay-close" || theme.toggled == "detached-close") && theme.iconOverlay == "open") {
			ThemeChanger({ ...theme, "iconOverlay": "" });
		}
	}
	function menuClose() {

		const theme = store.getState();
		if (window.innerWidth <= 992) {
			ThemeChanger({ ...theme, toggled: "close" });
		}
		const overlayElement = document.querySelector("#responsive-overlay");
		if (overlayElement) {

			overlayElement.classList.remove("active");
		}
		if (theme.dataNavLayout == "horizontal" || theme.dataNavStyle == "menu-click" || theme.dataNavStyle == "icon-click") {
			closeMenuFn();
		}

	}

	let MenuOpen = () => {
		let MainContent = document.querySelector(".main-content")
		if (local_varaiable.dataVerticalStyle == 'icontext' && local_varaiable.iconText != 'open') {
			const theme = store.getState()
			ThemeChanger({ ...theme, "iconText": "open" })
			MainContent?.addEventListener("click", (_event) => {
				const theme = store.getState();
				ThemeChanger({ ...theme, "iconText": "" });
			});
		}
		const theme = store.getState()
		if (localStorage.Spruhaverticalstyles == 'doublemenu' && theme.dataToggled != 'double-menu-open') {
			const theme = store.getState()
			ThemeChanger({ ...theme, "dataToggled": "double-menu-open" })
		}
	}
	function menuResizeFn() {
		// console.log("presize");
		typeof window !== "undefined"
		const WindowPreSize = [window.innerWidth];
		WindowPreSize.push(window.innerWidth);
		if (WindowPreSize.length > 2) { WindowPreSize.shift(); }
		const theme = store.getState();
		if (WindowPreSize.length > 1) {
			if ((WindowPreSize[WindowPreSize.length - 1] < 992) && (WindowPreSize[WindowPreSize.length - 2] >= 992)) {
				// less than 992;
				ThemeChanger({ ...theme, toggled: "close" });
			}

			if ((WindowPreSize[WindowPreSize.length - 1] >= 992) && (WindowPreSize[WindowPreSize.length - 2] < 992)) {
				// greater than 992
				ThemeChanger({ ...theme, toggled: theme.dataVerticalStyle == "doublemenu" ? "double-menu-open" : "" });
			}
		}
	}
	useEffect(() => {
		// Check if window is defined (i.e., we are in the browser)
		// if (typeof window !== "undefined") {



		// Attach the event listener
		window.addEventListener("resize", menuResizeFn);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener("resize", menuResizeFn);
		};
		// }
	}, []);

	function switcherArrowFn() {

		// Used to remove is-expanded class and remove class on clicking arrow buttons
		function slideClick() {
			const slide = document.querySelectorAll<HTMLElement>(".slide");
			const slideMenu = document.querySelectorAll<HTMLElement>(".slide-menu");

			slide.forEach((element) => {
				if (element.classList.contains("is-expanded")) {
					element.classList.remove("is-expanded");
				}
			});

			slideMenu.forEach((element) => {
				if (element.classList.contains("open")) {
					element.classList.remove("open");
					element.style.display = "none";
				}
			});
		}

		slideClick();
	}

	function slideRight(): void {
		const menuNav = document.querySelector<HTMLElement>(".main-menu");
		const mainContainer1 = document.querySelector<HTMLElement>(".main-sidebar");

		if (menuNav && mainContainer1) {
			const marginLeftValue = Math.ceil(
				Number(window.getComputedStyle(menuNav).marginInlineStart.split("px")[0])
			);
			const marginRightValue = Math.ceil(
				Number(window.getComputedStyle(menuNav).marginInlineEnd.split("px")[0])
			);
			const check = menuNav.scrollWidth - mainContainer1.offsetWidth;
			let mainContainer1Width = mainContainer1.offsetWidth;

			if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
				if (!(local_varaiable.dataVerticalStyle.dir === "rtl")) {
					if (Math.abs(check) > Math.abs(marginLeftValue)) {
						menuNav.style.marginInlineEnd = "0";

						if (!(Math.abs(check) > Math.abs(marginLeftValue) + mainContainer1Width)) {
							mainContainer1Width = Math.abs(check) - Math.abs(marginLeftValue);
							const slideRightButton = document.querySelector<HTMLElement>("#slide-right");
							if (slideRightButton) {
								slideRightButton.classList.add("hidden");
							}
						}

						menuNav.style.marginInlineStart =
							(Number(menuNav.style.marginInlineStart.split("px")[0]) -
								Math.abs(mainContainer1Width)) +
							"px";

						const slideRightButton = document.querySelector("#slide-right");
						if (slideRightButton) {
							slideRightButton.classList.remove("hidden");
						}
					}
				} else {
					if (Math.abs(check) > Math.abs(marginRightValue)) {
						menuNav.style.marginInlineEnd = "0";

						if (!(Math.abs(check) > Math.abs(marginRightValue) + mainContainer1Width)) {
							mainContainer1Width = Math.abs(check) - Math.abs(marginRightValue);
							const slideRightButton = document.querySelector<HTMLElement>("#slide-right");
							if (slideRightButton) {
								slideRightButton.classList.add("hidden");
							}
						}

						menuNav.style.marginInlineStart =
							(Number(menuNav.style.marginInlineStart.split("px")[0]) -
								Math.abs(mainContainer1Width)) +
							"px";

						const slideLeftButton = document.querySelector<HTMLElement>("#slide-left");
						if (slideLeftButton) {
							slideLeftButton.classList.remove("hidden");
						}
					}
				}
			}

			const element = document.querySelector<HTMLElement>(".main-menu > .slide.open");
			const element1 = document.querySelector<HTMLElement>(".main-menu > .slide.open > ul");
			if (element) {
				element.classList.remove("active");
			}
			if (element1) {
				element1.style.display = "none";
			}
		}

		switcherArrowFn();
	}

	function slideLeft(): void {
		const menuNav = document.querySelector<HTMLElement>(".main-menu");
		const mainContainer1 = document.querySelector<HTMLElement>(".main-sidebar");

		if (menuNav && mainContainer1) {
			const marginLeftValue = Math.ceil(
				Number(window.getComputedStyle(menuNav).marginInlineStart.split("px")[0])
			);
			const marginRightValue = Math.ceil(
				Number(window.getComputedStyle(menuNav).marginInlineEnd.split("px")[0])
			);
			const check = menuNav.scrollWidth - mainContainer1.offsetWidth;
			let mainContainer1Width = mainContainer1.offsetWidth;

			if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
				if (!(local_varaiable.dataVerticalStyle.dir === "rtl")) {
					if (Math.abs(check) <= Math.abs(marginLeftValue)) {
						menuNav.style.marginInlineStart = "0px";
					}
				} else {
					if (Math.abs(check) > Math.abs(marginRightValue)) {
						menuNav.style.marginInlineStart = "0";

						if (!(Math.abs(check) > Math.abs(marginRightValue) + mainContainer1Width)) {
							mainContainer1Width = Math.abs(check) - Math.abs(marginRightValue);
							const slideRightButton = document.querySelector<HTMLElement>("#slide-right");
							if (slideRightButton) {
								slideRightButton.classList.add("hidden");
							}
						}

						menuNav.style.marginInlineStart =
							(Number(menuNav.style.marginInlineStart.split("px")[0]) -
								Math.abs(mainContainer1Width)) +
							"px";

						const slideLeftButton = document.querySelector<HTMLElement>("#slide-left");
						if (slideLeftButton) {
							slideLeftButton.classList.remove("hidden");
						}
					}
				}
			}

			const element = document.querySelector<HTMLElement>(".main-menu > .slide.open");
			const element1 = document.querySelector<HTMLElement>(".main-menu > .slide.open > ul");
			if (element) {
				element.classList.remove("active");
			}
			if (element1) {
				element1.style.display = "none";
			}
		}

		switcherArrowFn();
	}

	const Topup = () => {
		if (window.scrollY > 30 && document.querySelector(".app-sidebar")) {
			const Scolls = document.querySelectorAll(".app-sidebar");
			Scolls.forEach((e) => {
				e.classList.add("sticky-pin");
			});
		} else {
			const Scolls = document.querySelectorAll(".app-sidebar");
			Scolls.forEach((e) => {
				e.classList.remove("sticky-pin");
			});
		}
	};
	if (typeof window !== "undefined") {
		window.addEventListener("scroll", Topup);
	}

	const level = 0;
	let hasParent = false;
	let hasParentLevel = 0;

	function setSubmenu(event: any, targetObject: any, MENUITEMS = menuitems) {
		const theme = store.getState();
		if ((window.screen.availWidth <= 992 || theme.dataNavStyle != "icon-hover") && (window.screen.availWidth <= 992 || theme.dataNavStyle != "menu-hover")) {
			if (!event?.ctrlKey) {
				for (const item of MENUITEMS) {
					if (item === targetObject) {
						item.active = true;
						item.selected = true;
						setMenuAncestorsActive(item);
					} else if (!item.active && !item.selected) {
						item.active = false; // Set active to false for items not matching the target
						item.selected = false; // Set active to false for items not matching the target
					} else {
						removeActiveOtherMenus(item);
					}
					if (item.children && item.children.length > 0) {
						setSubmenu(event, targetObject, item.children);
					}
				}

			}
		}

		setMenuitems((arr: any) => [...arr]);
	}
	function getParentObject(obj: any, childObject: any) {
		for (const key in obj) {
			if (obj.hasOwnProperty(key)) {
				if (typeof obj[key] === "object" && JSON.stringify(obj[key]) === JSON.stringify(childObject)) {
					return obj; // Return the parent object
				}
				if (typeof obj[key] === "object") {
					const parentObject: any = getParentObject(obj[key], childObject);
					if (parentObject !== null) {
						return parentObject;
					}
				}
			}
		}
		return null; // Object not found
	}
	function setMenuAncestorsActive(targetObject: any) {
		const parent = getParentObject(menuitems, targetObject);
		const theme = store.getState();
		if (parent) {
			if (hasParentLevel > 2) {
				hasParent = true;
			}
			parent.active = true;
			parent.selected = true;
			hasParentLevel += 1;
			setMenuAncestorsActive(parent);
		}
		else if (!hasParent) {
			if (theme.dataVerticalStyle == "doublemenu") {
				ThemeChanger({ ...theme, toggled: "double-menu-close" });
			}
		}
	}
	function removeActiveOtherMenus(item: any) {
		if (item) {
			if (Array.isArray(item)) {
				for (const val of item) {
					val.active = false;
					val.selected = false;
				}
			}
			item.active = false;
			item.selected = false;

			if (item.children && item.children.length > 0) {
				removeActiveOtherMenus(item.children);
			}
		}
		else {

		}
	}
	//
	function setMenuUsingUrl(currentPath: any) {

		hasParent = false;
		hasParentLevel = 1;
		// Check current url and trigger the setSidemenu method to active the menu.
		const setSubmenuRecursively = (items: any) => {

			items?.forEach((item: any) => {
				if (item.path == "") { }
				else if (item.path === currentPath) {
					setSubmenu(null, item);
				}
				setSubmenuRecursively(item.children);
			});
		};
		setSubmenuRecursively(MENUITEMS);
	}
	const [previousUrl, setPreviousUrl] = useState("/");

	useEffect(() => {
		// console.log("handle");
		// Select the target element
		const targetElement = document.documentElement;

		// Create a MutationObserver instance
		const observer = new MutationObserver(handleAttributeChange);

		// Configure the observer to watch for attribute changes
		const config = { attributes: true };

		// Start observing the target element
		observer.observe(targetElement, config);
		let currentPath = location.pathname.endsWith("/") ? location.pathname.slice(0, -1) : location.pathname;

		if (currentPath !== previousUrl) {
			setMenuUsingUrl(currentPath);
			setPreviousUrl(currentPath);
		}

		// ... the rest of your useEffect code
	}, [location]);

	//
	function toggleSidemenu(event: any, targetObject: any, MENUITEMS = menuitems) {
		const theme = store.getState();
		let element = event.target;

		// if ((window.screen.availWidth <= 992 || theme.dataNavStyle != "icon-hover") && (window.screen.availWidth <= 992 || theme.dataNavStyle != "menu-hover")) {
		if ((theme.dataNavStyle != "icon-hover" && theme.dataNavStyle != "menu-hover") || (window.innerWidth < 992) || (theme.dataNavLayout != "horizontal") && (theme.toggled != "icon-hover-closed" && theme.toggled != "menu-hover-closed")) {
			for (const item of MENUITEMS) {
				if (item === targetObject) {
					if (theme.dataVerticalStyle == "doublemenu" && item.active) { return; }
					item.active = !item.active;

					if (item.active) {
						closeOtherMenus(MENUITEMS, item);
					} else {
						if (theme.dataVerticalStyle == "doublemenu") {
							ThemeChanger({ ...theme, toggled: "double-menu-close" });
						}
					}
					setAncestorsActive(MENUITEMS, item);

				}
				else if (!item.active) {
					if (theme.dataVerticalStyle != "doublemenu") {
						item.active = false; // Set active to false for items not matching the target
					}
				}
				if (item.children && item.children.length > 0) {
					toggleSidemenu(event, targetObject, item.children);
				}
			}
			if (targetObject?.children && targetObject.active) {
				if (theme.dataVerticalStyle == "doublemenu" && theme.toggled != "double-menu-open") {
					ThemeChanger({ ...theme, toggled: "double-menu-open" });
				}
			}
			if (element && theme.dataNavLayout == "horizontal" && (theme.dataNavStyle == "menu-click" || theme.dataNavStyle == "icon-click")) {
				const listItem = element.closest("li");
				if (listItem) {
					// Find the first sibling <ul> element
					const siblingUL = listItem.querySelector("ul");
					let outterUlWidth = 0;
					let listItemUL = listItem.closest("ul:not(.main-menu)");
					while (listItemUL) {
						listItemUL = listItemUL.parentElement.closest("ul:not(.main-menu)");
						if (listItemUL) {
							outterUlWidth += listItemUL.clientWidth;
						}
					}
					if (siblingUL) {
						// You've found the sibling <ul> element
						let siblingULRect = listItem.getBoundingClientRect();
						if (theme.dir == "rtl") {
							if ((siblingULRect.left - siblingULRect.width - outterUlWidth + 150 < 0 && outterUlWidth < window.innerWidth) && (outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth)) {
								targetObject.dirchange = true;
							} else {
								targetObject.dirchange = false;
							}
						} else {
							if ((outterUlWidth + siblingULRect.right + siblingULRect.width + 50 > window.innerWidth && siblingULRect.right >= 0) && (outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth)) {
								targetObject.dirchange = true;
							} else {
								targetObject.dirchange = false;
							}
						}
					}
					setTimeout(() => {
						let computedValue = siblingUL.getBoundingClientRect();
						if ((computedValue.bottom) > window.innerHeight) {
							siblingUL.style.height = (window.innerHeight - computedValue.top - 8) + "px";
							siblingUL.style.overflow = "auto";
						}
					}, 100);
				}
			}
		}
		setMenuitems((arr: any) => [...arr]);
	}

	function setAncestorsActive(MENUITEMS: any, targetObject: any) {
		const theme = store.getState();
		const parent = findParent(MENUITEMS, targetObject);
		if (parent) {
			parent.active = true;
			if (parent.active) {
				ThemeChanger({ ...theme, toggled: "double-menu-open" });
			}

			setAncestorsActive(MENUITEMS, parent);
		} else {
			if (theme.dataVerticalStyle == "doublemenu") {
				ThemeChanger({ ...theme, toggled: "double-menu-close" });
			}

		}
	}

	function closeOtherMenus(MENUITEMS: any, targetObject: any) {
		for (const item of MENUITEMS) {
			if (item !== targetObject) {
				item.active = false;
				if (item.children && item.children.length > 0) {
					closeOtherMenus(item.children, targetObject);
				}
			}
		}
	}

	function findParent(MENUITEMS: any, targetObject: any) {
		for (const item of MENUITEMS) {
			if (item.children && item.children.includes(targetObject)) {
				return item;
			}
			if (item.children && item.children.length > 0) {
				const parent: any = findParent(MENUITEMS = item.children, targetObject);
				if (parent) {
					return parent;
				}
			}
		}
		return null;
	}
	//
	function HoverToggleInnerMenuFn(event: any, item: any) {
		const theme = store.getState();
		let element = event.target;
		if (element && theme.dataNavLayout == "horizontal" && (theme.dataNavStyle == "menu-hover" || theme.dataNavStyle == "icon-hover")) {
			const listItem = element.closest("li");
			if (listItem) {
				// Find the first sibling <ul> element
				const siblingUL = listItem.querySelector("ul");
				let outterUlWidth = 0;
				let listItemUL = listItem.closest("ul:not(.main-menu)");
				while (listItemUL) {
					listItemUL = listItemUL.parentElement.closest("ul:not(.main-menu)");
					if (listItemUL) {
						outterUlWidth += listItemUL.clientWidth;
					}
				}
				if (siblingUL) {
					// You've found the sibling <ul> element
					let siblingULRect = listItem.getBoundingClientRect();
					if (theme.dir == "rtl") {
						if ((siblingULRect.left - siblingULRect.width - outterUlWidth + 150 < 0 && outterUlWidth < window.innerWidth) && (outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth)) {
							item.dirchange = true;
						} else {
							item.dirchange = false;
						}
					} else {
						if ((outterUlWidth + siblingULRect.right + siblingULRect.width + 50 > window.innerWidth && siblingULRect.right >= 0) && (outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth)) {
							item.dirchange = true;
						} else {
							item.dirchange = false;
						}
					}
				}
			}
		}
	}
	const Sideclick = () => {
		if (window.innerWidth > 992) {
			let html = document.documentElement;
			if (html.getAttribute("data-icon-overlay") != "open") {
				html.setAttribute("data-icon-overlay", "open");
			}

		}
	};

	//
	const [MyclassName, setMyClass] = useState("");
	const Containerclick = () => {
		console.log("layoutsidebar");
		if (localStorage.getItem("velvetverticalstyles") == "icontext") {
			setMyClass("");
		}
		const theme = store.getState();
		if (window.innerWidth > 992) {
			if (theme.iconOverlay === "open") {
				ThemeChanger({ ...theme, iconOverlay: "" });
			}
		}
	};
	function handleAttributeChange(mutationsList: any) {
		for (const mutation of mutationsList) {
			if (mutation.type === "attributes" && (mutation.attributeName === "data-nav-layout" || mutation.attributeName === "data-vertical-style")) {
				const newValue = mutation.target.getAttribute("data-nav-layout");
				if (newValue == "vertical") {
					let currentPath = location.pathname.endsWith("/") ? location.pathname.slice(0, -1) : location.pathname;
					currentPath = !currentPath ? "components/dashboards/crypto/" : currentPath;
					setMenuUsingUrl(currentPath);

				} else {
					closeMenuFn();
				}
			}
		}
	}
	const handleClick = (event: any) => {
		// Your logic here
		event.preventDefault(); // Prevents the default anchor behavior (navigation)
		// ... other logic you want to perform on click
	};
	return (
		<Fragment>
			<div id="responsive-overlay" onClick={() => menuClose()}></div>
			<aside className="app-sidebar sticky" id="sidebar" onMouseEnter={() => Onhover()}
				onMouseLeave={() => Outhover()}>
				<div className="main-sidebar-header">

					<Link href={"/components/crm/crmdashboard"} className="header-logo">
						<img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/desktop-logo.png`} alt="logo" className="desktop-logo" />
						<img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/toggle-logo.png`} alt="logo" className="toggle-logo" />
						<img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/desktop-dark.png`} alt="logo" className="desktop-dark" />
						<img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/toggle-dark.png`} alt="logo" className="toggle-dark" />
					</Link>
				</div>

				<SimpleBar style={{ height: "100%" }} className="main-sidebar" id="sidebar-scroll">
					<nav className="main-menu-container nav nav-pills flex-column sub-open">
						<div className="slide-left" id="slide-left" onClick={() => { slideLeft(); }}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"> <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path> </svg>
						</div>

						<ul className="main-menu" onClick={() => Sideclick()}>
							{MENUITEMS.map((levelone: any) => (
								<Fragment key={Math.random()}>
									<li className={`${levelone.menutitle ? "slide__category" : ""} ${levelone.type === "link" ? "slide" : ""} 
                       ${levelone.type === "sub" ? "slide has-sub" : ""} ${levelone?.active ? "open" : ""} ${levelone?.selected ? "active" : ""}`} onClick={() => { MenuOpen() }}>
										{levelone.menutitle ?
											<span className='category-name'>
												{levelone.menutitle}
											</span>
											: ""}
										{levelone.type === "link" ?
											<Link href={levelone.path} className={`side-menu__item ${levelone.selected ? "active" : ""}`} >
												<span className='side-menu__icon'>
													{levelone.icon}
												</span>
												<span className="side-menu__label">
													{levelone.title}
													{levelone.badgetxt ? (
														<span className={levelone.class}>
															{levelone.badgetxt}
														</span>
													) : (
														""
													)}
												</span>
											</Link>
											: ""}
										{levelone.type === "empty" ?
											<Link href="#!" className='side-menu__item' onClick={handleClick}>
												{levelone.icon}
												<span className="">
													{levelone.title}
													{levelone.badgetxt ? (
														<span className={levelone.class}>
															{levelone.badgetxt}
														</span>
													) : (
														""
													)}
												</span>
											</Link>
											: ""}
										{levelone.type === "sub" ?
											<Menuloop MENUITEMS={levelone} level={level + 1} toggleSidemenu={toggleSidemenu} HoverToggleInnerMenuFn={HoverToggleInnerMenuFn} />
											: ""}
									</li>
								</Fragment>
							))}
						</ul>
						<div className="slide-right" id="slide-right" onClick={() => { slideRight(); }}><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"> <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path> </svg></div>
					</nav>
				</SimpleBar>

			</aside>
		</Fragment>
	);
};
const mapStateToProps = (state: any) => ({
	local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Sidebar);
