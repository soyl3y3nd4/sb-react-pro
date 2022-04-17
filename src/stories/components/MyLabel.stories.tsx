import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
  title: 'UI/MyLabel',
  component: MyLabel,
  argTypes: {
    size: { control: 'select' },
    color: { control: 'select' },
    fontColor: { control: 'color' },
  }
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: 'MyLabel',
  allCaps: false,
}

export const AllCaps = Template.bind({});
AllCaps.args = {
  label: 'All CAPS',
  allCaps: true,
}

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Color',
  color: 'secondary',
}

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'Tertiary Color',
  color: 'tertiary',
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  label: 'Custom Font Color',
  fontColor: 'red',
}