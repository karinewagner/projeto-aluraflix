import { createGlobalStyle } from "styled-components";

const GlobalCSS = createGlobalStyle`
*{
  margin: 0;
  padding: 0;

  box-sizing: border-box;

  list-style: none;
  
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  
  scroll-behavior: smooth;

  border: none;
}

html, body {
  height: 100%;
  width: 100%;
  min-height: 100vh;
  
  background-color: #101010;
}

img {
  height: 100%;
}

button{
  cursor: pointer;
}

`;

export default GlobalCSS;
