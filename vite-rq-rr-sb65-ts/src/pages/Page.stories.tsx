import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { Page } from './Page';

const activeRoute = '/';
const notActiveRoute = '/';

const PageStory: ComponentMeta<typeof Page> =
  {
    title: 'Pages/Page',
    component: Page,
    decorators: [withRouter],
    parameters: {
      reactRouter: {
        routePath: activeRoute,
      },
    },
  };

const Template: ComponentStory<typeof Page> = (props) => (
  <Page />
);

export const Default = Template.bind({});
Default.args = {
  route: notActiveRoute,
};

export const Active = Template.bind({});
Active.args = {
  route: activeRoute,
};

export default PageStory;