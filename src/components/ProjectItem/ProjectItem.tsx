import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { CMSProjectDetail } from '../../cms-integration/markdown/projects';
import { Heading } from '../heading/heading';

const ProjectItem: React.FC<CMSProjectDetail> = (props) => {
  return (
    <article className="space-y-4">
      <Heading level={4}>
        <span className="rounded bg-neutral-12 px-2 py-1 text-white dark:bg-white dark:text-neutral-12">
          {props.attributes.title}
        </span>{' '}
        at {props.attributes.organization}
      </Heading>
      <div dangerouslySetInnerHTML={{ __html: props.html }} />
    </article>
  );
};

export default ProjectItem;
