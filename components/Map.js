import { LocationMarkerIcon } from "@heroicons/react/solid";
import Image from "next/image";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useTheme } from "next-themes";

const Map = ({
  searchResults,
  viewport,
  setViewport,
  selectedLocation,
  setSelectedLocation,
}) => {
  const { theme } = useTheme();

  return (
    <div className="mapboxgl_canvas">
      <ReactMapGL
        mapStyle={`${
          theme === "dark"
            ? "mapbox://styles/turhansel/ckyqcf9ne067714lhiy8quqsp"
            : "mapbox://styles/turhansel/cky975luk0rva14s8uxpu1uuo"
        }`}
        mapboxApiAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        {searchResults.map((result, index) => (
          <div key={result._id}>
            <Marker longitude={result.long} latitude={result.lat}>
              <p
                role="img"
                className={`marker_inner ${
                  selectedLocation === result._id && "active"
                }`}
                onClick={() => setSelectedLocation(result._id)}
                aria-label="push-pin"
              >
                <LocationMarkerIcon className="cursor-pointer fill-red-400" />
              </p>
            </Marker>

            {selectedLocation === result._id ? (
              <div className="text-dark-300 dark:bg-dark">
                <Popup
                  onClose={() => setSelectedLocation({})}
                  closeOnClick={true}
                  latitude={result.lat}
                  longitude={result.long}
                  altitude={10}
                >
                  <div className="text-dark-300">
                    <Image
                      src={result.img}
                      width={150}
                      height={100}
                      unoptimized="true"
                    />
                    <h5>{result.title}</h5>
                    <h4 className="">£{result.price}GBP</h4>
                  </div>
                </Popup>
              </div>
            ) : null}
          </div>
        ))}
      </ReactMapGL>
    </div>
  );
};

export default Map;
