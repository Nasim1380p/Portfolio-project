import Slidermain from "../Slider";

export default function Body() {
  return (
    <div className="w-full flex flex-wrap justify-center ">
      <div
        className="w-full md:w-[50%] mt-20 mb-20">
        <Slidermain />
      </div>
      <div className="w-full relative ">
        <div className="md:w-[380px] md:h-[290px] w-[230px] h-[200px] -top-32 -left-[35%] rotate-45 border-[#a4a3a356] border-[1px] md:-top-36 md:-left-[13%] absolute"></div>
        <div className="md:w-[380px] md:h-[290px] w-[230px] h-[200px] -top-96 -right-[43%] rotate-45 border-[#a4a3a356] border-[1px] md:-top-96 md:-right-[15%] md:rotate-45 absolute"></div>
      </div>
    </div>
  )
}
