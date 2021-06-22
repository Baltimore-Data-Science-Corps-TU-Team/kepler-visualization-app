import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import KeplerGl from 'kepler.gl';
import { addDataToMap } from 'kepler.gl/actions';

export default function Map({ fetchedBoundaryDataFrame, mapConfiguration }) {

    const dispatch = useDispatch();

    useEffect(() => {
        if (fetchedBoundaryDataFrame) {
            console.log("data frame->", fetchedBoundaryDataFrame)
            dispatch(
                addDataToMap({
                    datasets: {
                        info: {
                            label: 'crime',
                            id: 'crime-baltimore'
                        },
                        data: fetchedBoundaryDataFrame
                    },
                    option: {
                        centerMap: true,
                        readOnly: false
                    },
                    config: mapConfiguration.config
                    
                })
            )
        }
    }, [dispatch, fetchedBoundaryDataFrame])

    return (
        <div>
            <KeplerGl
                id="1"
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API}
                width={window.innerWidth}
                height={window.innerHeight}
                appName={'Data Science Corps'}
            />
        </div>
    )
}
