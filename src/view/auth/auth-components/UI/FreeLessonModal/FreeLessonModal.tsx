import { atom, useAtom } from "jotai";
import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";
import Modal from "../Modal/Modal";
import s from "./FreeLessonModal.module.scss";
import { device } from "../../../../../styles/auth/breackpoints";

const Title = styled.h1`
  width: 100%;
  line-height: 34px;
  color: #fff;
  text-align: center;
  margin-top: 70px;
  text-transform: uppercase;
  font-size: 22px;

  @media (${device.mobileM}) {
    font-size: 32px;
  }

  @media (${device.tablet}) {
    font-size: 54px;
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 70px 0;
  width: 100%;
  gap: 12px;
`;

const Button = styled.button`
  margin: 0 auto;
  max-width: 280px;
  width: 100%;
  color: #fff;
  font-size: 18px;
  padding: 14px 0;
  background: linear-gradient(#79dac7, #53d848);
  text-transform: uppercase;

  line-height: 34px;
  border-radius: 12px;
  margin-top: 70px;

  @media (${device.mobileM}) {
    font-size: 24px;
  }

  @media (${device.tablet}) {
    padding: 14px 64px;
  }
`;

export const isOpenFreeLessonModalAtom = atom(false);

const FreeLessonModal = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });
  const [isOpenModal, setIsOpenModal] = useAtom(isOpenFreeLessonModalAtom);

  const onClose = () => setIsOpenModal(false);

  const onSubmitForm = (event: FormEvent<HTMLFormElement>, php: string) => {
    event.preventDefault();

    var req = new XMLHttpRequest();
    req.open("POST", php, true);
    req.onload = function () {
      if (req.status === 200) {
        alert("Сообщение отправлено");
      } else {
        alert("Что-то пошло не так" + req.status);
      }
    };

    req.onerror = function () {
      alert("Ошибка отправки запроса");
    };

    req.send(JSON.stringify(form));
  };

  const onChangeForm = (event: ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case "email":
        return setForm((prev) => ({
          ...prev,
          email: event.target.value,
        }));
      case "name":
        return setForm((prev) => ({
          ...prev,
          name: event.target.value,
        }));
    }
  };

  return (
    <Modal
      title="Бесплатный урок"
      isOpen={isOpenModal}
      onClose={onClose}
      className={s.wrapper}
    >
      <Title>Бесплатный урок</Title>
      <Form onSubmit={(event) => onSubmitForm(event, "send.php")}>
        <input
          onChange={onChangeForm}
          name="name"
          className={s.inputName}
          type="text"
          placeholder="ИМЯ ФАМИЛИЯ"
        />
        <input
          onChange={onChangeForm}
          name="email"
          className={s.inputEmail}
          type="email"
          placeholder="МЭЙЛ"
        />
        <div className={s.wrapperCheckbox}>
          <input id="agree" className={s.inputCheckbox} type="checkbox" />
          <label htmlFor="agree" className={s.checkbox}>
            Согласен на передачу данных
          </label>
        </div>
        <Button>Отправить</Button>
      </Form>
    </Modal>
  );
};

export default FreeLessonModal;
