import React, { useEffect, useState } from 'react';
import { SERVER_URL } from '../js/env';
import axios from 'axios';
import DeviceStats from '../components/DeviceStats';
import "../App.css";

function UserView() {
  const deviceId = "e00fce68a91e3d67ac7f3b2b";
  const [latestBinData, setLatestData] = useState([{}]);

  const getLatestEntry = async () => {
    try {
      const res = await axios.get(`${SERVER_URL}/latest/${deviceId}`);
      await setLatestData(res.data);
    } catch (err) {
      console.error("Error: " + err);
    }
  }

  useEffect(() => {
    getLatestEntry()
  }, [])

  console.log(latestBinData)

  return (
    <div className="app-container">
      {latestBinData.length === 1 
      ? <DeviceStats deviceData={latestBinData[0]}/>
      : <div>No device data available</div>}
    </div>
  )
}

export default UserView;
