import { setupWorker } from "msw";
import { mockLaunchesPastQuery } from '../generated'

const server = setupWorker(
  mockLaunchesPastQuery((req, res, ctx) => {
    return res(
      ctx.data( {
          "launchesPast": [
            {
              mission_name: "Starlink-15 (v1.0)", 
              launch_date_local: "2020-10-24T11:31:00-04:00", 
              launch_site: {
                "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
              }
            },
            {
              mission_name: "Starlink-20 (v1.0)", 
              launch_date_local: "2021-10-24T11:31:00-04:00", 
              launch_site: {
                "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
              }
            }
          ]
        }
          )
        )
  })
);
export default server