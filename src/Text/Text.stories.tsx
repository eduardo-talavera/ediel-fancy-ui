import { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";


const meta: Meta<typeof Text> = {
    title: 'Components/Text',
    component: Text,
    tags: ["autodocs"],
    parameters: {
      layout: "centered"
    },
    argTypes: {
      
    },
}

export default meta;

type Story = StoryObj<typeof Text>;


export const Default: Story = {
  args: {
    as: 'p',
    children: 'lorem ipsum atempt insur'
  }
};