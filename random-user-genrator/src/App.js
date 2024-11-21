/** @format */

import { useEffect, useState } from "react";
import User from "./components/User";
import { api_Url } from "./data";
import Loader from "./components/Loader";

function App() {
	const [data, setData] = useState(null);

	const [loader, setLoader] = useState(true);

	async function callApi() {
		setLoader(true);
		try {
			let fetchApi = await fetch(api_Url);
			let data = await fetchApi.json();
			// console.log(data.results[0]);
			setData(data.results[0]);
		} catch (error) {
			console.log(error.message);
		}
		setLoader(false);
	}

	useEffect(() => {
		callApi();
	}, []);

	return (
		<div>
			{loader ? <Loader /> : <User data={data} clickHandlers={callApi} />}
		</div>
	);
}

export default App;
