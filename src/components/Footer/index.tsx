import * as S from "./styles";
import logo from "../../assets/logo.svg";

const Footer = () => {
	return (
		<S.Footer>
			<img src={logo} alt="Alura Flix logo" className="logo" />
			<p>
				Desenvolvido por Karine Wagner.
			</p>
		</S.Footer>
	);
};

export default Footer;
