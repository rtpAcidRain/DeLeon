import { FormEvent, useState } from "react";
import { atom, useAtom } from "jotai";
import Modal from "../Modal/Modal";
import s from "./FreeLessonModal.module.scss";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 54px;
  width: 100%;
  line-height: 34px;
  color: #fff;
  text-align: center;
  margin-top: 70px;
  text-transform: uppercase;
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
  padding: 14px 64px;
  color: #fff;
  background: linear-gradient(#79dac7, #53d848);
  text-transform: uppercase;
  font-size: 24px;
  line-height: 34px;
  border-radius: 12px;
  margin-top: 70px;
`;

export const isOpenFreeLessonModalAtom = atom(false);

const FreeLessonModal = () => {
  const [isOpenModal, setIsOpenModal] = useAtom(isOpenFreeLessonModalAtom);

  const onClose = () => setIsOpenModal(false);

  const onSubmitForm = (event: FormEvent<HTMLFormElement>, php: string) => {
    event.preventDefault();
    var req = new XMLHttpRequest();
    req.open("POST", php, true);
    req.onload = function () {
      if (req.status >= 200 && req.status < 400) {
        let json = JSON.parse(this.response); // internet explorer 11

        // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
        if (json.result == "success") {
          // Если сообщение отправлено
          alert("Сообщение отправлено");
        } else {
          // Если произошла ошибка
          alert("Ошибка. Сообщение не отправлено");
        }
        // Если не удалось связаться с php файлом
      } else {
        alert("Ошибка сервера. Номер: " + req.status);
      }
    };

    // Если не удалось отправить запрос. Стоит блок на хостинге
    req.onerror = function () {
      alert("Ошибка отправки запроса");
    };
    // @ts-ignore
    req.send(new FormData(event.target));
  };

  return (
    <Modal
      hideCloseIcon
      title="Бесплатный урок"
      isOpen={isOpenModal}
      onClose={onClose}
      className={s.wrapper}
    >
      <Title>Бесплатный урок</Title>
      <Form onSubmit={(event) => onSubmitForm(event, "send.php")}>
        <input
          name="name"
          className={s.inputName}
          type="text"
          placeholder="ИМЯ ФАМИЛИЯ"
        />
        <input
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
