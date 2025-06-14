import Link from "next/link";
import { Fragment } from "react";

function Menuloop({ MENUITEMS, toggleSidemenu, HoverToggleInnerMenuFn, level }: any) {
	const handleClick = (event: any) => {
		// Your logic here
		event.preventDefault(); // Prevents the default anchor behavior (navigation)
		// ... other logic you want to perform on click
	};
	return (
		<Fragment>
			<Link href="#!" className={`side-menu__item ${MENUITEMS?.selected ? "active" : ""} `} onClick={(event) => { event.preventDefault(); toggleSidemenu(event, MENUITEMS); }} onMouseEnter={(event) => HoverToggleInnerMenuFn(event, MENUITEMS)}>

				{level <= 1 ? <span className='side-menu__icon'>
					{MENUITEMS.icon}
				</span>
					: " "}
				<span className={`${level == 1 ? "side-menu__label" : ""}`}>
					{MENUITEMS.title}
					{MENUITEMS.badgetxt ? (
						<span className={MENUITEMS.class}>
							{MENUITEMS.badgetxt}
						</span>
					) : (
						""
					)}
				</span>
				<i className="fe fe-chevron-right side-menu__angle"></i>
			</Link>
			<ul className={`slide-menu child${level}  ${MENUITEMS.active ? "double-menu-active" : ""} ${MENUITEMS?.dirchange ? "force-left" : ""}  `} style={
				MENUITEMS.active
					? { display: "block" }
					: { display: "none" }
			}>
				{level <= 1 ? <li className='slide side-menu__label1'>
					<Link href="#!">{MENUITEMS.title}</Link>
				</li> : ""}
				{MENUITEMS.children.map((firstlevel: any) =>
					<li className={`${firstlevel.menutitle ? "slide__category" : ""} ${firstlevel?.type == "empty" ? "slide" : ""} ${firstlevel?.type == "link" ? "slide" : ""} ${firstlevel?.type == "sub" ? "slide has-sub" : ""} ${firstlevel?.active ? "open" : ""} ${firstlevel?.selected ? "active" : ""}`} key={Math.random()}>

						{firstlevel.type === "link" ?
							<Link href={firstlevel.path} className={`side-menu__item ${firstlevel.selected ? "active" : ""}`}>
								{firstlevel.icon}
								<span className="">
									{firstlevel.title}
									{firstlevel.badgetxt ? (
										<span className={firstlevel.class}>
											{firstlevel.badgetxt}
										</span>
									) : (
										""
									)}
								</span>
							</Link>
							: ""}
						{firstlevel.type === "empty" ?
							<Link href="#!" className='side-menu__item' onClick={handleClick}>
								{firstlevel.icon}
								<span className="">
									{firstlevel.title}
									{firstlevel.badgetxt ? (
										<span className={firstlevel.class}>
											{firstlevel.badgetxt}
										</span>
									) : (
										""
									)}
								</span>
							</Link>
							: ""}
						{firstlevel.type === "sub" ?
							<Menuloop MENUITEMS={firstlevel} toggleSidemenu={toggleSidemenu} HoverToggleInnerMenuFn={HoverToggleInnerMenuFn} level={level + 1} />
							: ""}

					</li>
				)}

			</ul>
		</Fragment>
	);
}

export default Menuloop;
