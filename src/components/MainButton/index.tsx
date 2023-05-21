import * as S from "./styles";
import { ButtonProps } from "./types";

const MainButton = ({ text }: ButtonProps) => {
	return <S.Button>{text}</S.Button>;
};

export default MainButton;
