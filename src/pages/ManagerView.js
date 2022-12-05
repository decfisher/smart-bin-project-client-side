import ManagementMap from "../components/ManagerMap";

function ManagerView() {
  const bins = [
    {id: "123", perc: 15, lat: 55.888166444006586, lng: -3.6280459571698036},
    {id: "456", perc: 27, lat: 55.88770314467719, lng: -3.6280244994989834},
    {id: "789", perc: 36, lat: 55.888587620415755, lng: -3.6276489902596305}
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