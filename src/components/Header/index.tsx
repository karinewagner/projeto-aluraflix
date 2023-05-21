import * as S from "./styles";
import logo from "../../assets/logo.svg";
import MainButton from "../MainButton";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<S.Header>
			<Link to={"/"} className="logo">
				<img src={logo} alt="Alura Flix logo" className="logo" />
			</Link>
			<Link to={"/newvideo"}>
				<MainButton text="Novo vídeo" />
			</Link>
		</S.Header>
	);
};

export default Header;
