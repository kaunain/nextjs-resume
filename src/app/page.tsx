import AboutMe from 'src/components/articles/about-me';
import Achievements from 'src/components/articles/achievements';
import AdditionalInfo from 'src/components/articles/additional-info';
import ContactInformation from 'src/components/articles/contact-info';
import Professional from 'src/components/articles/professional';
import Projects from 'src/components/articles/projects';
import Skills from 'src/components/articles/skills';
import { getProjectDetails } from 'src/cms-integration/markdown/projects';

export default async function Page() {
  const projects = await getProjectDetails();

  return (
    <div className="container space-y-12">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <AboutMe />
        <ContactInformation />
        <Skills />
      </div>

      <Professional />
      <Projects projects={projects} />
      <Achievements />
      <AdditionalInfo />
    </div>
  );
}
