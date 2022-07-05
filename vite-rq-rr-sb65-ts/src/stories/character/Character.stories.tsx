import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { rest } from 'msw';
import Character from '../../components/Character';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'RQ/Page Stories/Character',
  component: Character,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/characters/:characterId',
      routeParams: { characterId: '1' },
    },
  }
};



const defaultQueryClient = new QueryClient();

export const DefaultBehavior = () => (
  <QueryClientProvider client={defaultQueryClient}>
        <Character />
  </QueryClientProvider>
);


DefaultBehavior.parameters = {
   msw: {
      handlers: {
        common: [
          rest.get('https://swapi.dev/api/people/1', (req, res, ctx) => {
            return res(
              ctx.json({
                name: '(Mocked) Luke Skywalker',
                birth_year: '19BBY',
                eye_color: 'blue',
                hair_color: 'blond',
                height: '172',
                mass: '77',
                homeworld: 'http://swapi.dev/api/planets/1/',
                films: ['http://swapi.dev/api/films/1/', 'http://swapi.dev/api/films/2/'],
              }),
            );
          }),
          rest.get('https://swapi.dev/api/films/1', (req, res, ctx) => {
            return res(
              ctx.json({
                title: '(Mocked) A New Hope',
                episode_id: 4,
              }),
            );
          }),
          rest.get('https://swapi.dev/api/films/2', (req, res, ctx) => {
            return res(
              ctx.json({
                title: '(Mocked) Empire Strikes Back',
                episode_id: 5,
              }),
            );
          }),
        ]
      }
    }
}

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const MockTemplate = () => (
  <QueryClientProvider client={mockedQueryClient}>
        <Character />
  </QueryClientProvider>
);

export const MockedSuccess = () => MockTemplate.bind({});
MockedSuccess.parameters = {
  msw: {
    handlers: {
      planets: [
        rest.get('https://swapi.dev/api/planets/1', (req, res, ctx) => {
          return res(
            ctx.json({
              name: '(Mocked) Tatooine',
                birth_year: '19BBY',
                eye_color: 'blue',
                hair_color: 'blond',
                height: '172',
                mass: '77',
                homeworld: 'http://swapi.dev/api/planets/1/',
                films: ['http://swapi.dev/api/films/1/', 'http://swapi.dev/api/films/2/'],
            }),
          );
        }),
      ]
    }
  },
};

export const MockedPlanetsApiError = () => MockTemplate.bind({});
MockedPlanetsApiError.parameters = {
  msw: {
    handlers: {
      planets: [
        rest.get('https://swapi.dev/api/planets/1', (req, res, ctx) => {
          return res(ctx.delay(800), ctx.status(403));
        }),
      ]
    }
  },
};