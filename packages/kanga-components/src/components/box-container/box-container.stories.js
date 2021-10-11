import readme from './readme.md';

export default {
  title: 'Components/Box Container',
  parameters: {
    // markdown: readme,
    notes: readme
  },
};

const text = "Soy milk cherry banana bread pomegranate cauliflower cherry bomb pepper balsamic vinaigrette hearts of palm muffins creamiest lychee parsley peppermint morning smoothie bowl. Ginger tofu green tea cozy cinnamon oatmeal main course Malaysian peanut butter blueberry chia seed jam scotch bonnet pepper strawberry spinach salad spiced pumpkin chili couscous almond milk walnut pesto tart red amazon pepper Thai basil curry raspberry fizz almonds delightful blueberry scones Mexican fiesta banana. Udon noodles salty simmer chia seeds bruschetta edamame banana bread cookies cherries quinoa flatbread cool cucumbers green tea lime.\n"

export const Default = () => `
  <box-container>${text}</box-container>
`;

export const WithHeader = () => `
  <box-container box-title="box title">${text}</box-container>
`;