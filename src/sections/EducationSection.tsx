function EducationSection() {
  return (
    <section className="resume-section" id="education">
      <div className="resume-section-content">
        <h2 className="mb-5">Education</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Vietnam Maritime University</h3>
            <div className="subheading mb-3">Engineer of Science</div>
            <div>Information Technology</div>
            <p>GPA: 3.29</p>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">August 2017 - August 2021</span>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div className="flex-grow-1">
            <h3 className="mb-0">James Buchanan High School</h3>
            <div className="subheading mb-3">Technology Magnet Program</div>
            <p>GPA: 3.56</p>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">August 2002 - May 2006</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
