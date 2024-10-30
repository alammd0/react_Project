import { Route, Routes } from "react-router";
import Cards from "./Components/Cards";

function App() {
  return (
    <div className="w-full h-full bg-gray-950">

      <div className="pt-4 text-slate-300  text-[2.25rem] font-bold w-fit  mx-auto ">
        <h2 className="px-4 py-2 border-2 border-dashed text-center rounded-lg shadow-zinc-700">Plan Your India Tour </h2>
      </div>

      <div>
        <Cards />
      </div>


    </div>
  );
}

export default App;
