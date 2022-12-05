import React from "react";
import { CartesianGrid, XAxis, YAxis, LineChart, Line, Tooltip } from 'recharts';
import UserMap from "../components/UserMap";
import InfoParentChild from "./InfoParentChild";
import { getReadableDateTime } from "../js/Helpers";
import "../App.css";

function DeviceStats({ deviceData, rubbishData }) {

    return (
        <div className="device-details">
            <div style={{ textAlign: "center", color: "#2A2B2A" }}>
                <h1>My Wheelie Bin 🚮</h1>
            </div>
            <div className="device-stats">
                <div className="user-details">
                    <InfoParentChild title={"Wheelie Bin ID"} text={deviceData.deviceId}/>
                    <InfoParentChild title={"Last Seen"} text={getReadableDateTime(deviceData.publishedAt)}/>
                    <InfoParentChild title={"Rubbish Level"} text={`${deviceData.percentageFull}%`}/>
                    <InfoParentChild title={"Plastic Waste Volume"} text={`${Math.round(deviceData.rubbishVolume)}cm³`}/>
                </div>
                <div className="charts">
                    <h3 style={{ textAlign: "center" }}>Avg. Plastic Waste Volume Per Day 🥤</h3>
                    <LineChart width={500} height={300} data={rubbishData}>
                        <XAxis dataKey="_id"/>
                        <Tooltip/>
                        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                        <Line type="monotone" dataKey="avgPlasticVolume" stroke="#2A2B2A" />
                    </LineChart>
                </div>
            </div>
            <div className="user-map">
                <UserMap latitude={deviceData.latitude} longitude={deviceData.longitude}/>
            </div>
        </div> 
    )
}

export default DeviceStats