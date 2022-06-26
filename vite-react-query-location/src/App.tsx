import { QueryClient, QueryClientProvider } from 'react-query'
import { LaunchesPastResult } from './generated'
import { getSdk } from './generated/routes'
import { GraphQLClient } from 'graphql-request'
import {
  Link,
  MakeGenerics,
  Outlet,
  ReactLocation,
  Route,
  Router,
} from "@tanstack/react-location";
import { ReactQueryDevtools } from 'react-query/devtools';
import LaunchesComponent from './components/LaunchesComponent';
import HomeComponent from './components/Home';
import { ReactLocationDevtools } from '@tanstack/react-location-devtools'

//const queryClient = new QueryClient()

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 1000,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const location = new ReactLocation<LocationGenerics>();
const client = new GraphQLClient('https://api.spacex.land/graphql')




type LocationGenerics = MakeGenerics<{
  LoaderData: {
    launchesPast: LaunchesPastResult
  }
}>

const sdk = getSdk(client)

function App() {
  const routes: Route<LocationGenerics>[] = [
    {
      path: "/",
      element: <HomeComponent />,
    },
    {
      path: "/launches",
      element: <LaunchesComponent />,
      loader: async () =>  {
        const { launchesPast } = await sdk.LaunchesPast()
        return {
          launchesPast: {
            data: launchesPast
          }
        }
      }
    }
  ]
  return (
  <QueryClientProvider client={queryClient}>
    <Router routes={routes} location={location} defaultLinkPreloadMaxAge={1000}>
      <div>
        <h2>SpaceX Launches</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/launches">Launches list</Link></li>
        </ul>
        <Outlet />
      </div>
      
    </Router>
    
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  )
}

export default App
