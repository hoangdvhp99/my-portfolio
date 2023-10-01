import { FC } from 'react';
import { motion } from 'framer-motion';

interface Props {
  projectName: string;
  subTitle: string;
  description: string;
  time: string;
}

const ExperienceItem: FC<Props> = props => {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="flex-grow-1">
        <div className="d-flex flex-row gap-3">
          <h3 className="mb-0">{props.projectName}</h3>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{
              scale: 0.8,
              borderRadius: '100%',
            }}
          >
            <button type="button" className="btn btn-light" title="View detail">
              <i className="fa-solid fa-eye"></i>
            </button>
          </motion.div>
        </div>

        <div className="subheading mb-3">{props.subTitle}</div>
        <p>{props.description}</p>
      </div>
      <div className="flex-shrink-0">
        <span className="text-primary">{props.time}</span>
      </div>
    </div>
  );
};

export default ExperienceItem;
