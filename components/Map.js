import { LocationMarkerIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './custom.module.css';

const Map = ({ searchResults, viewport, setViewport, selectedLocation, setSelectedLocation }) => {
	console.log();

	return (
		<div className='mapboxgl_canvas'>
			<ReactMapGL
				mapStyle='mapbox://styles/turhansel/cky975luk0rva14s8uxpu1uuo'
				mapboxApiAccessToken={process.env.MAPBOX_KEY}
				{...viewport}
				onViewportChange={(nextViewport) => setViewport(nextViewport)}
			>
				{searchResults.map((result, index) => (
					<div key={result._id}>
						<Marker longitude={result.long} latitude={result.lat}>
							<p
								role='img'
								className={`marker_inner ${selectedLocation.long === result.long ? 'active' : ''}`}
								onClick={() => setSelectedLocation(result._id)}
								aria-label='push-pin'
							>
								<LocationMarkerIcon className='fill-red-400 cursor-pointer' />
							</p>
						</Marker>

						{selectedLocation === result._id ? (
							<Popup
								onClose={() => setSelectedLocation({})}
								closeOnClick={true}
								latitude={result.lat}
								longitude={result.long}
								altitude={10}
							>
								
								<div>
									<Image src={result.img} width={200} height={200} />
									<h5>{result.title}</h5>
									<h4 className=''>£{result.price}GBP</h4>
								</div>
							</Popup>
						) : null}
					</div>
				))}
			</ReactMapGL>
		</div>
	);
};

export default Map;
