import "./App.css";
import {useState, useEffect, React} from "react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Reservations from "./Components/Reservations/Reservations";
import OrderOnline from "./Components/OrderOnline/OrderOnline";
import {Routes, Route, useLocation} from "react-router-dom";
import {headerData, reservationData, orderOnline} from "./constants";
import DataContext from "./DataContext";
import ConfirmedBooking from "./Components/Reservations/ConfirmedBooking";

function App() {
	const location = useLocation();
	const [path, setPath] = useState(location.pathname);
	useEffect(() => {
		setPath(location.pathname);
	}, [location.pathname]);

	let data = {};
	if (path === "/" || path === "/Little-Lemon") {
		data = headerData;
	} else if (path === "/Reservations") {
		data = reservationData;
	} else if (path === "/OrderOnline") {
		data = orderOnline;
	}

	return (
		<>
			<Navbar />
			<DataContext.Provider value={data}>
				<Routes>
					<Route
						path='/Little-Lemon'
						element={
							<>
								<Header />
								<Main />
							</>
						}
					/>
					<Route
						path='/'
						element={
							<>
								<Header />
								<Main />
							</>
						}
					/>
					<Route
						path='/Reservations'
						element={
							<>
								<Header />
								<Reservations />
							</>
						}
					/>
					<Route
						path='/OrderOnline'
						element={
							<>
								<Header />
								<OrderOnline />
							</>
						}
					/>
					<Route
						path='/ConfirmedBooking'
						element={<ConfirmedBooking />}
					/>
				</Routes>
			</DataContext.Provider>
			<Footer />
		</>
	);
}

export default App;
