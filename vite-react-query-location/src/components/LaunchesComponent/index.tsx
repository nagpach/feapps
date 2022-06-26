
import { LaunchesPastResult } from '../../generated'
import { tw } from 'twind'

import {
    MakeGenerics,
    useMatch,
  } from "@tanstack/react-location";

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
    <main className={tw`h-[calc(100vh-100px)] bg-purple-400 flex items-center justify-center`}>
    <div>
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
    </main>

  )
}

export default LaunchesComponent