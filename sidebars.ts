import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Backend',
      items: [
        'backend/overview',
        'backend/getting-started',
        'backend/authentication-and-access',
        'backend/media-library',
        'backend/automation-and-ffmpeg',
        'backend/compare-and-obtain',
        'backend/api-reference',
      ],
    },
    {
      type: 'category',
      label: 'Frontend',
      items: [
        'frontend/overview',
        'frontend/getting-started',
        'frontend/app-architecture',
        'frontend/authentication-and-api',
        'frontend/workflows',
        'frontend/build-and-deployment',
      ],
    },
  ],
};

export default sidebars;
