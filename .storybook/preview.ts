import type { Preview } from '@storybook/react';
import '../src/index.css';


const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#141C25' },
      ],
    },

    a11y: {
            config: { rules: [{ id: 'region', enabled: false }] },
    }
  },
};

export default preview;