import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: { control: 'select', options: ['primary', 'secondary', 'danger']}
    }
}

export default meta;

type Story = StoryObj<typeof Button>

export const Primary: Story = {
    args: {
        label: 'Click me',
        variant: 'primary'
    },
};

export const Secondary: Story = {
    args: {
        label: 'Click me',
        variant: 'secondary'
    },
};

export const Danger: Story = {
    args: {
        label: 'Click me',
        variant: 'danger'
    },
};