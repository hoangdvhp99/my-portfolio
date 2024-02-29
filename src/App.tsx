import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from './sections/Navbar';
import AboutSection from './sections/AboutSection';
import EducationSection from './sections/EducationSection';
import SkillsSection from './sections/SkillsSection';
import ExperienceSection from './sections/ExperienceSection';

function App() {
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
  );
}

export default App;
