import { describe, expect, mock, test } from 'bun:test';
import { render, screen } from 'src/test-utilities';
import Projects from './projects';

mock.module('src/cms-integration/markdown/projects', () => ({
  getProjectDetails: async () => [
    {
      attributes: {
        organization: 'Aircel',
        title: 'Project Register',
      },
      html: '<p>Inventory and tracking application</p>',
      slug: '1-projreg',
    },
  ],
}));

describe('<Projects />', () => {
  test('renders the projects section heading', () => {
    render(<Projects projects={[{ attributes: { organization: 'Aircel', title: 'Project Register' }, html: '<p>Inventory and tracking application</p>', slug: '1-projreg' }]} />);

    expect(screen.getByRole('heading', { level: 2, name: /projects/i })).toBeDefined();
  });

  test('renders project details', () => {
    render(<Projects projects={[{ attributes: { organization: 'Aircel', title: 'Project Register' }, html: '<p>Inventory and tracking application</p>', slug: '1-projreg' }]} />);

    expect(screen.getByText(/project register/i)).toBeDefined();
    expect(screen.getByText(/aircel/i)).toBeDefined();
    expect(screen.getByText(/inventory and tracking application/i)).toBeDefined();
  });
});
