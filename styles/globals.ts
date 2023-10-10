import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Archivo-Black";
    src: url('/public/fonts/ArchivoBlack-Regular.ttf') format('ttf');
    font-weight: 400;
  }
  @font-face {
    font-family: "Apple Sandoll Gothic";
    src: url('/public/fonts/AppleSDGothicNeoT.ttf') format('ttf');
    font-weight: 100;
  }
  @font-face {
    font-family: "Apple Sandoll Gothic";
    src: url('/public/fonts/AppleSDGothicNeoUL.ttf') format('ttf');
    font-weight: 200;
  }
  @font-face {
    font-family: "Apple Sandoll Gothic";
    src: url('/public/fonts/AppleSDGothicNeoL.ttf') format('ttf');
    font-weight: 300;
  }
  @font-face {
    font-family: "Apple Sandoll Gothic";
    src: url('/public/fonts/AppleSDGothicNeoR.ttf') format('ttf');
    font-weight: 400;
  }
  @font-face {
    font-family: "Apple Sandoll Gothic";
    src: url('/public/fonts/AppleSDGothicNeoM.ttf') format('ttf');
    font-weight: 500;
  }
  @font-face {
    font-family: "Apple Sandoll Gothic";
    src: url('/public/fonts/AppleSDGothicNeoSB.ttf') format('ttf');
    font-weight: 600;
  }
  @font-face {
    font-family: "Apple Sandoll Gothic";
    src: url('/public/fonts/AppleSDGothicNeoB.ttf') format('ttf');
    font-weight: 700;
  }
  @font-face {
    font-family: "Apple Sandoll Gothic";
    src: url('/public/fonts/AppleSDGothicNeoEB.ttf') format('ttf');
    font-weight: 800;
  }
  @font-face {
    font-family: "Apple Sandoll Gothic";
    src: url('/public/fonts/AppleSDGothicNeoH.ttf') format('ttf');
    font-weight: 900;
  }
  html,
  body {
    padding: 0;
    margin: 0;
  }
  html{
    font-size: 62.5%; //10px
  }
  @media (min-width: 767px){
    html{
      font-size: 74.5%;
    }
  }
  @media (max-width: 320px){
    html{
      font-size: 54.125%;
    }
  }

  body{
    font-size: 1rem;
  }
  body a {
    color: inherit;
    text-decoration: none;
  }
  body em{
    font-style: normal;
  }
  body ul, body li{
    list-style: none;
  }
  //icon용
  body i{
    display: flex;
    align-items: center;
  }
  //이미지 렌더링 오류 수정
  body img{
    image-rendering: -webkit-optimize-contrast;
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
    backface-visibility: hidden;
  }
  body b{
    font-weight: bold;
  }
  body * {
    line-height: 1;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Apple Sandoll Gothic','sans-serif' !important;
  }
  body input,  body textarea { 
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
  }
  body input:focus {
    outline: none;
  }
  body button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }

  body .title,
  body .title *{
    font-family: 'Archivo Black','sans-serif' !important;
  }
`

export default GlobalStyles
