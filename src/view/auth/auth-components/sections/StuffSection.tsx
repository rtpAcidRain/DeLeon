import React from 'react';
import Section from '../layouts/Section';
import { H3 } from '../UI/Heading';

import {
  poopMoon,
  poopMoonDown,
  poopCloud,
  sec1,
  sec2,
  sec3,
  third1,
  third2,
  third3,
  fourth1,
  fourth2,
  fourth3,
  five1,
  five2,
  five3,
} from '../../auth-assets/images/stuff__poops';

const StuffSection = React.memo(() => {
  return (
    <Section>
      <H3>Наша команда</H3>
      <div className="stuff">
        <div className="stuff__row">
          <div className="stuff__item item">
            <div className="stuff__avatar">
              <img
                className="avatar__poop"
                style={{ top: '10px', left: '0px' }}
                src={poopMoon}
                alt="avatar__poop"
              />

              <img
                className="avatar__poop"
                style={{ top: '110px', left: '0px' }}
                src={poopMoonDown}
                alt="avatar__poop"
              />

              <img
                className="avatar__poop"
                style={{ top: '23px', right: '18px' }}
                src={poopCloud}
                alt="avatar__poop"
              />
              <img
                className="avatar__image"
                src="https://s3-alpha-sig.figma.com/img/1d45/73a5/beaa0142b680dd1eb47dbaffa4d92b8e?Expires=1658102400&Signature=GPrVeR3~pYtPL-ClpOOvfmGvTfpD2A-k0n714JazPq0-lrbeCQmdRF67Y6QF-K5Kh--thGFl8udJ4hgdr7PguE2Ii0qksIBlUrepN5qQhrmmL3ejqqVlKJrey5dtx2~xdNEz8KM5wLa-oPOXfW841QM-8aGFcTnjpm0PPY3BMNHKD9ySZCyBUSk3W4judQcDyB8NnpU79UK9MrmnDYSOcb-CWBOUjnP4a~Nf6vZYexN1jVlZ0R2F5sp5S0VXkpKPhld3WCcm3uU494z-5mLLE9XpqjvohYuRZ~ja7G-E7hQ3u0SknR9ACaartmVsjqIU7dNYgxZp~Z1g2ghHHGqDqQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="avatar"
              />
            </div>
            <div className="item__text">
              <p className="stuff__name">Мэйсон</p>
              <p className="stuff__job">Аналитик</p>
            </div>
          </div>
          <div className="stuff__item item">
            <div className="stuff__avatar">
              <img
                className="avatar__poop"
                style={{ top: '3px', right: '6px' }}
                src={sec1}
                alt="avatar__poop"
              />

              <img
                className="avatar__poop"
                style={{ top: '85px', right: '0px' }}
                src={sec2}
                alt="avatar__poop"
              />

              <img
                className="avatar__poop"
                style={{ top: '58px', left: '0' }}
                src={sec3}
                alt="avatar__poop"
              />

              <img
                className="avatar__image"
                src="https://s3-alpha-sig.figma.com/img/2fcf/020b/714e09a377b3398f1ade878e8807672b?Expires=1658102400&Signature=hYb-mL4aeqPNmnaU6i8Y1Y566iwowNEoxeNrP6FMuGEP5NBx0SSJHI83OfnHovZ1GXe4g4zDctqO9SmdkVrxH~rdeTuaskwjVDvX9ZAW-fl~6sskSnFeDDQTebI2oOlIYsZQ41tKhj4k05Fj4BIRQ4~yyxlFfFy~bBPIbxG3LJOm-C1dH5knEJ4u~vpXVLn5w0B0Py7DO7IPq0oKeIu8n5Xe7B6BU~JWGNN2o5diWl-ZKz8KMQvZkdd2EdW1kObR85izko0DAIZUDFa4YIATL2xlBTtiXwUcqOf9vtP3r9XMBJPk1KJAlxIDgL0gNFVsd9J3eJf-vimTeu-aC0UW9A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="avatar"
              />
            </div>
            <div className="item__text">
              <p className="stuff__name">Александр</p>
              <p className="stuff__job">Менеджер</p>
            </div>
          </div>
          <div className="stuff__item item">
            <div className="stuff__avatar">
              <img
                className="avatar__poop"
                style={{ top: '14px', right: '9px' }}
                src={third2}
                alt="avatar__poop"
              />

              <img
                className="avatar__poop"
                style={{ top: '54px', left: '0px' }}
                src={third1}
                alt="avatar__poop"
              />

              <img
                className="avatar__poop"
                style={{ top: '137px', right: '9px' }}
                src={third3}
                alt="avatar__poop"
              />

              <img
                className="avatar__image"
                src="https://s3-alpha-sig.figma.com/img/1b92/c8fd/99c1529f2ee664591f48ecf57551f2b4?Expires=1658102400&Signature=I3Cb~~QdEKhD8~hS-~zTvyw4TfHPnNUgGP4n2luMCfxyHjJ1dk5BVmHIDMMoxrZNy6BsYMUl6EDdKfQDXiwkaVkoSuvQMPiYoI0tEI1KvW11vAyj4pyhrK-VblPX~z13K3Gvz7lUWvNJgodzj8rd9hEX8c4PtHTTg2~vl~7GbyZeuCKrBKtt3geGKgz8VQfJTRs9fjAIWtI3nvMXW6JcXSPiuqaB1EzUtd2CoKP8huXmWDydDqQryTSifdtxotmje6KTsyQFo6iGz1ySAeL7J1ZsAYSfAmNXYVSejG9pqF81AqHt6q8iGtO80cSsb2aGXHVSunnAsoZBqZcSHIMBkA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="avatar"
              />
            </div>
            <div className="item__text">
              <p className="stuff__name">Ричард</p>
              <p className="stuff__job">Финансист</p>
            </div>
          </div>
        </div>
        <div className="stuff__row">
          <div className="stuff__item item">
            <div className="stuff__avatar">
              <img
                className="avatar__poop"
                style={{ top: '9px', left: '0px' }}
                src={fourth1}
                alt="avatar__poop"
              />

              <img
                className="avatar__poop"
                style={{ top: '106px', left: '0px' }}
                src={fourth3}
                alt="avatar__poop"
              />

              <img
                className="avatar__poop"
                style={{ top: '23px', right: '0' }}
                src={fourth2}
                alt="avatar__poop"
              />

              <img
                style={{ transform: 'translate(-38%, -50%)' }}
                className="avatar__image"
                src="https://s3-alpha-sig.figma.com/img/d593/75b1/e7091668c85d8599bed617b54811c5f5?Expires=1658102400&Signature=UdMx3xngJpupPLhCVJvpgUopCX7y9PS3ZN3H6J5sfLpSvIua9hNySsEyTtL7oY0b5SHVCJf~2ZGWAFLCvkgLBq0BLJrIA8ykXG0SfrFiIttDSETOu4EEMcOSHjEmfVciPBmphowhOfIhEVdvRe9mQdyJT9Zfnx6GZudY2Iq2CMGy~iUDxCXNUHDm3nYgKkK9KuHTlue2zIKtFPDF8EaCDuZu1ZwcIdpa3KHBbXBUt9DZeqfqE5fJ0knYGcBgULoqEiVT4IkCf3dc4-Hl7sAzdzRLnMHc5huD59kVrixi8H3KRJQUG5Ba66h45qajBqhBGZTrAt4tuyGNTTZTDyVafQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="avatar"
              />
            </div>
            <div className="item__text">
              <p className="stuff__name">Дмитрий</p>
              <p className="stuff__job">Комьюнити менеджер</p>
            </div>
          </div>
          <div className="stuff__item item">
            <div className="stuff__avatar">
              <img
                className="avatar__poop"
                style={{ top: '29px', left: '9px' }}
                src={five1}
                alt="avatar__poop"
              />

              <img
                className="avatar__poop"
                style={{ top: '113px', left: '0px' }}
                src={five3}
                alt="avatar__poop"
              />

              <img
                className="avatar__poop"
                style={{ top: '53px', right: '0' }}
                src={five2}
                alt="avatar__poop"
              />

              <img
                className="avatar__image"
                src="https://s3-alpha-sig.figma.com/img/f8b3/0ce5/687043ed9529046d3081e283f6603e83?Expires=1658102400&Signature=V2XoOtXc5SM4L~Of3h~TcrAgLUgknymELbIj-HqKfb~jjkHh4ZUhHXyUe~KoRxGREsLO2pXBsQJuVcrDVrBlhFgUAKB382sFPRleCK74pCTMGIBokwBMeaxiCPICnGjh2sZZ4Jf5ljOIDxPQVLslQ~pnD0gbaBSAon912gc2oqcaB33CJTqHX2xgw5NXF-w-08rNx3DE49FJSkgcTiC8xh4ldhitWJP2BXYHtjieb7psWYXdhWxKXrZV9-TqyGCGFOooQK16TnM8BxYIzC9I5KhxY2ZRgYC8uSmocLT-F02stl3Q5QtW4ILJ1xSZ5Bakc3I~7ADHPEHnkcOJuJ40yQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="avatar"
              />
            </div>
            <div className="item__text">
              <p className="stuff__name">Владислав</p>
              <p className="stuff__job">Экономист</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});

export default StuffSection;
