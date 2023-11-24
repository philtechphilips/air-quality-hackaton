import MapImage from "../../assets/Rectangle 2.png"

const Map = () => {
  return (
    <div className='map-section' >
      <p data-aos="zoom-in" data-aos-duration="2000" data-aos-once="true">Explore air quality globally with our dynamic world map. Instantly grasp real-time updates as color-coded regions vividly showcase air quality levels worldwide. Experience the world breathing in real-time, all at your fingertips.</p>
        <img data-aos="zoom-in" data-aos-duration="2000" data-aos-once="true" src={MapImage}></img>
    </div>
  )
}

export default Map
