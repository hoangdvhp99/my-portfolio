function AboutSection() {
  return (
    <section id="about" className="resume-section">
      <div className="resume-section-content">
        <h1 className="mb-0">
          HOANG
          <span className="text-primary"> DANG VIET</span>
        </h1>
        <div className="subheading mb-3">
          North Tu Liem, Hanoi
          <br />
          <a href="tel:+84898288423">(+84) 898288423</a>
          <br />
          <a className="text-lowercase" href="mailto:name@email.com">
            hoangdv.hp99@email.com
          </a>
        </div>
        <button type="button" className="btn btn-dark mb-3">
          <a
            className="social-icon"
            href="https://drive.google.com/file/d/1TCQXj7h0P5Q8KTgVnX3eDXSaJNH3qy-i"
            // href="https://bit.ly/hoangdv-fulllstack-dev-cv"
            target="_blank"
          >
            <span className="text-light"> <i className="fas fa-download" /> Download CV</span>
          </a>
        </button>
        <div className="lead mb-5">
          <ul className="">
            <li className="">3+ years of experience in IT Software development, especially in building high-performance Web applications and mobile applications.</li>
            <li className="">Mentor and support other team members to assist in completing tasks and meeting goals</li>
            <li className="">Have experience in working on projects, I can work well independently or in groups</li>
            <li className="">Have knowledge and understanding of all stages of software development in a highly agile/scrum working environment</li>
          </ul>
        </div>
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
