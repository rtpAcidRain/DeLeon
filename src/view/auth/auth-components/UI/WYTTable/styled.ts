import styled from 'styled-components';
import { device } from '../../../../../styles/auth/breackpoints';

export const Table = styled.div<{ count: number }>`
  padding: 1.2em ${(props) => (props.count === 1 ? '1.25em' : '0.833333333333em')} 2.91666666667em
    ${(props) => (props.count === 1 ? '1.25em' : '1.83333333333em')};
  border-radius: 0.5em;
  width: 100% !important;
  max-width: ${(props) => (props.count === 1 ? '160px' : '185px')};
  background: ${(props) =>
    props.count === 1
      ? '#0c0c0c'
      : 'linear-gradient( 122.04deg, rgba(51, 190, 165, 0.3) 6.87%,rgba(51, 98, 190, 0.3) 83.74% )'};
  border: 1px solid ${(props) => (props.count === 1 ? '#00fff0' : '#0fffd4')};
  ${(props) => props.count === 2 && 'backdrop-filter: blur(4px);'}

  .statistic {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1.08333333333em;
    margin: ${(props) => (props.count === 1 ? '0.916666666667em' : '1.25em')} 0
      ${(props) => (props.count === 1 ? '1.25em' : '0')};
    &__item {
      font-style: normal;
      font-weight: 400;
    }
    &__name {
      font-size: 1em;
      line-height: 120%;
      margin-bottom: 0.384615384615em;
      color: #7c7c7c;
    }
    &__value {
      font-size: 1.25em;
      line-height: 120%;
      color: #ffffff;
    }
  }

  ${(props) =>
    props.count === 2 &&
    ` 
  position: relative;
  transition: left 0.2s;
  bottom: 22px;
  left: 22px;
  @media (${device.mobileS}) {
    bottom: 46px;
    left: 56px;
  }
  @media (${device.mobileM}) {
    bottom: 56px;
    left: 95px;
  }
  @media (${device.mobileL}) {
    left: 148px;
  }
 `}

  @media (${device.mobileS}) {
    max-width: ${(props) => (props.count === 1 ? '246px' : '260px')};
  }
  @media (${device.mobileM}) {
    font-size: 12px;
    max-width: ${(props) => (props.count === 1 ? '302px' : '278px')};
  }
`;

export const Header = styled.div`
  position: relative;
  ::after {
    content: '';
    position: absolute;
    background: rgba(0, 255, 240, 0.3);
    border-radius: 98px;
    height: 1px;
    bottom: -1px;
    left: 0;
    right: 0;
  }
`;

export const Heading = styled.div<{ count: number }>`
  display: flex;
  align-items: center;
  padding-bottom: ${(props) => (props.count === 1 ? '0.916666666667em' : '0.5em')};
  .heading__icon {
    margin-right: ${(props) => (props.count === 1 ? '0.708333333333em' : '0.416666666667em')};
  }
`;
