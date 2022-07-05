import { waitFor } from '@testing-library/react'
import { rest } from 'msw'
import { renderWithClient } from './utils'
//import { server } from '../../mocks/server'
import { QueryExample } from '../Example'
import * as React from 'react'
import { setupServer } from 'msw/node'

//import { handlers } from './handlers'

//export const server = setupServer(...handlers)
const server = setupServer()

describe('query component', () => {
    test('successful query component', async () => {
        const result = renderWithClient(<QueryExample />)

        expect(await result.findByText(/mocked-react-query/i)).toBeInTheDocument()
    })

    test('failure query component', async () => {
        server.use(
            rest.get('*', (req, res, ctx) => {
                return res(ctx.status(500))
            })
        )

        const result = renderWithClient(<QueryExample />)

        expect(await result.findByText(/an error has occurred/i)).toBeInTheDocument()
    })
})