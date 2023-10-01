import ExperienceItem from '../components/ExperienceItem';

function ExperienceSection() {
  return (
    <section className="resume-section" id="experience">
      <div className="resume-section-content">
        <h2 className="mb-5">Experience</h2>
        <ExperienceItem
          projectName={'Senior Web Developer'}
          subTitle={'Intelitec Solutions'}
          description={'njnknkjnkjn'}
          time={'March 2013 - Present'}
        />
        <ExperienceItem
          projectName={'Senior Web Developer'}
          subTitle={'Intelitec Solutions'}
          description={'njnknkjnkjn'}
          time={'March 2013 - Present'}
        />
      </div>
    </section>
  );
}

export default ExperienceSection;
