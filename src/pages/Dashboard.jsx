import React, { useEffect, useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import Overview from "../components/Dashboard/Overview";
import axios from "../api/axios";
import { ToastContainer, toast } from "react-toastify";
const apiKey = import.meta.env.VITE_API_KEY;

const Dashboard = () => {
  const [locations, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [airData, setAirData] = useState({});
  const [airHourHistory, setAirHourHistory,] = useState([]);


  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser');
    }
  }, []);

 
  useEffect(() => {
    fetchAirData();
    fetchHourAirData();
    console.log(locations)
  }, [locations]);

  const fetchAirData = async () => {
    try {
      const response = await axios.post(`/currentConditions:lookup?key=${apiKey}`, {
        location: {
          latitude: 	locations.latitude,
          longitude: locations.longitude
        }, extraComputations: [
          "HEALTH_RECOMMENDATIONS",
          "DOMINANT_POLLUTANT_CONCENTRATION",
          "POLLUTANT_CONCENTRATION",
          "LOCAL_AQI",
          "POLLUTANT_ADDITIONAL_INFO"
        ],
      });
      console.log(response.data);
      setAirData(response.data)
    } catch (error) {
      console.log(error)
      setAirData({})
      toast.error(error.response.data.error.message);
    }
  }
  

  const fetchHourAirData = async () => {
    try {
      const response = await axios.post(`/history:lookup?key=${apiKey}`, {
        hours: 7,
        pageSize: 7,
        location: {
          latitude: 	locations.latitude,
          longitude: locations.longitude
        }
      });
      console.log(response.data);
      setAirHourHistory(response.data.hoursInfo);
    } catch (error) {
      console.log(error)
      // toast.error("Something went wrong!");
    }
  }

  return (
    <section className="flex">
      <div className="hidden md:flex">
        <Sidebar />
      </div>
      <div className="flex-1"> 
        <Overview data={airData} hourHistory={airHourHistory} setLocation={setLocation} location={locations}/>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Dashboard;
