import 'tailwindcss/tailwind.css';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { rest } from 'msw';

//Configuring MSW
initialize();

/*
// if you want MSW to bypass unhandled requests and not do anything:
initialize({
  onUnhandledRequest: 'bypass'
})
*/

/*
initialize({
  onUnhandledRequest: ({ method, url }) => {
    if (url.pathname.startsWith('/my-specific-api-path')) {
      console.error(`Unhandled ${method} request to ${url}.

        This exception has been only logged in the console, however, it's strongly recommended to resolve this error as you don't want unmocked data in Storybook stories.

        If you wish to mock an error response, please refer to this guide: https://mswjs.io/docs/recipes/mocking-error-responses
      `)
    }
  },
})
*/



export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true,
    },
  },
  options: {
    storySort: {
      order: ['Guides', ['Introduction', 'Installation'], 'Demos', ['Urql']],
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  msw: {
    handlers: {
      
      films: [
        rest.get('https://swapi.dev/api/films/1', (req, res, ctx) => {
        return res(
          ctx.json({
            title: '(Mocked) A New Hope',
            episode_id: 4,
            opening_crawl: `Rebel spaceships have won their first victory against the evil Galactic Empire.`,
            characters: ['http://swapi.dev/api/people/1/', 'http://swapi.dev/api/people/2/'],
          }),
        );
      }),
      rest.get('https://swapi.dev/api/people/1', (req, res, ctx) => {
        return res(
          ctx.json({
            name: '(Mocked) Luke Skywalker',
          }),
        );
      }),
      rest.get('https://swapi.dev/api/people/2', (req, res, ctx) => {
        return res(
          ctx.json({
            name: '(Mocked) C-3PO',
          }),
        );
      }),
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
      ],
      auth: [
         rest.get('/login', (req, res, ctx) => {
            return res(
              ctx.json({
                 success: true,
              })
            )
         }),
         rest.get('/logout', (req, res, ctx) => {
            return res(
              ctx.json({
                 success: true,
              })
            )
         }),
      ],
    }
 }

}

export const decorators = [mswDecorator];

