import React, { useEffect, useState } from "react";
import Map from "./components/Map";
import spinner from "./images/spinner.gif";

function App() {
	const [eventData, setEventData] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchEvents = async () => {
			setLoading(true);
			const res = await fetch(
				"https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
			);
			const { events } = await res.json();
			setEventData(events);
			setLoading(false);
		};
		fetchEvents();
	}, []);

	return (
		<div>
			{!loading ? (
				<Map eventDataaaaaaa={eventData} />
			) : (
				<div className="loader">
					<h1>LOADING</h1>
					<img src={spinner} className="spinner" />
				</div>
			)}
		</div>
	);
}

export default App;
