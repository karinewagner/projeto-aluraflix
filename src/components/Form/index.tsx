import React from "react";
import * as S from "./styles";

type FormProps = {
	children: React.ReactNode;
};

const Form = ({ children }: FormProps) => {
	return <S.Form onSubmit={(e) => e.preventDefault()}>{children}</S.Form>;
};

export default Form;
