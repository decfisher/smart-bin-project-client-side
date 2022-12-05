import React from "react"
import { API_KEY } from "../js/env";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api"
import MarkerWithInfo from "./MarkerWithInfo";

export default function ManagementMap({ style, bins }) {
    const { isLoaded } = useJsApiLoader({
        id: "google-maps-script",
        googleMapsApiKey: API_KEY
    });

    const center = { lat: bins[0].latitude, lng: bins[0].longitude }

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={style} 
            center={center} 
            zoom={17} 
            options={{  
                streetViewControl: false, 
                mapTypeControl: false, 
                fullscreenControl: false,
            }}
        >
            {bins.map(
                (bin, i) => 
                    <MarkerWithInfo 
                        key={i} 
                        position={{lat: bin.latitude, lng: bin.longitude}} 
                        label={
                            <div>
                                <p>Wheelie Bin ID: <span style={{ fontWeight: "bold"}}>{bin.deviceId}</span></p>
                                <p>Rubbish Level: <span style={{ fontWeight: "bold"}}>{bin.percentageFull}%</span></p>
                                <p>Plastic Waste Volume: <span style={{ fontWeight: "bold"}}>{bin.rubbishVolume}cm³</span></p>
                            </div>
                        }
                    />
                )
            }
        </GoogleMap>
    ) : <div>Map loading...</div>
}