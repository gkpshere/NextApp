import Gbutton from './Gbutton';
import type { Meta, StoryObj } from '@storybook/react';


const meta={
    title:"GButton",
    component:Gbutton,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
      },
} satisfies Meta<typeof Gbutton>;

export default meta;

type Story= StoryObj<typeof Gbutton>

export const Primary: Story={
    args:{
        primary:true,
        label:'Button'
    }
}

export const Secondary: Story={
    args:{
        primary:false,
        label:'Button'
    }
}

