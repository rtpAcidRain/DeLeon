import { isMobile } from "react-device-detect";
import styled from "styled-components";
import { device } from "../../../../styles/auth/breackpoints";

const H1 = styled.h1`
  background: linear-gradient(95.81deg, #21b3b3 22.61%, #3362be 80.36%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-style: italic;
  font-weight: 700;
  font-size: 4em;
  line-height: 1.21875em;
`;
const H2 = styled.h2`
  font-style: italic;
  font-weight: 700;
  font-size: 48px;
  line-height: 59px;
  background: linear-gradient(90deg, #399892 25%, #375fbe 80.58%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;
const H3 = styled.h3`
  font-style: italic;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.222222222222222em;
  letter-spacing: 0.07em;
  color: #ffffff;
  margin: 2.3em auto;
  text-align: center;

  @media (${device.tablet}) {
    font-size: 30px;
  }
  @media (${device.laptop}) {
    margin: 82px auto 0;
    font-size: 36px;
  }
`;
const H4 = styled.h4`
  font-style: italic;
  font-weight: 700;
  font-size: 1.5625em;
  line-height: 1.2em;
`;

const H5 = styled.h5`
  font-style: normal;
  font-weight: 500;
  font-size: 1.3em;
  line-height: 1.230769230769231em;
  text-align: center;
  color: #ffffff;
`;
const H6 = styled.h6`
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  line-height: 1.25em;
  color: #ffffff;
`;

export { H1, H2, H3, H4, H5, H6 };
