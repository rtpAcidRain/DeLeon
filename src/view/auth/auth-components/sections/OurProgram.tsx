import React, { FC, ReactNode } from "react";
import Section from "../layouts/Section";
import { H3 } from "../UI/Heading";

import {
  Wallet,
  Nft,
  Safety,
  Operation,
  Mining,
} from "../../auth-assets/images/willKnow";

import styled from "styled-components";
import { device, size } from "../../../../styles/auth/breackpoints";
import { motion } from "framer-motion";
import Stand from "./WillKnow/Stand";
import { LevelColorType } from "../Tarif/styles";
import MediaQuery from "react-responsive";

const Program = styled.div`
  position: relative;
  font-size: 12px;
  margin: 40px auto 0 auto;
  width: 100%;

  @media (${device.mobileL}) {
    width: 100%;
    max-width: 400px;
  }

  @media (${device.tablet}) {
    max-width: 746px;
  }
  @media (${device.laptop}) {
    font-size: 17px;
    max-width: 678px;
    margin: auto;
  }
  @media (${device.laptopL}) {
    font-size: 17px;
    max-width: 1095px;
    margin-top: 140px;
  }
`;

const ProgramItemStyle = styled.div<{ colors: LevelColorType }>`
  font-size: 0.8em;
  padding: 3em 0.5em 2.1em 2.7em;
  background: ${(props) => props.colors.circlebg};
  border: ${(props) => `2px solid ${props.colors.circlebg}`};
  margin-bottom: 1.2em;
  position: absolute;
  width: 100%;
  left: 50%;
  top: 100%;
  transform: translateY(-35%) translateX(-50%);
  z-index: 2;
`;

const Composition = styled.div`
  .stand {
    &:nth-child(1) {
      top: -20px;
      left: 28px;

      @media (${device.mobileS}) {
        top: -20px;
        left: 28px;
      }

      @media (${device.mobileL}) {
        top: -44px;
        left: 28px;
      }

      @media (${device.tablet}) {
        top: -80px;
        left: 65px;
      }

      @media (${device.laptop}) {
        top: -80px;
        left: 65px;
      }
      @media (${device.laptopL}) {
        top: -62px;
        left: 80px;
      }
    }
    &:nth-child(2) {
      @media (${device.mobileL}) {
        top: 40px;
        left: 70px;
      }

      @media (${device.tablet}) {
        top: 84px;
        left: 120px;
      }

      @media (${device.laptop}) {
        top: 62px;
        left: 120px;
      }
      @media (${device.laptopL}) {
        top: 178px;
        left: 200px;
      }
    }
    &:nth-child(3) {
      top: 24px;
      right: 143px;

      @media (${device.mobileS}) {
        top: 24px;
        right: 143px;
      }

      @media (${device.mobileM}) {
        top: -5px;
        right: 134px;
      }

      @media (${device.mobileL}) {
        top: 24px;
        right: 192px;
      }

      @media (${device.tablet}) {
        top: 24px;
        right: 338px;
      }

      @media (${device.laptop}) {
        top: 40px;
        right: 340px;
      }
      @media (${device.laptopL}) {
        top: 40px;
        left: 450px;
      }
    }
    &:nth-child(4) {
      top: 30px;
      left: 188px;

      @media (${device.mobileS}) {
        top: 30px;
        left: 206px;
      }

      @media (${device.mobileM}) {
        top: 0;
        left: 200px;
      }

      @media (${device.mobileL}) {
        top: 30px;
        left: 268px;
      }

      @media (${device.tablet}) {
        top: 60px;
        left: 492px;
      }

      @media (${device.laptop}) {
        top: 34px;
        left: 440px;
      }
      @media (${device.laptopL}) {
        top: 104px;
        left: 768px;
      }
    }
    &:nth-child(5) {
      left: 250px;
      top: 90px;

      @media (${device.mobileS}) {
        left: 250px;
        top: 90px;
      }

      @media (${device.mobileM}) {
        left: 230px;
        top: 58px;
      }

      @media (${device.mobileL}) {
        left: 328px;
        top: 104px;
      }

      @media (${device.tablet}) {
        left: 580px;
        top: 184px;
      }

      @media (${device.laptop}) {
        left: 540px;
        top: 160px;
      }
      @media (${device.laptopL}) {
        top: 340px;
        left: 910px;
      }
    }
  }
`;

