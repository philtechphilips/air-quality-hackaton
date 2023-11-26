import React, { useState } from "react";
import { IgrRadialGauge } from 'igniteui-react-gauges';
import { IgrRadialGaugeRange } from 'igniteui-react-gauges';
import { IgrRadialGaugeModule } from 'igniteui-react-gauges';
import ReactApexChart from "react-apexcharts";
import axios from "axios";
import Map from "./Map";

IgrRadialGaugeModule.register();

const Overview = ({ data, hourHistory, setLocation, location }) => {
  const [searchData, setSearchData] = useState("");
  const [long, setLong] = useState("");
  const [lat, setLat] = useState("")
  console.log(location)

  function camelCaseToWords(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1 $2').toUpperCase();
  }

  console.log(hourHistory)


  const options = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: 'AQI Trends by Date and Time',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5
      },
    },
    xaxis: {
      type: 'datetime',
      categories: hourHistory.map((dataPoint) => dataPoint.dateTime),
    },
  };

  const series = [
    {
      name: 'AQI',
      data: hourHistory.map((dataPoint) => dataPoint.indexes[0].aqi),
    }
  ];

  const searchLocaton = async(e) => {
    e.preventDefault();
   try{
       const response = await axios.get(`https://api.geoapify.com/v1/geocode/search?text=${searchData}=&apiKey=815ef87723864d50a2ab9d3c87fd01af`);
       console.log(response.data.features[0].properties.lon);
       console.log(response.data.features[0].properties.lat);
       setLocation({
        latitude: response.data.features[0].properties.lat,
        longitude: response.data.features[0].properties.lon,
      })
      setSearchData("");
      setLat(response.data.features[0].properties.lat);
      setLong(response.data.features[0].properties.lon)
   }catch(error){
    console.log(error);
   }

  }

  return (
    <div className="md:pl-[125px] px-5 md:pr-[100px] pt-[50px] pb-[15px]">
      <div className="flex justify-between w-full items-center">
        <div className="flex w-2/3 gap-20">
          {" "}
          <h2 className=" text-2xl font-medium text-[#000]">Overview</h2>
          <form className="flex-1" onSubmit={searchLocaton}>
            <div className="relative">
              <button type="submit" className="absolute inset-y-0 start-0 flex items-center ps-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17.5 17.5L22 22"
                    stroke="#BDBCBC"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                    stroke="#BDBCBC"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <input
                type="search"
                id="default-search"
                className="block w-full py-3 ps-10 text-sm font-medium border border-[#F3F3F3] rounded-[20px] focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search state and country..."
                required=""
                value={searchData}
                onChange={(e) => setSearchData(e.target.value)}
              />
            </div>
          </form>
        </div>
      </div>
      <div className=" pt-14">
        <Map location={location} />
      </div>
      {Object.keys(data).length > 0 ? (
        <div className="pt-5 flex gap-5 w-full">
          <div className="flex flex-col gap-5 w-1/2">
            <div className="border rounded-[20px] p-6 bg-[#F5F5F5]">
              <h4 className=" text-2xl font-medium text-[#000] pb-1">
                Air Quality Index
              </h4>
              <p className=" text-sm font-medium text-[#000]">{data && data.indexes[0] && data.indexes[0].displayName}</p>
              <div className="flex flex-col items-center gap-[0px] pt-[14px]">
                <div>
                  <IgrRadialGauge
                    height="350px"
                    width="350px"
                    minimumValue={0} value={data && data.indexes[0] && data.indexes[0].aqi}
                    maximumValue={400} interval={50}
                    rangeBrushes="#00E400, #FFFF00, #FF8106, #FF0000, #904198, #7E0023"
                    rangeOutlines="#00E400, #FFFF00, #FF8106, #FF0000, #904198, #7E0023"  >
                    <IgrRadialGaugeRange name="range1"
                      startValue={0} endValue={50}
                      innerStartExtent={0.50} innerEndExtent={0.50}
                      outerStartExtent={0.57} outerEndExtent={0.57} />
                    <IgrRadialGaugeRange name="range2"
                      startValue={50} endValue={100}
                      innerStartExtent={0.50} innerEndExtent={0.50}
                      outerStartExtent={0.57} outerEndExtent={0.57} />
                    <IgrRadialGaugeRange name="range3"
                      startValue={100} endValue={150}
                      innerStartExtent={0.50} innerEndExtent={0.50}
                      outerStartExtent={0.57} outerEndExtent={0.57} />
                    <IgrRadialGaugeRange name="range4"
                      startValue={150} endValue={200}
                      innerStartExtent={0.50} innerEndExtent={0.50}
                      outerStartExtent={0.57} outerEndExtent={0.57} />
                    <IgrRadialGaugeRange name="range5"
                      startValue={200} endValue={300}
                      innerStartExtent={0.50} innerEndExtent={0.50}
                      outerStartExtent={0.57} outerEndExtent={0.57} />
                    <IgrRadialGaugeRange name="range6"
                      startValue={300} endValue={400}
                      innerStartExtent={0.50} innerEndExtent={0.50}
                      outerStartExtent={0.57} outerEndExtent={0.57} />
                  </IgrRadialGauge>

                </div>
                <div>
                  <h6 className=" text-2xl font-medium text-[#000] pb-1">
                    {data && data.indexes[0] && data.indexes[0].category}
                  </h6>
                  <p className=" text-xs font-normal text-[rgba(0, 0, 0, 0.50)]">
                    Dominant pollutant: {data && data.indexes[0] && data.indexes[0].dominantPollutant}
                  </p>
                </div>
              </div>
            </div>
            <div className="border rounded-[20px] p-6 bg-[#F5F5F5]">
              <div className="flex justify-between items-center">
                <h4 className="text-xl font-bold text-[#000]">
                  Hourly History
                </h4>
                <p className="text-sm font-medium text-[#000]">
                  {new Date().toLocaleString()}
                </p>
              </div>
              <div className="pt-[97px] pb-[58px]">
                <ReactApexChart options={options} series={series} type="line" height={350} />
              </div>
            </div>
          </div>
          <div className="border rounded-[20px] p-6 bg-[#F5F5F5] w-1/2">
            {" "}
            <div className="">
              <h4 className=" text-2xl font-medium text-[#000] pb-1">
                Air Quality Index
              </h4>
              <p className=" text-sm font-medium text-[#000]">Universal AQI</p>
              <div className="flex items-center gap-[14px] pt-[14px]">
                <div>
                  <h1 className="text-4xl font-black">{data && data.indexes[0].aqi}</h1>
                </div>
                <div>
                  <h6 className=" text-2xl font-medium text-[#000] pb-1">
                    {data && data.indexes[0].category}
                  </h6>
                  <p className=" text-xs font-normal text-[rgba(0, 0, 0, 0.50)]">
                    Dominant pollutant: {data && data.indexes[0].dominantPollutant}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[14px]">
                {data && data.pollutants.map((item, index) => (
                  <div key={index} className="border rounded-[10px] bg-[#D9D9D9] flex justify-between items-center py-[13px] px-[10px] mt-3 ">
                    <div>
                      <h6 className=" text-xl font-medium text-[#000]">{item.displayName}</h6>
                      <p className=" text-xs font-normal text-[rgba(0, 0, 0, 0.69)]">
                        {item.fullName}
                      </p>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className=" text-base font-medium text-[#8E8E8E]">
                        {item.concentration.value} ppb
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_187_194)">
                          <path
                            d="M13.75 7.5C13.75 4.04822 10.9517 1.25 7.5 1.25C4.04822 1.25 1.25 4.04822 1.25 7.5C1.25 10.9517 4.04822 13.75 7.5 13.75C10.9517 13.75 13.75 10.9517 13.75 7.5Z"
                            stroke="#8E8E8E"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.5 6.25H7.96875V5.78125H7.5V6.25ZM7.03125 6.25V10.625H7.96875V6.25H7.03125ZM6.25 6.71875H7.5V5.78125H6.25V6.71875ZM7.03125 4.0625V5H7.96875V4.0625H7.03125Z"
                            fill="#8E8E8E"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_187_194">
                            <rect width="15" height="15" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                ))}

                <h1 className="text-xl font-semibold">Health Recommendations</h1>

                {data.healthRecommendations && Object.keys(data.healthRecommendations).map((key, index) => (
                  <div key={index} className="border rounded-[10px] bg-[#D9D9D9] flex justify-between items-center py-[13px] px-[10px] mt-3">
                    <div>
                      <h6 className="text-sm font-bold text-[#000]">{camelCaseToWords(key)}</h6>
                      <p className="text-xs font-normal text-[rgba(0, 0, 0, 0.69)]">
                        {data.healthRecommendations[key]}
                      </p>
                    </div>
                  </div>
                ))}


              </div>
            </div>
          </div>
        </div>
      ) : (
         <div className="pt-5 flex gap-5 w-full">
          <div className="flex flex-col gap-5 w-1/2">
            <div className="border rounded-[20px] p-6 bg-[#F5F5F5]">
              <h4 className=" text-2xl font-medium text-[#000] pb-1">
                Air Quality Index
              </h4>
              <p className=" text-sm font-medium text-[#000]">N/A</p>
              <div className="flex flex-col items-center gap-[0px] pt-[14px]">
                <div>
                  <IgrRadialGauge
                    height="350px"
                    width="350px"
                    minimumValue={0} value={0}
                    maximumValue={400} interval={50}
                    rangeBrushes="#00E400, #FFFF00, #FF8106, #FF0000, #904198, #7E0023"
                    rangeOutlines="#00E400, #FFFF00, #FF8106, #FF0000, #904198, #7E0023"  >
                    <IgrRadialGaugeRange name="range1"
                      startValue={0} endValue={50}
                      innerStartExtent={0.50} innerEndExtent={0.50}
                      outerStartExtent={0.57} outerEndExtent={0.57} />
                    <IgrRadialGaugeRange name="range2"
                      startValue={50} endValue={100}
                      innerStartExtent={0.50} innerEndExtent={0.50}
                      outerStartExtent={0.57} outerEndExtent={0.57} />
                    <IgrRadialGaugeRange name="range3"
                      startValue={100} endValue={150}
                      innerStartExtent={0.50} innerEndExtent={0.50}
                      outerStartExtent={0.57} outerEndExtent={0.57} />
                    <IgrRadialGaugeRange name="range4"
                      startValue={150} endValue={200}
                      innerStartExtent={0.50} innerEndExtent={0.50}
                      outerStartExtent={0.57} outerEndExtent={0.57} />
                    <IgrRadialGaugeRange name="range5"
                      startValue={200} endValue={300}
                      innerStartExtent={0.50} innerEndExtent={0.50}
                      outerStartExtent={0.57} outerEndExtent={0.57} />
                    <IgrRadialGaugeRange name="range6"
                      startValue={300} endValue={400}
                      innerStartExtent={0.50} innerEndExtent={0.50}
                      outerStartExtent={0.57} outerEndExtent={0.57} />
                  </IgrRadialGauge>

                </div>
                <div>
                  <h6 className=" text-2xl font-medium text-[#000] pb-1">
                    N/A
                  </h6>
                  <p className=" text-xs font-normal text-[rgba(0, 0, 0, 0.50)]">
                    Dominant pollutant: N/A
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Overview;
