
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { rest } from 'msw';
import Characters from '../../components/Characters';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'RQ/Page Stories/Characters',
  component: Characters,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/characters',
      routeParams: {  },
    },
  }
}

const defaultQueryClient = new QueryClient();

export const DefaultBehavior = () => (
  <QueryClientProvider client={defaultQueryClient}>
        <Characters />
  </QueryClientProvider>
);

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const MockTemplate = () => (
  <QueryClientProvider client={mockedQueryClient}>
        <Characters />
  </QueryClientProvider>
);

export const MockedSuccess =  MockTemplate.bind({});
MockedSuccess.parameters = {
  msw: {
    handlers: [
      rest.get('https://swapi.dev/api/people/', (req, res, ctx) => {
        return res(
          ctx.json({
            results: [
              {
                name: '(Mocked) Luke Skywalker',
                url: 'http://swapi.dev/api/people/1/',
              },
              {
                name: '(Mocked) C-3PO',
                url: 'http://swapi.dev/api/people/2/',
              },
            ],
          }),
        );
      }),
    ]
  },
};

export const MockedError =  MockTemplate.bind({});
MockedError.parameters = {
  msw: {
    handlers: [
      rest.get('https://swapi.dev/api/people/', (req, res, ctx) => {
        return res(
          ctx.delay(800),
          ctx.status(403),
        );
      }),
    ]
  },
};