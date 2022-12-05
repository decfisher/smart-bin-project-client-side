import { useState, useEffect } from "react";
import axios from "axios";
import { DEVICE_ID, SERVER_URL } from "../js/env";
import ManagementMap from "../components/ManagerMap";

function ManagerView() {
  const deviceId = DEVICE_ID;
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
  });

  // Mocked data for demonstration purposes
  const bins = [
    {
      deviceId: latestBinData[0].deviceId, 
      publishedAt: latestBinData[0].publishedAt, 
      percentageFull: latestBinData[0].percentageFull, // Generate random percentage value 
      rubbishVolume: latestBinData[0].rubbishVolume, // Generate random rubbish volume value  
      latitude: latestBinData[0].latitude, 
      longitude: latestBinData[0].longitude
    },
    {
      deviceId: "b57d8nnskk43xse", 
      publishedAt: new Date(), 
      percentageFull: 57,
      rubbishVolume: 345, 
      latitude: parseFloat(latestBinData[0].latitude - 0.000300), 
      longitude: parseFloat(latestBinData[0].longitude - 0.000167)
    },
    {
      deviceId: "dfbh8448dn233b2", 
      publishedAt: new Date(), 
      percentageFull: 26, 
      rubbishVolume: 167,  
      latitude: parseFloat(latestBinData[0].latitude + 0.000500), 
      longitude: parseFloat(latestBinData[0].longitude + 0.000250) 
    },
    {
      deviceId: "g23r6kl4sjsdfj9", 
      publishedAt: new Date(), 
      percentageFull: 78, 
      rubbishVolume: 676,  
      latitude: parseFloat(latestBinData[0].latitude - 0.000456), 
      longitude: parseFloat(latestBinData[0].longitude + 0.000345) 
    },
    {
      deviceId: "y34ndnfksfj445q", 
      publishedAt: new Date(), 
      percentageFull: 45, 
      rubbishVolume: 456,  
      latitude: parseFloat(latestBinData[0].latitude + 0.000670), 
      longitude: parseFloat(latestBinData[0].longitude - 0.000700) 
    }
  ];

  return (
    <div className="device-details">
      <div className="user-map">
        <ManagementMap style={{ width: "100%", height: "100%"}} bins={bins}/>
      </div>
    </div>
  );
}

export default ManagerView;