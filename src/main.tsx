import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app.tsx";
import CategoriesProvider from "./contexts/Categories/index.tsx";
import VideosProvider from "./contexts/Videos/index.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<BrowserRouter>
		<CategoriesProvider>
			<VideosProvider>
				<App />
			</VideosProvider>
		</CategoriesProvider>
	</BrowserRouter>
);
