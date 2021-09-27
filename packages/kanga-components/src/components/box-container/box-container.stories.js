import readme from './readme.md';

export default {
  title: 'Box Container',
  parameters: {
    markdown: readme,
  },
};

export const Default = () => `
  <box-container boxTitle="box title">box innards</box-container>
`;