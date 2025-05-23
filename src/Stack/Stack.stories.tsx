import { Meta, StoryObj } from "@storybook/react";
import { Stack } from "./Stack";
import { ComponentProps } from "react";

interface ExampleComponentProps extends ComponentProps<typeof Stack> {
    childrenQuantity?: number
}

const meta: Meta<ExampleComponentProps> = {
    title: 'Components/Stack',
    component: Stack,
    tags: ["autodocs"],
    parameters: {
      layout: "centered"
    },
    argTypes: {
        spacing: {
            control: 'number',
            defaultValue: 4
        },
        childrenQuantity: {
            control: 'number'
        }
    },
}

export default meta;

type Story = StoryObj<ExampleComponentProps>;

const exampleComponent: Story = {
    render: ({childrenQuantity, ...props}) => (
        <Stack {...props}>
            {[...Array(childrenQuantity).keys()].map(n => (
                <div key={n} className="w-32 h-32 bg-blue-500 flex items-center justify-center text-3xl font-bold">
                  { n + 1 }
                </div>
            ))}
        </Stack>
    )
}

export const Default: Story = {
  ...exampleComponent,
  args: {
    spacing: 4,
    col: false,
    childrenQuantity: 2
  }
};