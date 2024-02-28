import AboutSection from './sections/AboutSection'
import EducationSection from './sections/EducationSection'
import ExperienceSection from './sections/ExperienceSection'
import SkillsSection from './sections/SkillsSection'
import Navbar from './sections/Navbar'
import './style.css'

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <div className="container-fluid p-0">
        <AboutSection />
        <hr className="m-0" />
        <ExperienceSection />
        <hr className="m-0" />
        <EducationSection />
        <hr className="m-0" />
        <SkillsSection />
        <hr className="m-0" />
      </div>
    </>
  )
}
