import React from "react";

const Sidebar = () => {
    return (
        <>
            <aside className="left-sidebar">
                {/*  Sidebar scroll*/}
                {/*  */}
                <div>
                    <div className="brand-logo d-flex align-items-center justify-content-between">
                        <a href="javascript:void(0)" className="text-nowrap logo-img">
                            <img src="assets/img/logo/logo-light.png" width="180" alt="" />
                        </a>
                        <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
                            <i className="ti ti-x fs-8"></i>
                        </div>
                    </div>
                    {/*  Sidebar navigation*/}
                    <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
                        <ul id="sidebarnav">
                            <li className="nav-small-cap">
                                <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                                <span className="hide-menu">Home</span>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link" href="javascript:void(0)" aria-expanded="false">
                                    <span>
                                        <i className="ti ti-layout-dashboard"></i>
                                    </span>
                                    <span className="hide-menu">Dashboard</span>
                                </a>
                            </li>
                            <li className="nav-small-cap">
                                <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                                <span className="hide-menu">UI COMPONENTS</span>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link" href="javascript:void(0)" aria-expanded="false">
                                    <span>
                                        <i className="ti ti-article"></i>
                                    </span>
                                    <span className="hide-menu">Buttons</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link" href="javascript:void(0)" aria-expanded="false">
                                    <span>
                                        <i className="ti ti-alert-circle"></i>
                                    </span>
                                    <span className="hide-menu">Alerts</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link" href="javascript:void(0)" aria-expanded="false">
                                    <span>
                                        <i className="ti ti-cards"></i>
                                    </span>
                                    <span className="hide-menu">Card</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link" href="javascript:void(0)" aria-expanded="false">
                                    <span>
                                        <i className="ti ti-file-description"></i>
                                    </span>
                                    <span className="hide-menu">Forms</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link" href="javascript:void(0)" aria-expanded="false">
                                    <span>
                                        <i className="ti ti-typography"></i>
                                    </span>
                                    <span className="hide-menu">Typography</span>
                                </a>
                            </li>
                            <li className="nav-small-cap">
                                <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                                <span className="hide-menu">AUTH</span>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link" href="javascript:void(0)" aria-expanded="false">
                                    <span>
                                        <i className="ti ti-login"></i>
                                    </span>
                                    <span className="hide-menu">Login</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link" href="javascript:void(0)" aria-expanded="false">
                                    <span>
                                        <i className="ti ti-user-plus"></i>
                                    </span>
                                    <span className="hide-menu">Register</span>
                                </a>
                            </li>
                            <li className="nav-small-cap">
                                <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                                <span className="hide-menu">EXTRA</span>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link" href="javascript:void(0)" aria-expanded="false">
                                    <span>
                                        <i className="ti ti-mood-happy"></i>
                                    </span>
                                    <span className="hide-menu">Icons</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link" href="javascript:void(0)" aria-expanded="false">
                                    <span>
                                        <i className="ti ti-aperture"></i>
                                    </span>
                                    <span className="hide-menu">Sample Page</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    {/*  End Sidebar navigation */}
                </div>
                {/*  End Sidebar scroll*/}
            </aside>
        </>
    )
}

export default Sidebar;