import React from "react";
import UserMap from "../components/UserMap";
import InfoParentChild from "./InfoParentChild";
import { getReadableDateTime } from "../js/Helpers";
import "../App.css";

function DeviceStats({ deviceData }) {
    return (
        <div className="device-details">
            <div style={{ textAlign: "center", color: "#2A2B2A" }}>
                <h1>My Wheelie Bin 🚮</h1>
            </div>
            <div className="user-details">
                <InfoParentChild title={"Wheelie Bin ID"} text={deviceData.deviceId}/>
                <InfoParentChild title={"Last Seen"} text={getReadableDateTime(deviceData.publishedAt)}/>
                <InfoParentChild title={"Rubbish Level"} text={`${deviceData.percentageFull}%`}/>
                <InfoParentChild title={"Plastic Waste Volume"} text={`${Math.round(deviceData.rubbishVolume)}cm³`}/>
            </div>
            <div className="user-map">
                <UserMap latitude={deviceData.latitude} longitude={deviceData.longitude}/>
            </div>
        </div> 
    )
}

export default DeviceStats