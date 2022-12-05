import React, { useEffect, useState } from 'react';
import { DEVICE_ID, SERVER_URL } from '../js/env';
import axios from 'axios';
import DeviceStats from '../components/DeviceStats';
import "../App.css";

function UserView() {
  const [latestBinData, setLatestData] = useState([{}]);
  const [latestRubbishData, setRubbishData] = useState([{}]);

  const getLatestEntry = async () => {
    try {
      const res = await axios.get(`${SERVER_URL}/latest/${DEVICE_ID}`);
      await setLatestData(res.data);
    } catch (err) {
      console.error("Error: " + err);
    }
  }

  const getRubbishData = async () => {
    try {
      const res = await axios.get(`${SERVER_URL}/avg-volume/${DEVICE_ID}`);
      await setRubbishData(res.data);
    } catch (err) {
      console.error("Error: " + err);
    }
  }

  useEffect(() => {
    getLatestEntry()
    getRubbishData()
  }, []);

  return (
    <div className="app-container">
      {latestBinData.length === 1 
      ? <DeviceStats deviceData={latestBinData[0]} rubbishData={latestRubbishData}/>
      : <div style={{ width: "100%", height: "100%", textAlign: "center"}}>No device data available</div>}
    </div>
  )
}

export default UserView;
