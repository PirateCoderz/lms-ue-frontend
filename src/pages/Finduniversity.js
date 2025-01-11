/* eslint-disable import/no-unresolved */
import React from 'react'
import GoogleMap from 'src/Comp/GoogleMap';
import useFetch from 'src/hooks/useFetch';

const Finduniversity = () => {
  const { data: paths } = useFetch(
    "https://61a4a0604c822c0017041d33.mockapi.io/shuttle/v1/path"
  );
  const { data: stops } = useFetch(
    "https://61a4a0604c822c0017041d33.mockapi.io/shuttle/v1/stops"
  );
  return (
     paths && stops ? (
      <GoogleMap
        paths={paths}
        stops={stops}
      />
    ) : null
  )
}

export default Finduniversity