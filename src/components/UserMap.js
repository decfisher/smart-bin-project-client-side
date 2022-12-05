import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api"
import { API_KEY } from "../js/env";
import binIcon from "../icons/bin-custom.png"

export default function UserMap({ latitude, longitude }) {
    const { isLoaded } = useJsApiLoader({
        id: "google-maps-script",
        googleMapsApiKey: API_KEY
    })

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%"}}
            center={{ lat: latitude, lng: longitude }} 
            zoom={17} 
            options={{  
                streetViewControl: false, 
                mapTypeControl: false, 
                fullscreenControl: false,
            }}
        >
            <MarkerF position={{ lat: latitude, lng: longitude }} icon={binIcon}/>
        </GoogleMap>
    ) : <div>Map is unavailable at this moment...</div>
}