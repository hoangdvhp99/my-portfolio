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
            <p>GPA: 3.29 / 4.0 </p>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">August 2017 - August 2021</span>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">TOEIC Certification</h3>
            {/* <div className="subheading mb-3">Engineer of Science</div>
            <div>Information Technology</div> */}
            <p>Score: 620 / 990 </p>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">2018</span>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">MOS - Excel Certification</h3>
            {/* <div className="subheading mb-3">Engineer of Science</div>
            <div>Information Technology</div> */}
            <p>Score: 1000 / 1000 </p>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">2019</span>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">MOS - WORD Certification</h3>
            {/* <div className="subheading mb-3">Engineer of Science</div>
            <div>Information Technology</div> */}
            <p>Score: 1000 / 1000 </p>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">2019</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