const Text = styled.p`
  position: absolute;
  font-size: 1em;
  :nth-child(1) {
    top: -10px;
    left: 52px;
    width: 66px;
    text-align: center;
    display: none;

    @media (${device.tablet}) {
      display: block;
      left: 374px;
      top: 210px;
      width: 200px;
      text-align: end;
    }

    @media (${device.laptop}) {
      left: 374px;
      top: 188px;
      width: 170px;
      font-size: 14px;
    }
    @media (${device.laptopL}) {
      left: 640px;
      top: 360px;
      width: 270px;
      font-size: 18px;
    }
  }
}
:nth-child(2) {
  top: 4px;
  right: 0px;
  width: 84px;
  display: none;

  @media (${device.tablet}) {
    display: block;
    top: 10px;
    right: 180px;
    width: 170px;
    font-size: 14px;
  }

  @media (${device.laptop}) {
    top: 10px;
    right: 180px;
    width: 170px;
    font-size: 14px;
  }
  @media (${device.laptopL}) {
    top: 30px;
    right: 200px;
    width: 247px;
    font-size: 18px;
  }
}
:nth-child(3) {
  top: 123px;
  right: -9px;
  width: 71px;
  text-align: end;
  display: none;

  @media (${device.tablet}) {
    display: block;
    width: 170px;
    text-align: start;
    top: -40px;
    left: 174px;
    font-size: 14px;
  }

  @media (${device.laptop}) {
    width: 170px;
    text-align: start;
    top: -70px;
    left: 174px;
    font-size: 14px;
  }
  @media (${device.laptopL}) {
    width: 200px;
    text-align: start;
    top: -62px;
    left: 174px;
    font-size: 18px;
  }
}
:nth-child(4) {
  bottom: 13px;
  left: -2px;
  width: 89px;
  display: none;

  @media (${device.tablet}) {
    display: block;
    top: 50px;
    left: 580px;
    width: 170px;
    font-size: 14px;
  }

  @media (${device.laptop}) {
    top: 50px;
    left: 534px;
    width: 170px;
    font-size: 14px;
  }
  @media (${device.laptopL}) {
    top: 90px;
    left: 854px;
    width: 280px;
    font-size: 18px;
  }
}
:nth-child(5) {
  left: -9px;
  top: 7px;
  width: 86px;
  display: none;

  @media (${device.tablet}) {
    display: block;
    width: 170px;
    left: 0;
    top: 94px;
    font-size: 14px;
  }

  @media (${device.laptop}) {
    width: 170px;
    left: 0;
    top: 70px;
    font-size: 14px;
  }
  @media (${device.laptopL}) {
    width: 280px;
    left: 290px;
    top: 200px;
    font-size: 18px;
  }
}
`;

const ProgramItemContainer = styled.div`
  position: relative;
`;

const Name = styled.div`
  font-weight: 700;
  font-size: 1.4em;
  line-height: 1.214285714285714em;
  color: #ffffff;
  margin-bottom: 0.714285714286em;
`;

const Road = styled.svg`
  width: 100%;
  margin: auto;
`;

type Props = {
  title: string;
  children: ReactNode;
  color: LevelColorType;
};

export const ProgramItem: FC<Props> = ({ title, children, color }) => {
  return (
    <ProgramItemStyle colors={color}>
      <ProgramItemContainer className="program-item__container">
        <Name>{title}</Name>
        <ul className="our-program__list list">{children}</ul>
      </ProgramItemContainer>
    </ProgramItemStyle>
  );
};

