import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const Map = () => {
	const [viewport, setViewport] = useState({
		width: '100%',
		height: '100%',
		latitude: 37.7577,
		longitude: -122.4376,
		zoom: 11,
	});
	return (
		<div className='mapboxgl-canvas'>
			<ReactMapGL
				mapStyle='mapbox://styles/turhansel/cky975luk0rva14s8uxpu1uuo'
				mapboxApiAccessToken={process.env.MAPBOX_KEY}
				{...viewport}
				onViewportChange={(nextViewport) => setViewport(nextViewport)}
			>
				{/* {searchResults.map((result) => (
                <div>
                    <Marker
                        latitude={result.lat}
                        longitude={result.long}
                    >
                        <div className="bg-white rounded-2xl font-semibold py-1 px-1.5 hover:bg-black hover:text-white transition duration-150 ease-out cursor-pointer">${result.price} CAD</div>
                    </Marker>
                </div>
            ))} */}
			</ReactMapGL>
		</div>
	);
};

export default Map;
