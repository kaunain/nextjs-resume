import parseFrontMatter from 'front-matter';
import fs from 'fs/promises';
import { marked } from 'marked';
import path from 'path';
import invariant from 'tiny-invariant';

export interface ProjectDetailMarkdownAttributes {
  organization: string;
  title: string;
}

export interface CMSProjectDetail {
  attributes: ProjectDetailMarkdownAttributes;
  html: string;
  slug: string;
}

const basePath = process.cwd();
const professionalPath = path.join(
  basePath,
  'edit-me',
  'cms',
  'projectDetails',
);

export const getProjectDetails = async (): Promise<CMSProjectDetail[]> => {
  const dir = (await fs.readdir(professionalPath)).reverse();
  return Promise.all(
    dir.map(async (filename) => {
      const file = await fs.readFile(path.join(professionalPath, filename));
      const { attributes, body } =
        parseFrontMatter<ProjectDetailMarkdownAttributes>(file.toString());

      invariant(
        attributes?.organization,
        `${filename} missing "organization" attribute.`,
      );
      invariant(attributes?.title, `${filename} missing "title" attribute.`);

      const html = marked(body);

      return {
        attributes,
        html,
        slug: filename.replace(/\.md$/, ''),
      };
    }),
  );
};
