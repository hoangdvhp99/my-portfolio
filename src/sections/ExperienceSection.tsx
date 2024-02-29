import { useState } from 'react';
import ExperienceItem from '../components/ExperienceItem';
import ModalExperienceDetail from '../components/ModalExperienceDetail';
import { Experiences_Data, IExperience } from '../data';

function ExperienceSection() {
  const [itemViewed, setItemViewed] = useState<IExperience | null>();

  const onViewDetail = (item: IExperience) => {
    console.log('====================================');
    console.log(item);
    console.log('====================================');
    setItemViewed(item);
  }

  const onCloseModal = () => {
    setItemViewed(null);
  }

  return (
    <section className="resume-section" id="experience">
      <div className="resume-section-content">
        <h2 className="mb-5">Experience</h2>
        {
          Experiences_Data.map((item) => (
            <ExperienceItem
              key={item.id}
              item={item}
              onView={() => onViewDetail(item)} />
          ))
        }
      </div>
      <ModalExperienceDetail
        itemView={itemViewed}
        show={!!itemViewed}
        onClose={onCloseModal}
      />
    </section>
  );
}

export default ExperienceSection;
