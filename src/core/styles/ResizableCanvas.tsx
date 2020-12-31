import { Global, css } from "@emotion/core";

const rsCanvas = css`
  @font-face {
    font-family: "MyriadPro";
    src: url("https://d27rt3a60hh1lx.cloudfront.net/fonts/Myriad_Pro_Light.otf");
  }

  @font-face {
    font-family: "Lomino";
    src: url("https://d27rt3a60hh1lx.cloudfront.net/fonts/LominoUI_A_Rg.ttf");
  }

  html {
    position: fixed;
    overflow: hidden;
  }

  body {
    margin: 0;
    width: 100%;
    height: 100%;
    user-select: none;
    overflow-y: auto;
    overflow-x: hidden;
    touch-action: pan-x pan-y;
    -webkit-overflow-scrolling: touch;
    font-family: "MyriadPro", sans-serif;
    font-size: 27px;
    @media screen and (max-width: 500px) {
      font-size: 24px;
    }
  }
`;

export default () => <Global styles={rsCanvas} />;
