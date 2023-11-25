import { Link } from "react-router-dom"
import ErrorImage from "../assets/3793096.jpg"

const Error404 = () => {
  return (
    <div className="w-full flex gap-4 flex-col h-screen items-center justify-center">
      <img src={ErrorImage} className="w-1/3" />
      <h1 className="text-4xl font-bold">Page Not Found</h1>
      <Link to="/dashboard" className="cursor-pointer text-sm hover:bg-[#ff8200] bg-[#eb9e4b] text-white flex items-center font-bold px-4 py-2 rounded">
            Explore Air Quality Now{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="30"
              viewBox="0 0 31 30"
              fill="none"
            >
              <path
                d="M24.25 15H5.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.25 8.75L24.6161 14.1161C25.0328 14.5328 25.2411 14.7411 25.2411 15C25.2411 15.2589 25.0328 15.4672 24.6161 15.8839L19.25 21.25"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
    </div>
  )
}

export default Error404
