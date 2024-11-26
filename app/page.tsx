import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
<Navbar/>

<div className="flexflex-col sm: flex-col"> {/* Main container */}
  
  <div className="bg-red-700 w-full  h-32 flex  flex-col rounded-xl"></div>

  <div className="flex sm:flex-row flex-col">
  <div className="bg-green-600 min-h-[100px] flex-1 rounded-xl  shadow-2xl "></div>
  <div className="bg-orange-600 min-h-[100px] flex-1 rounded-xl shadow-lg  "></div>
</div>


</div>

  </>
  )}