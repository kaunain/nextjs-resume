import { BriefcaseIcon } from '@heroicons/react/24/solid';
import { Fragment, ReactNode } from 'react';
import { CMSProjectDetail } from 'src/cms-integration/markdown/projects';
import ProjectItem from 'src/components/ProjectItem/ProjectItem';
import Separator from 'src/components/articles/separator';
import SectionHeading from 'src/components/section-heading/section-heading';

type ProjectsProperties = {
  projects: CMSProjectDetail[];
};

export default function Projects({ projects }: ProjectsProperties): ReactNode {
  return (
    <article className="border-neutral-6 bg-neutral-2 rounded-xl border py-12 shadow-md">
      <div className="container space-y-8">
        <SectionHeading
          className="justify-center"
          Icon={BriefcaseIcon}
          level={2}
          text="Projects"
        />

        {projects.map((project) => (
          <Fragment key={project.slug}>
            <ProjectItem {...project} />
            <Separator />
          </Fragment>
        ))}
      </div>
    </article>
  );
}
