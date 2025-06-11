import { Fragment, useEffect, useState } from "react";
import { Button, Dropdown, Form, InputGroup, ListGroup, ListGroupItem, Modal, Nav, NavLink, Offcanvas, OverlayTrigger, Tab, Tooltip } from "react-bootstrap";
import { connect } from "react-redux";
import { ThemeChanger } from "../../../shared/redux/action";
import store from "../../../shared/redux/store";
import { MENUITEMS } from "../sidebar/sidemenu";
import { basePath } from "@/next.config";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = ({ local_varaiable, ThemeChanger }: any) => {
  const [searchcolor, setsearchcolor] = useState("text-dark");

  const ToggleDark = () => {
    ThemeChanger({
      ...local_varaiable,
      dataThemeMode: local_varaiable.dataThemeMode == "dark" ? "light" : "dark",
      dataHeaderStyles: local_varaiable.dataThemeMode == "dark" ? "light" : "dark",
      dataMenuStyles: "dark",
      bodyBg: "",
      bodyBg1: "",
      Light: "",
      inputBorder: "",
    });
    const theme = store.getState();

    if (theme.dataThemeMode != "dark") {
      ThemeChanger({
        ...theme,
        bodyBg1: "",
        bodyBg2: "",
        darkBg: "",
        inputBorder: "",
      });
      localStorage.removeItem("dashlotdarktheme");
      localStorage.removeItem("darkBgRGB1");
      localStorage.removeItem("darkBgRGB2");
      localStorage.removeItem("darkBgRGB3");
      localStorage.removeItem("darkBgRGB4");
      localStorage.removeItem("dashlotMenu");
      localStorage.removeItem("dashlotHeader");
    } else {
      localStorage.setItem("dashlotdarktheme", "dark");
      localStorage.removeItem("dashlotHeader");
      localStorage.removeItem("dashlotlighttheme");
      localStorage.removeItem("dashlotMenu");
    }
  };
  function menuClose() {
    const theme = store.getState();
    ThemeChanger({ ...theme, toggled: "close" });
  }
  const toggleSidebar = () => {
    const theme = store.getState();
    const sidemenuType = theme.dataNavLayout;
    if (window.innerWidth >= 992) {
      if (sidemenuType === "vertical") {
        const verticalStyle = theme.dataVerticalStyle;
        const navStyle = theme.dataNavStyle;
        switch (verticalStyle) {
          // closed
          case "closed":
            ThemeChanger({ ...theme, dataNavStyle: "" });
            if (theme.toggled === "close-menu-close") {
              ThemeChanger({ ...theme, toggled: "" });
            } else {
              ThemeChanger({ ...theme, toggled: "close-menu-close" });
            }
            break;
          // icon-overlay
          case "overlay":
            ThemeChanger({ ...theme, dataNavStyle: "" });
            if (theme.toggled === "icon-overlay-close") {
              ThemeChanger({ ...theme, toggled: "", iconOverlay: "" });
            } else {
              if (window.innerWidth >= 992) {
                ThemeChanger({ ...theme, toggled: "icon-overlay-close", iconOverlay: "" });
              }
            }
            break;
          // icon-text
          case "icontext":
            ThemeChanger({ ...theme, dataNavStyle: "" });
            if (theme.toggled === "icon-text-close") {
              ThemeChanger({ ...theme, toggled: "" });
            } else {
              ThemeChanger({ ...theme, toggled: "icon-text-close" });
            }
            break;
          // doublemenu
          case "doublemenu":
            ThemeChanger({ ...theme, dataNavStyle: "" });
            if (theme.toggled === "double-menu-open") {
              ThemeChanger({ ...theme, toggled: "double-menu-close" });
            } else {
              const sidemenu = document.querySelector(".side-menu__item.active");
              if (sidemenu) {
                if (sidemenu.nextElementSibling) {
                  sidemenu.nextElementSibling.classList.add("double-menu-active");
                  ThemeChanger({ ...theme, toggled: "double-menu-open" });
                } else {
                  ThemeChanger({ ...theme, toggled: "double-menu-close" });
                }
              }
            }

            break;
          // detached
          case "detached":
            if (theme.toggled === "detached-close") {
              ThemeChanger({ ...theme, toggled: "" });
            } else {
              ThemeChanger({ ...theme, toggled: "detached-close" });
            }
            break;
          // default
          case "default":
            ThemeChanger({ ...theme, toggled: "" });
        }
        switch (navStyle) {
          case "menu-click":
            if (theme.toggled === "menu-click-closed") {
              ThemeChanger({ ...theme, toggled: "" });
            } else {
              ThemeChanger({ ...theme, toggled: "menu-click-closed" });
            }
            break;
          // icon-overlay
          case "menu-hover":
            if (theme.toggled === "menu-hover-closed") {
              ThemeChanger({ ...theme, toggled: "" });
            } else {
              ThemeChanger({ ...theme, toggled: "menu-hover-closed" });
            }
            break;
          case "icon-click":
            if (theme.toggled === "icon-click-closed") {
              ThemeChanger({ ...theme, toggled: "" });
            } else {
              ThemeChanger({ ...theme, toggled: "icon-click-closed" });
            }
            break;
          case "icon-hover":
            if (theme.toggled === "icon-hover-closed") {
              ThemeChanger({ ...theme, toggled: "" });
            } else {
              ThemeChanger({ ...theme, toggled: "icon-hover-closed" });
            }
            break;
        }
      }
    } else {
      if (theme.toggled === "close") {
        ThemeChanger({ ...theme, toggled: "open" });

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
        ThemeChanger({ ...theme, toggled: "close" });
      }
    }
  };

  const router = useRouter();
  return (
    <Fragment>
      <header className="app-header">
        <div className="main-header-container container-fluid">
          <div className="header-content-left">
            <div className="header-element">
              <Link aria-label="Hide Sidebar" href="#!" className="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle " onClick={() => toggleSidebar()} data-bs-toggle="sidebar">
                <i className="bi bi-justify-left header-link-icon"></i>
              </Link>
            </div>
          </div>
          <div className="header-content-right">
            <Dropdown className="header-element header-profile">
              <Dropdown.Toggle as="a" href="#!" role="button" className="header-link dropdown-toggle no-caret border-0" id="mainHeaderProfile" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
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
                {/* <Dropdown.Item as="li" className="d-flex">
                                    <Link href={"/components/pages/profile"}><i className="ti ti-user-circle fs-18 me-2 op-7"></i>Profile</Link></Dropdown.Item>
                                <Dropdown.Item as="li" className="d-flex">
                                    <Link href={"/components/cryptocurrency/wallet/"}><i className="ti ti-wallet fs-18 me-2 op-7"></i>Bal: $7,12,950</Link></Dropdown.Item>
                                <Dropdown.Item as="li" className="d-flex">
                                    <Link href={"/components/pages/faqs/"}><i className="ti ti-headset fs-18 me-2 op-7"></i>Support</Link></Dropdown.Item> */}
                <Dropdown.Item as="li" className="d-flex">
                  <Link href={"/"}>
                    <i className="ti ti-logout fs-18 me-2 op-7"></i>Log Out
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </header>
    </Fragment>
  );
};
const mapStateToProps = (state: any) => ({
  local_varaiable: state,
});

export default connect(mapStateToProps, { ThemeChanger })(Header);
