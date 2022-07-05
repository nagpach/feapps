import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import CounterPage from '../pages/CounterPage';

const activeRoute = '/counter';
const notActiveRoute = '/';

const CounterPageStory: ComponentMeta<typeof CounterPage> =
  {
    title: 'Pages/CounterPage',
    component: CounterPage,
    decorators: [withRouter],
    parameters: {
      reactRouter: {
        routePath: activeRoute,
      },
    },
  };

const Template: ComponentStory<typeof CounterPage> = (props) => (
  <CounterPage />
);

export const Default = Template.bind({});
Default.args = {
  route: notActiveRoute,
};

export const Active = Template.bind({});
Active.args = {
  route: activeRoute,
};

export default CounterPageStory;