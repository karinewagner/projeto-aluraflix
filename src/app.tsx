import GlobalCSS from "./styles/globalcss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages";
import NewVideo from "./pages/NewVideo";
import NewCategory from "./pages/NewCategory";

const App = () => {
	return (
		<>
			<GlobalCSS />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/newcategory" element={<NewCategory />} />
				<Route path="/newvideo" element={<NewVideo />} />
			</Routes>
		</>
	);
};

export default App;