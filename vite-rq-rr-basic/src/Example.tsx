import * as React from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useRepoData } from './hooks/data'

export function QueryExample() {
    const { isLoading, error, data, isFetching } = useRepoData()

    if (isLoading) return <div>Loading...</div>

    if (error instanceof Error)
        return <div>An error has occurred: {error.message}</div>

    return (
        <div>
            {/*<h1>name: {data?.name}</h1>*/}

            <div className="shadow-md m-2 p-2 bottom-2 bg-blue-200 w-[50%]">
            <pre id="json">{JSON.stringify(data,undefined, 2)}</pre>
            </div>
            <div>{isFetching ? 'Updating...' : ''}</div>
            <ReactQueryDevtools initialIsOpen />
        </div>
    )
}