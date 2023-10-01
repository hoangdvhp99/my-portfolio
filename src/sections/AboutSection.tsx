function AboutSection() {
  return (
    <section id="about" className="resume-section">
      <div className="resume-section-content">
        <h1 className="mb-0">
          HOANG
          <span className="text-primary"> DANG VIET</span>
        </h1>
        <div className="subheading mb-5">
          North Tu Liem, Hanoi
          <br />
          <a href="tel:+84898288423">(+84) 898288423</a>
          <br />
          <a className="text-lowercase" href="mailto:name@email.com">
            hoangdv.hp99@email.com
          </a>
        </div>
        <p className="lead mb-5">
          I am experienced in leveraging agile frameworks to provide a robust
          synopsis for high level overviews. Iterative approaches to corporate
          strategy foster collaborative thinking to further the overall value
          proposition.
        </p>
        <div className="social-icons">
          <a
            className="social-icon"
            href="https://www.linkedin.com/in/hoangdv-vn/"
            target="_blank"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          {/* <a className="social-icon" href="#!" target="_blank">
            <i className="fab fa-github"></i>
          </a> */}
          <a
            className="social-icon"
            href="https://join.skype.com/invite/xG1qr01dOkGb"
            target="_blank"
          >
            <i className="fab fa-skype"></i>
          </a>
          <a
            className="social-icon"
            href="https://www.facebook.com/hoang.dangviet.hp/"
            target="_blank"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
