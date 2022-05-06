import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { CMSProjectDetail } from '../../cms-integration/markdown/projects';
import Heading from '../../strum-design-system/components/Heading/Heading';
import { atoms } from '../../strum-design-system/sprinkles.css';
import { articleStyle } from '../Articles/article.css';

const ProjectItem: React.FC<CMSProjectDetail> = (props) => {
  return (
    <article className={articleStyle}>
      <Heading level={4}>
        <span
          className={atoms({
            backgroundColor: { darkMode: 'white', lightMode: 'dark' },
            borderRadius: 'rounded',
            color: { darkMode: 'dark', lightMode: 'white' },
            paddingX: 2,
          })}
        >
          {props.attributes.title}
        </span>{' '}
        at {props.attributes.organization}
      </Heading>
      <div
        className={atoms({ marginTop: 4 })}
        dangerouslySetInnerHTML={{ __html: props.html }}
      />
    </article>
  );
};

export default ProjectItem;
