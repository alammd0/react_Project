import { useEffect, useState } from "react";
import Cards from "./comonents/Cards";
import Filter from "./comonents/Filter";
import Navbar from "./comonents/Navbar";
import { apiUrl, filterData } from "./data";
import Spinner from "./comonents/Spinner";

function App() {

  const [fetchData, setFetchData] = useState([]);
  const [spinner, setSpinner] = useState(false);


  const [categary, setCategary] = useState(filterData[0].title);


  async function fetchApi() {
    try {
      setSpinner(true);
      const apiData = await fetch(apiUrl);
      const data = await apiData.json();
      setFetchData(data.data);

      console.log(data.data);
    }
    catch (err) {
      console.log(err.message);
    }
    setSpinner(false)
  }

  useEffect(() => {
    fetchApi();
  }, [])

  return (
    <div className="wrapper">

      <div>
        <Navbar></Navbar>
      </div>

      <div>
        <Filter 
        filterData={filterData}
          categary = {categary}
          setCategary = {setCategary}
        />
      </div>

      <div>
        {
          spinner ? (<Spinner />) : (<Cards fetchData={fetchData}  categary = {categary}/>)
        }

      </div>


    </div>
  );
}

export default App;
