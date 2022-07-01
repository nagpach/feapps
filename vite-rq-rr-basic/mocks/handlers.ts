import { rest } from 'msw'

export const handlers = [

 
  
  rest.get('https://api.github.com/repos/tannerlinsley/react-query', (req, res, ctx) => {
    const data = {
      "id": 207645083,
      "node_id": "MDEwOlJlcG9zaXRvcnkyMDc2NDUwODM=",
      "name": "mocked-react-query",
      "full_name": "TanStack/query",
      "private": false,
    }

    return res(ctx.status(200), ctx.json(data))
  }),

  rest.get('/docs_list', (req, res, ctx) => {
    const data = [
      { name: 'MSW', url: 'https://mswjs.io/' },
      { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
    ]

    return res(ctx.status(200), ctx.json(data))
  }),
]
