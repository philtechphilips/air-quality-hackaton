import React from "react";
import map from "../../assets/map.png";
import index from "../../assets/index.png";
import chart from "../../assets/chart.png";
import toggle from "../../assets/toggle.png";

const Overview = () => {
  return (
    <div className="pl-[125px] pr-[100px] pt-[50px] pb-[15px]">
      <div className="flex justify-between w-full items-center">
        <div className="flex w-2/3 gap-20">
          {" "}
          <h2 className=" text-2xl font-medium text-[#000]">Overview</h2>
          <form className="flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
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
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                    stroke="#BDBCBC"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full py-3 ps-10 text-sm font-medium border border-[#F3F3F3] rounded-[20px] focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search a location..."
                required=""
              />
            </div>
          </form>
        </div>
        <div className="p-2 border rounded-full shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M2.52992 14.7696C2.31727 16.1636 3.268 17.1312 4.43205 17.6134C8.89481 19.4622 15.1052 19.4622 19.5679 17.6134C20.732 17.1312 21.6827 16.1636 21.4701 14.7696C21.3394 13.9129 20.6932 13.1995 20.2144 12.5029C19.5873 11.5793 19.525 10.5718 19.5249 9.5C19.5249 5.35786 16.1559 2 12 2C7.84413 2 4.47513 5.35786 4.47513 9.5C4.47503 10.5718 4.41272 11.5793 3.78561 12.5029C3.30684 13.1995 2.66061 13.9129 2.52992 14.7696Z"
              stroke="#141B34"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 19C8.45849 20.7252 10.0755 22 12 22C13.9245 22 15.5415 20.7252 16 19"
              stroke="#141B34"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className=" pt-14">
        <img src={map} alt="heat map" />
      </div>
      <div className="pt-5 flex gap-5 w-full">
        <div className="flex flex-col gap-5 w-1/2">
          <div className="border rounded-[20px] p-6 bg-[#F5F5F5]">
            <h4 className=" text-2xl font-medium text-[#000] pb-1">
              Air Quality Index
            </h4>
            <p className=" text-sm font-medium text-[#000]">Universal AQI</p>
            <div className="flex items-center gap-[14px] pt-[14px]">
              <div>
                <img src={index} alt="air-quality-index" />
              </div>
              <div>
                <h6 className=" text-2xl font-medium text-[#000] pb-1">
                  Excellent air quality
                </h6>
                <p className=" text-xs font-normal text-[rgba(0, 0, 0, 0.50)]">
                  Dominant pollutant: o3
                </p>
              </div>
            </div>
          </div>
          <div className="border rounded-[20px] p-6 bg-[#F5F5F5]">
            <div className="flex justify-between items-center">
              <h4 className="text-2xl font-medium text-[#000]">
                Hourly History
              </h4>
              <p className="text-sm font-medium text-[#000]">
                2023-11-23 17:00 UTC
              </p>
            </div>
            <div className="pt-[97px] pb-[58px]">
              <img src={chart} alt="chart" />
            </div>
            <div className="flex justify-end pb-[29px]">
              <img src={toggle} alt="next" />
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
                <img src={index} alt="air-quality-index" />
              </div>
              <div>
                <h6 className=" text-2xl font-medium text-[#000] pb-1">
                  Excellent air quality
                </h6>
                <p className=" text-xs font-normal text-[rgba(0, 0, 0, 0.50)]">
                  Dominant pollutant: o3
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[14px]">
              <div className="border rounded-[10px] bg-[#D9D9D9] flex justify-between items-center py-[13px] px-[10px] mt-3 ">
                <div>
                  <h6 className=" text-xl font-medium text-[#000]">CO</h6>
                  <p className=" text-xs font-normal text-[rgba(0, 0, 0, 0.69)]">
                    Carbon monoxide
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <p className=" text-base font-medium text-[#8E8E8E]">
                    375.74 ppb
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_187_194)">
                      <path
                        d="M13.75 7.5C13.75 4.04822 10.9517 1.25 7.5 1.25C4.04822 1.25 1.25 4.04822 1.25 7.5C1.25 10.9517 4.04822 13.75 7.5 13.75C10.9517 13.75 13.75 10.9517 13.75 7.5Z"
                        stroke="#8E8E8E"
                        stroke-width="1.5"
                        stroke-linejoin="round"
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
              <div className="border rounded-[10px] bg-[#D9D9D9] flex justify-between items-center py-[13px] px-[10px] ">
                <div>
                  <h6 className=" text-xl font-medium text-[#000]">
                    NO <sup>2</sup>
                  </h6>
                  <p className=" text-xs font-normal text-[rgba(0, 0, 0, 0.69)]">
                    Nitrogen oxide
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <p className=" text-base font-medium text-[#8E8E8E]">
                    19.65 ppb
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_187_194)">
                      <path
                        d="M13.75 7.5C13.75 4.04822 10.9517 1.25 7.5 1.25C4.04822 1.25 1.25 4.04822 1.25 7.5C1.25 10.9517 4.04822 13.75 7.5 13.75C10.9517 13.75 13.75 10.9517 13.75 7.5Z"
                        stroke="#8E8E8E"
                        stroke-width="1.5"
                        stroke-linejoin="round"
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
              <div className="border rounded-[10px] bg-[#D9D9D9] flex justify-between items-center py-[13px] px-[10px] ">
                <div>
                  <h6 className=" text-xl font-medium text-[#000]">
                    O <sup>2</sup>
                  </h6>
                  <p className=" text-xs font-normal text-[rgba(0, 0, 0, 0.69)]">
                    Ozone
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <p className=" text-base font-medium text-[#8E8E8E]">
                    10.65 ppb
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_187_194)">
                      <path
                        d="M13.75 7.5C13.75 4.04822 10.9517 1.25 7.5 1.25C4.04822 1.25 1.25 4.04822 1.25 7.5C1.25 10.9517 4.04822 13.75 7.5 13.75C10.9517 13.75 13.75 10.9517 13.75 7.5Z"
                        stroke="#8E8E8E"
                        stroke-width="1.5"
                        stroke-linejoin="round"
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

              <div className="border rounded-[10px] bg-[#D9D9D9] flex justify-between items-center py-[13px] px-[10px] ">
                <div>
                  <h6 className=" text-xl font-medium text-[#000]">
                    NO <sup>2</sup>
                  </h6>
                  <p className=" text-xs font-normal text-[rgba(0, 0, 0, 0.69)]">
                    Sulfur oxide
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <p className=" text-base font-medium text-[#8E8E8E]">
                    0.6 ppb
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_187_194)">
                      <path
                        d="M13.75 7.5C13.75 4.04822 10.9517 1.25 7.5 1.25C4.04822 1.25 1.25 4.04822 1.25 7.5C1.25 10.9517 4.04822 13.75 7.5 13.75C10.9517 13.75 13.75 10.9517 13.75 7.5Z"
                        stroke="#8E8E8E"
                        stroke-width="1.5"
                        stroke-linejoin="round"
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
              <div className="border rounded-[10px] bg-[#D9D9D9] flex justify-between items-center py-[13px] px-[10px] ">
                <div>
                  <h6 className=" text-xl font-medium text-[#000]">
                    PM <sup>10</sup>
                  </h6>
                  <p className=" text-xs font-normal text-[rgba(0, 0, 0, 0.69)]">
                    Inhalable particulate matter
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <p className=" text-base font-medium text-[#8E8E8E]">
                    39.77µg/m
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_187_194)">
                      <path
                        d="M13.75 7.5C13.75 4.04822 10.9517 1.25 7.5 1.25C4.04822 1.25 1.25 4.04822 1.25 7.5C1.25 10.9517 4.04822 13.75 7.5 13.75C10.9517 13.75 13.75 10.9517 13.75 7.5Z"
                        stroke="#8E8E8E"
                        stroke-width="1.5"
                        stroke-linejoin="round"
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
              <div className="border rounded-[10px] bg-[#D9D9D9] flex justify-between items-center py-[13px] px-[10px]">
                <div>
                  <h6 className=" text-xl font-medium text-[#000]">CO</h6>
                  <p className=" text-xs font-normal text-[rgba(0, 0, 0, 0.69)]">
                    Carbon monoxide
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <p className=" text-base font-medium text-[#8E8E8E]">
                    375.74 ppb
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_187_194)">
                      <path
                        d="M13.75 7.5C13.75 4.04822 10.9517 1.25 7.5 1.25C4.04822 1.25 1.25 4.04822 1.25 7.5C1.25 10.9517 4.04822 13.75 7.5 13.75C10.9517 13.75 13.75 10.9517 13.75 7.5Z"
                        stroke="#8E8E8E"
                        stroke-width="1.5"
                        stroke-linejoin="round"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
