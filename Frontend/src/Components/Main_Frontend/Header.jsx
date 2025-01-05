import React, { useEffect } from 'react';


const Header = () => {
    useEffect(() => {
        const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
        const mobileNavToogle = (e) => {
            e.stopImmediatePropagation();            
            document.body.classList.toggle('mobile-nav-active');
            mobileNavToggleBtn.classList.toggle('bi-list');
            mobileNavToggleBtn.classList.toggle('bi-x');
        };
        mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

        const navmenuLinks = document.querySelectorAll('.navmenu a');
        navmenuLinks.forEach(navmenu => {
            navmenu.addEventListener('click', (e) => {
                if (document.querySelector('.mobile-nav-active')) {
                    mobileNavToogle(e);
                }
            });
        });

        document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
            navmenu.addEventListener('click', function (e) {
                e.preventDefault();
                this.parentNode.classList.toggle('active');
                this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
                e.stopImmediatePropagation();
            });
        });

        let navmenulinks = document.querySelectorAll('.navmenu a');

        function navmenuScrollspy() {
            navmenulinks.forEach(navmenulink => {
                if (!navmenulink.hash) return;
                let section = document.querySelector(navmenulink.hash);
                if (!section) return;
                let position = window.scrollY + 200;
                if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                    document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
                    navmenulink.classList.add('active');
                } else {
                    navmenulink.classList.remove('active');
                }
            })
        }

        window.addEventListener('load', navmenuScrollspy);
        document.addEventListener('scroll', navmenuScrollspy);
    }, []);

    return (
        <>
            <header id="header" className="header fixed-top">
                <div className="container-fluid ps-5 pe-5">
                    <a href="index.html" className="logo float-start">
                        <img src="assets/img/logo/logo.png" alt="" />
                    </a>
                    <nav id="navmenu" className="navmenu float-end">
                        <ul>
                            <li><a href="#hero" className="active">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#team">Team</a></li>
                            <li className="dropdown"><a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                                <ul>
                                    <li><a href="#">Dropdown 1</a></li>
                                    <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                                        <ul>
                                            <li><a href="#">Deep Dropdown 1</a></li>
                                            <li><a href="#">Deep Dropdown 2</a></li>
                                            <li><a href="#">Deep Dropdown 3</a></li>
                                            <li><a href="#">Deep Dropdown 4</a></li>
                                            <li><a href="#">Deep Dropdown 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Dropdown 2</a></li>
                                    <li><a href="#">Dropdown 3</a></li>
                                    <li><a href="#">Dropdown 4</a></li>
                                </ul>
                            </li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                    </nav>
                    {/* TODO: remove css for class 'header-social-links' */}
                </div>
            </header>
        </>
    )
}

export default Header;
