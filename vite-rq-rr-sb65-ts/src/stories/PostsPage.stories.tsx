import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PostsPage } from '../pages/PostsPage';
import { withRouter } from 'storybook-addon-react-router-v6';

const activeRoute = '/';
const notActiveRoute = '/';

export default {
  title: 'Example/PostsPage',
  component: PostsPage,
  decorators: [withRouter],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
    reactRouter: {
      routePath: activeRoute,
    },
  },
} as ComponentMeta<typeof PostsPage>;

const Template: ComponentStory<typeof PostsPage> = (args) => <PostsPage />;

export const Default = Template.bind({});

