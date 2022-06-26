
import { QueryClient, QueryClientProvider } from 'react-query'
import { LaunchesPastResult } from '../../generated'
import { getSdk } from '../../generated/routes'
import { GraphQLClient } from 'graphql-request'

import {
    MakeGenerics,
    useMatch,
  } from "react-location";

type LocationGenerics = MakeGenerics<{
    LoaderData: {
      launchesPast: LaunchesPastResult
    }
  }>

const LaunchesComponent = () => {
    const {
      data: {launchesPast: data},
    } = useMatch<LocationGenerics>();

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: "100%", height: '100vh'}}>
      <div>
        {data?.data?.map(launch => (
          <div key={launch?.mission_name}>
            <div style={{ marginBottom: '8px' }}>
              <p style={{ margin:0 }}>Mission name: {launch?.mission_name}</p>
              <p style={{ margin:0 }}>Launch date: {launch?.launch_date_local}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LaunchesComponent