const OurProgram: React.FC = React.memo(() => {
  return (
    <Section>
      <H3>Наша программа</H3>
      <Program
        as={motion.div}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <MediaQuery minWidth={size.mobileL}>
          <Road
            viewBox="0 0 868 420"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 12.9758V60.3069C58.52 79.9405 163.564 113.895 173.003 116.052C184.509 118.682 199.423 123.941 201.979 130.778C204.143 136.563 201.979 140.695 198.144 143.399C181.242 155.32 146.158 178.109 139.766 182.842C132.709 188.067 112.069 204.93 107.808 222.284C104.579 235.432 106.088 244.74 107.808 250.683C112.069 265.408 117.636 272.961 129.113 281.185C142.323 290.652 164.481 301.708 189.622 307.48C216.467 313.644 250.557 312.529 279.959 310.11C311.918 307.48 311.065 304.325 335.354 298.014C354.785 292.965 387.766 274.874 400.55 265.408L484.495 186.523C495.574 176.005 524.55 147.606 533.924 144.977C554.302 139.261 571.849 142.848 576.536 143.399C582.928 144.151 595.285 149.71 599.546 157.073C603.808 164.435 600.825 170.22 598.268 172.85C580.797 192.659 547.986 227.018 541.594 239.113C534.647 252.261 533.924 259.415 533.924 270.141C533.924 280.133 537.333 294.333 541.594 303.273C545.85 312.202 560.344 331.025 575.258 343.767C592.302 358.331 606.79 367.959 627.67 377.425L868 467.354V364.278C813.457 344.995 719.711 313.04 697.979 305.377C684.344 300.568 683.917 299.592 676.674 295.911C668.695 291.856 663.697 286.88 662.186 273.823C660.907 262.779 671.56 247.002 682.213 233.854C692.866 220.707 698.405 212.818 706.502 193.36C714.273 174.682 706.928 162.332 700.11 149.71C693.292 137.088 677.1 129.726 666.873 122.889C657.416 116.567 647.271 112.572 627.67 105.534C608.069 98.4969 584.632 98.1718 565.883 97.12C547.5 96.0887 529.237 97.6459 510.062 99.7495C494.442 101.463 467.876 107.638 455.519 115.527C421.572 140.594 353.251 190.204 346.859 195.989C341.028 201.267 310.213 223.862 299.986 228.595C288.907 233.723 275.271 234.38 262.062 234.38C248.852 234.38 243.739 231.794 235.643 225.966C229.251 221.364 227.275 209.089 233.086 203.352C239.478 197.041 273.102 174.616 279.959 168.643C287.203 162.332 297.492 151.861 300.838 144.977C304.674 137.088 305.526 131.304 302.969 121.837C300.529 112.802 293.168 106.06 284.646 99.7495C276.124 93.4387 268.596 91.5104 262.488 89.2315L0 12.9758Z"
              fill="url(#paint0_linear_394_471)"
            />
            <path
              d="M0 0.354248V47.6853C58.52 67.319 163.564 101.274 173.003 103.431C184.509 106.06 199.423 111.319 201.979 118.156C204.143 123.941 201.979 128.073 198.144 130.778C181.242 142.698 146.158 165.487 139.766 170.22C132.709 175.446 112.069 192.308 107.808 209.663C104.579 222.81 106.088 232.118 107.808 238.061C112.069 252.787 117.636 260.339 129.113 268.564C142.323 278.03 164.481 289.086 189.622 294.859C216.467 301.023 250.557 299.907 279.959 297.488C311.918 294.859 311.065 291.703 335.354 285.393C354.785 280.344 387.766 262.253 400.55 252.787L484.495 173.902C495.574 163.384 524.55 134.985 533.924 132.355C554.302 126.64 571.849 130.227 576.536 130.778C582.928 131.529 595.285 137.088 599.546 144.451C603.808 151.814 600.825 157.599 598.268 160.228C580.797 180.037 547.986 214.396 541.594 226.492C534.647 239.639 533.924 246.793 533.924 257.52C533.924 267.512 537.333 281.711 541.594 290.652C545.85 299.58 560.344 318.403 575.258 331.146C592.302 345.709 606.79 355.337 627.67 364.804L868 454.733V351.656C813.457 332.373 719.711 300.418 697.979 292.755C684.344 287.947 683.917 286.97 676.674 283.289C668.695 279.234 663.697 274.258 662.186 261.201C660.907 250.157 671.56 234.38 682.213 221.233C692.866 208.085 698.405 200.197 706.502 180.738C714.273 162.06 706.928 149.71 700.11 137.088C693.292 124.467 677.1 117.104 666.873 110.268C657.416 103.946 647.271 99.9503 627.67 92.9128C608.069 85.8753 584.632 85.5502 565.883 84.4984C547.5 83.4671 529.237 85.0243 510.062 87.1279C494.442 88.8414 467.876 95.0164 455.519 102.905C421.572 127.973 353.251 177.583 346.859 183.368C341.028 188.646 310.213 211.241 299.986 215.974C288.907 221.101 275.271 221.759 262.062 221.759C248.852 221.759 243.739 219.173 235.643 213.344C229.251 208.742 227.275 196.468 233.086 190.73C239.478 184.42 273.102 161.995 279.959 156.021C287.203 149.71 297.492 139.239 300.838 132.355C304.674 124.467 305.526 118.682 302.969 109.216C300.529 100.18 293.168 93.4387 284.646 87.1279C276.124 80.8171 268.596 78.8888 262.488 76.6099L0 0.354248Z"
              fill="#232323"
            />
            <defs>
              <linearGradient
                id="paint0_linear_394_471"
                x1="434"
                y1="12.9758"
                x2="434"
                y2="467.354"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF710A" />
                <stop offset="0.286458" stop-color="#B00C82" />
                <stop offset="0.505208" stop-color="#760C87" />
                <stop offset="0.796875" stop-color="#0C3483" />
                <stop offset="0.96875" stop-color="#01C2FF" />
              </linearGradient>
            </defs>
          </Road>
        </MediaQuery>

        <Composition>
          <Stand icons={Wallet} title="Кошельки" />
          <Stand icons={Operation} title="Криптовалютные операции" />
          <Stand icons={Safety} title="Безопасность" />
          <Stand icons={Mining} title="Майнинг" />
          <Stand icons={Nft} title="NFT" />
        </Composition>

        <div>
          <Text className="text text-1 text--big">
            Узнаете, что такое смарт-контракты и NFT
          </Text>
          <Text className="text text-2 text--big">
            Как обезопасить свои криптоактивы
          </Text>
          <Text className="text text-3 text--small">
            Какими кошельками и биржами лучше пользоваться
          </Text>
          <Text className="text text-4 text--small">
            Что такое криптовалюта, блокчейн и майнинг
          </Text>
          <Text className="text text-5 text--small">
            Как покупать, продавать и переводить криптовалюту
          </Text>
        </div>
      </Program>
    </Section>
  );
});

export default OurProgram;
