import Avatar from '/img/avatar.jpg';

export default function Navbar() {
  // useEffect(() => {
  //   // window.addEventListener('DOMContentLoaded', event => {
  //   //   // Activate Bootstrap scrollspy on the main nav element
  //   //   const sideNav = document.body.querySelector('#sideNav');
  //   //   if (sideNav) {
  //   //       new bootstrap.ScrollSpy(document.body, {
  //   //           target: '#sideNav',
  //   //           rootMargin: '0px 0px -40%',
  //   //       });
  //   //   };

  //   //   // Collapse responsive navbar when toggler is visible
  //   //   const navbarToggler = document.body.querySelector('.navbar-toggler');
  //   //   const responsiveNavItems = [].slice.call(
  //   //       document.querySelectorAll('#navbarResponsive .nav-link')
  //   //   );
  //   //   responsiveNavItems.map(function (responsiveNavItem) {
  //   //       responsiveNavItem?.addEventListener('click', () => {
  //   //           if (window.getComputedStyle(navbarToggler).display !== 'none') {
  //   //               navbarToggler.click();
  //   //           }
  //   //       });
  //   //   });
  //   // }); 
  // }, []);

  const toggleNavbar = () => {
    const menuMobile = document.getElementById('navbarResponsive');
    if (menuMobile) {
      if (menuMobile.style.display === 'none') {
        menuMobile.style.display = 'block'
      } else {
        menuMobile.style.display = 'none'
      }
    }
  }

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <a className="navbar-brand js-scroll-trigger" href="/">
        <span className="d-block d-lg-none">Hoang Dang Viet</span>
        <span className="d-none d-lg-block">
          <img
            src={Avatar}
            alt="avatar"
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
          />
        </span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={toggleNavbar}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      {/* <div className="collapse navbar-collapse" id="navbarResponsive"> */}
      <div className="navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#experience">
              Experience
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#education">
              Education
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#skills">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#aff">
              Affiliates
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
