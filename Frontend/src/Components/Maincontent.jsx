import React, { useEffect } from 'react';

const Maincontent = () => {
  useEffect(() => {
    const toggleScrolled = () => {
      const selectBody = document.querySelector('body');
      const selectHeader = document.querySelector('#header');
      if (!selectHeader.classList.contains('scroll-up-sticky') &&
        !selectHeader.classList.contains('sticky-top') &&
        !selectHeader.classList.contains('fixed-top')) return;

      window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
    };

    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    const mobileNavToogle = () => {
      document.body.classList.toggle('mobile-nav-active');
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    };

    const navmenuLinks = document.querySelectorAll('.navmenu a');
    navmenuLinks.forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToogle();
        }
      });
    });

    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }

    let scrollTop = document.querySelector('.scroll-top');
    const toggleScrollTop = () => {
      if (scrollTop) {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
        scrollTop.addEventListener('click', (e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }
    };

    const aosInit = () => {
      AOS.init({ duration: 600, easing: 'ease-in-out', once: true, mirror: false });
    };

    new PureCounter();
    const glightbox = GLightbox({ selector: '.glightbox' });

    document.querySelectorAll('.isotope-layout').forEach(isotopeItem => {
      let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
      let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
      let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

      imagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
        const initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
          itemSelector: '.isotope-item',
          layoutMode: layout,
          filter: filter,
          sortBy: sort,
        });

        isotopeItem.querySelectorAll('.isotope-filters li').forEach(filters => {
          filters.addEventListener('click', function () {
            isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
            this.classList.add('filter-active');
            initIsotope.arrange({ filter: this.getAttribute('data-filter') });
            aosInit();
          });
        });
      });
    });

    const initSwiper = () => {
      document.querySelectorAll(".init-swiper").forEach(swiperElement => {
        let config = JSON.parse(swiperElement.querySelector(".swiper-config").innerHTML.trim());
        new Swiper(swiperElement, config);
      });
    };

    window.addEventListener("load", () => {
      toggleScrolled();
      toggleScrollTop();
      aosInit();
      initSwiper();
    });

    window.addEventListener("scroll", toggleScrolled);

  }, []); // Empty dependency array to run once after initial render

  return (
    <>
      <div>
        <header id="header" className="header d-flex align-items-center fixed-top">
          <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
            <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
              <img src="assets/img/logo.png" alt="" />
              <h1 className="sitename">Bell</h1>
            </a>
            <nav id="navmenu" className="navmenu">
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
            <div className="header-social-links">
              <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
              <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
              <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </header>

        <main className="main">
          {/* Hero Section  */}
          <section id="hero" className="hero section dark-background">
            <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in" />
            <div className="container">
              <div className="row justify-content-center text-center" data-aos="fade-up" data-aos-delay="100">
                <div className="col-xl-6 col-lg-8">
                  <h2>Powerful Digital Solutions For Your Business</h2>
                  <p>We are team of talented digital marketers</p>
                </div>
              </div>
              <div className="row gy-4 mt-5 justify-content-center" data-aos="fade-up" data-aos-delay="200">
                <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="300">
                  <div className="icon-box">
                    <i className="bi bi-binoculars"></i>
                    <h3><a href="">Lorem Ipsum</a></h3>
                  </div>
                </div>
                <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="400">
                  <div className="icon-box">
                    <i className="bi bi-bullseye"></i>
                    <h3><a href="">Dolor Sitema</a></h3>
                  </div>
                </div>
                <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="500">
                  <div className="icon-box">
                    <i className="bi bi-fullscreen-exit"></i>
                    <h3><a href="">Sedare Perspiciatis</a></h3>
                  </div>
                </div>
                <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="600">
                  <div className="icon-box">
                    <i className="bi bi-card-list"></i>
                    <h3><a href="">Magni Dolores</a></h3>
                  </div>
                </div>
                <div className="col-xl-2 col-md-4" data-aos="fade-up" data-aos-delay="700">
                  <div className="icon-box">
                    <i className="bi bi-gem"></i>
                    <h3><a href="">Nemos Enimade</a></h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* About Section  */}
          <section id="about" className="about section">
            <div className="container">
              <div className="row gy-4" data-aos="fade-up" data-aos-delay="100">
                <div className="col-lg-5">
                  <img src="assets/img/about.jpg" className="img-fluid" alt="" />
                </div>
                <div className="col-lg-7" data-aos="fade-up" data-aos-delay="200">
                  <div className="content">
                    <h3>Voluptatem dignissimos provident quasi</h3>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                    </p>
                    <ul>
                      <li><i className="bi bi-check-circle-fill"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                      <li><i className="bi bi-check-circle-fill"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                      <li><i className="bi bi-check-circle-fill"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Stats Section  */}
          <section id="stats" className="stats section dark-background">
            <img src="assets/img/stats-bg.jpg" alt="" data-aos="fade-in" />
            <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
              <div className="row gy-4">
                <div className="col-lg-3 col-md-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                    <p>Clients</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                    <p>Projects</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter"></span>
                    <p>Hours Of Support</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter"></span>
                    <p>Workers</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Featured Services Section  */}
          <section id="featured-services" className="featured-services section">
            {/* Section Title  */}
            <div className="container section-title" data-aos="fade-up">
              <h2>Featured Services</h2>
              <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>
            {/* End Section Title  */}
            <div className="container">
              <div className="row gy-4">
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                  <div className="card-item">
                    <div className="row">
                      <div className="col-xl-5">
                        <div className="card-bg"><img src="assets/img/cards-1.jpg" alt="" /></div>
                      </div>
                      <div className="col-xl-7 d-flex align-items-center">
                        <div className="card-body">
                          <h4 className="card-title">Eligendi omnis sunt veritatis.</h4>
                          <p>Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi voluptatem placeat deleniti adipisci. Cum delectus doloribus non veritatis. Officia temporibus illo magnam. Dolor eos et.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                  <div className="card-item">
                    <div className="row">
                      <div className="col-xl-5">
                        <div className="card-bg"><img src="assets/img/cards-5.jpg" alt="" /></div>
                      </div>
                      <div className="col-xl-7 d-flex align-items-center">
                        <div className="card-body">
                          <h4 className="card-title">Possimus ut sed velit assumenda</h4>
                          <p>Sunt deserunt maiores voluptatem autem est rerum perferendis rerum blanditiis. Est laboriosam qui iste numquam laboriosam voluptatem architecto. Est laudantium sunt at quas aut hic. Eum dignissimos.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                  <div className="card-item">
                    <div className="row">
                      <div className="col-xl-5">
                        <div className="card-bg"><img src="assets/img/cards-3.jpg" alt="" /></div>
                      </div>
                      <div className="col-xl-7 d-flex align-items-center">
                        <div className="card-body">
                          <h4 className="card-title">Error beatae dolor inventore aut</h4>
                          <p>Dicta porro nobis. Velit cum in. Nesciunt dignissimos enim molestiae facilis numquam quae quaerat ipsam omnis. Neque debitis ipsum at architecto officia laboriosam odit. Ut sunt temporibus nulla culpa.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                  <div className="card-item">
                    <div className="row">
                      <div className="col-xl-5">
                        <div className="card-bg"><img src="assets/img/cards-4.jpg" alt="" /></div>
                      </div>
                      <div className="col-xl-7 d-flex align-items-center">
                        <div className="card-body">
                          <h4 className="card-title">Expedita voluptas ut ut nesciunt</h4>
                          <p>Aut est quidem doloremque voluptatem magnam quis excepturi vero quia. Eum eos doloremque architecto illo at beatae dolore. Fugiat suscipit et sint ratione dolores. Aut aliquid ea dolores libero nobis.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Features Section  */}
          <section id="features" className="features section">
            <div className="container">
              <div className="row gy-4">
                <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="100">
                  <div className="features-item">
                    <i className="bi bi-eye" style={{ color: "#ffbb2c" }}></i>
                    <h3><a href="" className="stretched-link">Lorem Ipsum</a></h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="200">
                  <div className="features-item">
                    <i className="bi bi-infinity" style={{ color: "#5578ff" }}></i>
                    <h3><a href="" className="stretched-link">Dolor Sitema</a></h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="300">
                  <div className="features-item">
                    <i className="bi bi-mortarboard" style={{ color: "#e80368" }}></i>
                    <h3><a href="" className="stretched-link">Sed perspiciatis</a></h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="400">
                  <div className="features-item">
                    <i className="bi bi-nut" style={{ color: "#e361ff" }}></i>
                    <h3><a href="" className="stretched-link">Magni Dolores</a></h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="500">
                  <div className="features-item">
                    <i className="bi bi-shuffle" style={{ color: "#47aeff" }}></i>
                    <h3><a href="" className="stretched-link">Nemo Enim</a></h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="600">
                  <div className="features-item">
                    <i className="bi bi-star" style={{ color: "#ffa76e" }}></i>
                    <h3><a href="" className="stretched-link">Eiusmod Tempor</a></h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="700">
                  <div className="features-item">
                    <i className="bi bi-x-diamond" style={{ color: "#11dbcf" }}></i>
                    <h3><a href="" className="stretched-link">Midela Teren</a></h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="800">
                  <div className="features-item">
                    <i className="bi bi-camera-video" style={{ color: "#4233ff" }}></i>
                    <h3><a href="" className="stretched-link">Pira Neve</a></h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="900">
                  <div className="features-item">
                    <i className="bi bi-command" style={{ color: "#b2904f" }}></i>
                    <h3><a href="" className="stretched-link">Dirada Pack</a></h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="1000">
                  <div className="features-item">
                    <i className="bi bi-dribbble" style={{ color: "#b20969" }}></i>
                    <h3><a href="" className="stretched-link">Moton Ideal</a></h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="1100">
                  <div className="features-item">
                    <i className="bi bi-activity" style={{ color: "#ff5828" }}></i>
                    <h3><a href="" className="stretched-link">Verdo Park</a></h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="1200">
                  <div className="features-item">
                    <i className="bi bi-brightness-high" style={{ color: "#29cc61" }}></i>
                    <h3><a href="" className="stretched-link">Flavor Nivelanda</a></h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Services Section  */}
          <section id="services" className="services section">
            {/* Section Title  */}
            <div className="container section-title" data-aos="fade-up">
              <h2>Services</h2>
              <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>
            {/* End Section Title  */}
            <div className="container">
              <div className="row gy-4">
                <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
                  <div className="icon flex-shrink-0"><i className="bi bi-briefcase"></i></div>
                  <div>
                    <h4 className="title"><a href="service-details.html" className="stretched-link">Lorem Ipsum</a></h4>
                    <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
                  <div className="icon flex-shrink-0"><i className="bi bi-card-checklist"></i></div>
                  <div>
                    <h4 className="title"><a href="service-details.html" className="stretched-link">Dolor Sitema</a></h4>
                    <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="300">
                  <div className="icon flex-shrink-0"><i className="bi bi-bar-chart"></i></div>
                  <div>
                    <h4 className="title"><a href="service-details.html" className="stretched-link">Sed ut perspiciatis</a></h4>
                    <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="400">
                  <div className="icon flex-shrink-0"><i className="bi bi-binoculars"></i></div>
                  <div>
                    <h4 className="title"><a href="service-details.html" className="stretched-link">Magni Dolores</a></h4>
                    <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="500">
                  <div className="icon flex-shrink-0"><i className="bi bi-brightness-high"></i></div>
                  <div>
                    <h4 className="title"><a href="service-details.html" className="stretched-link">Nemo Enim</a></h4>
                    <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="600">
                  <div className="icon flex-shrink-0"><i className="bi bi-calendar4-week"></i></div>
                  <div>
                    <h4 className="title"><a href="service-details.html" className="stretched-link">Eiusmod Tempor</a></h4>
                    <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Call To Action Section  */}
          <section id="call-to-action" className="call-to-action section dark-background">
            <img src="assets/img/cta-bg.jpg" alt="" />
            <div className="container">
              <div className="row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
                <div className="col-xl-10">
                  <div className="text-center">
                    <h3>Call To Action</h3>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <a className="cta-btn" href="#">Call To Action</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Portfolio Section  */}
          <section id="portfolio" className="portfolio section">
            {/* Section Title  */}
            <div className="container section-title" data-aos="fade-up">
              <h2>Portfolio</h2>
              <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>
            {/* End Section Title  */}
            <div className="container">
              <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
                <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
                  <li data-filter="*" className="filter-active">All</li>
                  <li data-filter=".filter-app">App</li>
                  <li data-filter=".filter-product">Product</li>
                  <li data-filter=".filter-branding">Branding</li>
                  <li data-filter=".filter-books">Books</li>
                </ul>
                <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
                  <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                    <div className="portfolio-content h-100">
                      <img src="assets/img/portfolio/app-1.jpg" className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4>App 1</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                        <a href="assets/img/portfolio/app-1.jpg" title="App 1" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                        <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                    <div className="portfolio-content h-100">
                      <img src="assets/img/portfolio/product-1.jpg" className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4>Product 1</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                        <a href="assets/img/portfolio/product-1.jpg" title="Product 1" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                        <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                    <div className="portfolio-content h-100">
                      <img src="assets/img/portfolio/branding-1.jpg" className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4>Branding 1</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                        <a href="assets/img/portfolio/branding-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                        <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                    <div className="portfolio-content h-100">
                      <img src="assets/img/portfolio/books-1.jpg" className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4>Books 1</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                        <a href="assets/img/portfolio/books-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                        <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                    <div className="portfolio-content h-100">
                      <img src="assets/img/portfolio/app-2.jpg" className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4>App 2</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                        <a href="assets/img/portfolio/app-2.jpg" title="App 2" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                        <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                    <div className="portfolio-content h-100">
                      <img src="assets/img/portfolio/product-2.jpg" className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4>Product 2</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                        <a href="assets/img/portfolio/product-2.jpg" title="Product 2" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                        <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                    <div className="portfolio-content h-100">
                      <img src="assets/img/portfolio/branding-2.jpg" className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4>Branding 2</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                        <a href="assets/img/portfolio/branding-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                        <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                    <div className="portfolio-content h-100">
                      <img src="assets/img/portfolio/books-2.jpg" className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4>Books 2</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                        <a href="assets/img/portfolio/books-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                        <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                    <div className="portfolio-content h-100">
                      <img src="assets/img/portfolio/app-3.jpg" className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4>App 3</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                        <a href="assets/img/portfolio/app-3.jpg" title="App 3" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                        <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                    <div className="portfolio-content h-100">
                      <img src="assets/img/portfolio/product-3.jpg" className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4>Product 3</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                        <a href="assets/img/portfolio/product-3.jpg" title="Product 3" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                        <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                    <div className="portfolio-content h-100">
                      <img src="assets/img/portfolio/branding-3.jpg" className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4>Branding 3</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                        <a href="assets/img/portfolio/branding-3.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                        <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                    <div className="portfolio-content h-100">
                      <img src="assets/img/portfolio/books-3.jpg" className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4>Books 3</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                        <a href="assets/img/portfolio/books-3.jpg" title="Branding 3" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                        <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Team Section  */}
          <section id="team" className="team section">
            {/* Section Title  */}
            <div className="container section-title" data-aos="fade-up">
              <h2>Team</h2>
              <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>
            {/* End Section Title  */}
            <div className="container">
              <div className="row gy-4">
                <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                  <div className="member">
                    <img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" />
                    <div className="member-info">
                      <div className="member-info-content">
                        <h4>Walter White</h4>
                        <span>Chief Executive Officer</span>
                      </div>
                      <div className="social">
                        <a href=""><i className="bi bi-twitter-x"></i></a>
                        <a href=""><i className="bi bi-facebook"></i></a>
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                  <div className="member">
                    <img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" />
                    <div className="member-info">
                      <div className="member-info-content">
                        <h4>Sarah Jhonson</h4>
                        <span>Product Manager</span>
                      </div>
                      <div className="social">
                        <a href=""><i className="bi bi-twitter-x"></i></a>
                        <a href=""><i className="bi bi-facebook"></i></a>
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                  <div className="member">
                    <img src="assets/img/team/team-3.jpg" className="img-fluid" alt="" />
                    <div className="member-info">
                      <div className="member-info-content">
                        <h4>William Anderson</h4>
                        <span>CTO</span>
                      </div>
                      <div className="social">
                        <a href=""><i className="bi bi-twitter-x"></i></a>
                        <a href=""><i className="bi bi-facebook"></i></a>
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                  <div className="member">
                    <img src="assets/img/team/team-4.jpg" className="img-fluid" alt="" />
                    <div className="member-info">
                      <div className="member-info-content">
                        <h4>Amanda Jepson</h4>
                        <span>Accountant</span>
                      </div>
                      <div className="social">
                        <a href=""><i className="bi bi-twitter-x"></i></a>
                        <a href=""><i className="bi bi-facebook"></i></a>
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Pricing Section  */}
          <section id="pricing" className="pricing section">
            {/* Section Title  */}
            <div className="container section-title" data-aos="fade-up">
              <h2>Pricing</h2>
              <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>
            {/* End Section Title  */}
            <div className="container">
              <div className="row gy-3">
                <div className="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="100">
                  <div className="pricing-item">
                    <h3>Free</h3>
                    <h4><sup>$</sup>0<span> / month</span></h4>
                    <ul>
                      <li>Aida dere</li>
                      <li>Nec feugiat nisl</li>
                      <li>Nulla at volutpat dola</li>
                      <li className="na">Pharetra massa</li>
                      <li className="na">Massa ultricies mi</li>
                    </ul>
                    <div className="btn-wrap">
                      <a href="#" className="btn-buy">Buy Now</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="200">
                  <div className="pricing-item featured">
                    <h3>Business</h3>
                    <h4><sup>$</sup>19<span> / month</span></h4>
                    <ul>
                      <li>Aida dere</li>
                      <li>Nec feugiat nisl</li>
                      <li>Nulla at volutpat dola</li>
                      <li>Pharetra massa</li>
                      <li className="na">Massa ultricies mi</li>
                    </ul>
                    <div className="btn-wrap">
                      <a href="#" className="btn-buy">Buy Now</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="400">
                  <div className="pricing-item">
                    <h3>Developer</h3>
                    <h4><sup>$</sup>29<span> / month</span></h4>
                    <ul>
                      <li>Aida dere</li>
                      <li>Nec feugiat nisl</li>
                      <li>Nulla at volutpat dola</li>
                      <li>Pharetra massa</li>
                      <li>Massa ultricies mi</li>
                    </ul>
                    <div className="btn-wrap">
                      <a href="#" className="btn-buy">Buy Now</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6" data-aos="fade-up" data-aos-delay="400">
                  <div className="pricing-item">
                    <span className="advanced">Advanced</span>
                    <h3>Ultimate</h3>
                    <h4><sup>$</sup>49<span> / month</span></h4>
                    <ul>
                      <li>Aida dere</li>
                      <li>Nec feugiat nisl</li>
                      <li>Nulla at volutpat dola</li>
                      <li>Pharetra massa</li>
                      <li>Massa ultricies mi</li>
                    </ul>
                    <div className="btn-wrap">
                      <a href="#" className="btn-buy">Buy Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Contact Section */}
          <section id="contact" className="contact section">
            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
              <h2>Contact</h2>
              <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>
            {/* End Section Title */}
            <div className="container" data-aos="fade-up" data-aos-delay="100">
              <div className="row gy-4" data-aos="fade-up" data-aos-delay="200">
                <div className="col-lg-4">
                  <div className="info-item d-flex flex-column justify-content-center align-items-center">
                    <i className="bi bi-geo-alt"></i>
                    <h3>Address</h3>
                    <p>A108 Adam Street, New York, NY 535022</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="info-item d-flex flex-column justify-content-center align-items-center info-item-borders">
                    <i className="bi bi-telephone"></i>
                    <h3>Call Us</h3>
                    <p>+1 5589 55488 55</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="info-item d-flex flex-column justify-content-center align-items-center">
                    <i className="bi bi-envelope"></i>
                    <h3>Email Us</h3>
                    <p>info@example.com</p>
                  </div>
                </div>
              </div>
              <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="300">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input type="text" name="name" className="form-control" placeholder="Your Name" required="" />
                  </div>
                  <div className="col-md-6 ">
                    <input type="email" className="form-control" name="email" placeholder="Your Email" required="" />
                  </div>
                  <div className="col-md-12">
                    <input type="text" className="form-control" name="subject" placeholder="Subject" required="" />
                  </div>
                  <div className="col-md-12">
                    <textarea className="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
                  </div>
                  <div className="col-md-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </main>

        <footer id="footer" className="footer dark-background">
          <div className="container">
            <div className="row gy-3">
              <div className="col-lg-3 col-md-6 d-flex">
                <i className="bi bi-geo-alt icon"></i>
                <div className="address">
                  <h4>Address</h4>
                  <p>A108 Adam Street</p>
                  <p>New York, NY 535022</p>
                  <p></p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex">
                <i className="bi bi-telephone icon"></i>
                <div>
                  <h4>Contact</h4>
                  <p>
                    <strong>Phone:</strong> <span>+1 5589 55488 55</span><br />
                    <strong>Email:</strong> <span>info@example.com</span><br />
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex">
                <i className="bi bi-clock icon"></i>
                <div>
                  <h4>Opening Hours</h4>
                  <p>
                    <strong>Mon-Sat:</strong> <span>11AM - 23PM</span><br />
                    <strong>Sunday</strong>: <span>Closed</span>
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <h4>Follow Us</h4>
                <div className="social-links d-flex">
                  <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
                  <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                  <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="container copyright text-center mt-4">
            <p>© <span>Copyright</span> <strong className="px-1 sitename">Bell</strong> <span>All Rights Reserved</span></p>
            <div className="credits">
              All the links in the footer should remain intact.
              You can delete the links only if you've purchased the pro version.
              Licensing information: https://bootstrapmade.com/license/
              Purchase the pro version with working PHP/AJAX contact form: [buy-url]
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>
        </footer>
        {/* Scroll Top */}
        <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        {/* Preloader */}
        <div id="preloader"></div>
      </div>
    </>
  )
}

export default Maincontent;
