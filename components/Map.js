import { LocationMarkerIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

const Map = ({ searchResults, viewport, setViewport, selectedLocation, setSelectedLocation }) => {
	console.log(selectedLocation);
	return (
		<div className='mapboxgl_canvas'>
			<ReactMapGL
				mapStyle='mapbox://styles/turhansel/cky975luk0rva14s8uxpu1uuo'
				mapboxApiAccessToken={process.env.MAPBOX_KEY}
				{...viewport}
				onViewportChange={(nextViewport) => setViewport(nextViewport)}
			>
				{searchResults.map((result, index) => (
					<div key={result.id}>
						<Marker longitude={result.long} latitude={result.lat}>
							<p
								role='img'
								className={`marker_inner ${selectedLocation.long === result.long ? 'active' : ''}`}
								onClick={() => setSelectedLocation(result._id)}
								aria-label='push-pin'
							>
								<LocationMarkerIcon className='fill-red-400' />
							</p>
						</Marker>

						{selectedLocation === result._id ? (
							<Popup
								onClose={() => setSelectedLocation({})}
								closeOnClick={true}
								latitude={result.lat}
								longitude={result.long}
								className='popup'
							>
								<div className='max max-w-xs max-h-3.5'>
									{/* <div className='relative'>
										<Image src={result.img} width={200} height={200} />
										<h5 className='absolute top-3/4 left-1/4 text-white'>{result.title}</h5>
									</div> */}
									<div className='popup_inner'>

									</div>

									<div className='flex justify-evenly'>
										<h4>£{result.price}GBP</h4>
									</div>
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
