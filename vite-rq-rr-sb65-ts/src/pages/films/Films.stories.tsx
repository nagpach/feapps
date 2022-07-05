import React from 'react';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RequestHandler, rest } from 'msw';
import Films from './Films';
import { withRouter } from 'storybook-addon-react-router-v6';

const activeRoute = '/films';
const notActiveRoute = '/';

type MswParameter = {
  handlers: RequestHandler[] | Record<string, RequestHandler | RequestHandler[]>
}

export default {
  title: 'RQ/Page Stories/Films',
  component: Films,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: activeRoute,
    },
  },
};

const defaultQueryClient = new QueryClient();

export const DefaultBehavior = () => (
  <QueryClientProvider client={defaultQueryClient}>
        <Films />
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
        <Films />
  </QueryClientProvider>
);

export const MockedSuccess = MockTemplate.bind({});


MockedSuccess.parameters = {
  msw: {
    handlers: [
      rest.get('https://swapi.dev/api/films/', (req, res, ctx) => {
        return res(
          ctx.json({
            results: [
              {
                title: '(Mocked) A New Hope',
                episode_id: 4,
                release_date: '1977-05-25',
                url: 'http://swapi.dev/api/films/1/',
              },
              {
                title: '(Mocked) Empire Strikes Back',
                episode_id: 5,
                release_date: '1980-05-17',
                url: 'http://swapi.dev/api/films/2/',
              },
            ],
          }),
        );
      }),
    ]
  },
};


export const MockedError = MockTemplate.bind({});
MockedError.parameters = {
  msw: {
    handlers: [
      rest.get('https://swapi.dev/api/films/', (req, res, ctx) => {
        return res(
          ctx.delay(800),
          ctx.status(403),
        );
      }),
    ]
  },
};