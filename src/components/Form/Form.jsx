import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { StyledForm } from './Form.style';
import { Title } from '../SkillsSection/Skills.styles';
import toast, { Toaster } from 'react-hot-toast';

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    try {
    emailjs
        .sendForm("service_66k5eag", "template_rz6tcm2", form.current, {
          publicKey: "ygMnV3uxEeknrHo7u",
      })
      .then(() => {
          toast("Messages sent successfully");
        });
    } catch (error) {
      toast("Error send message");
      console.log(error);
    }
  };

  return (
    <StyledForm id="contact">
      <Title>CONTACTS</Title>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name:</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type={'email'} name={'user_email'} />
        <label>Message</label>
        <textarea name={'message'} />
        <button type={'submit'} value={'Send'}>
          Send
        </button>
      </form>
      <Toaster />
    </StyledForm>
  );
};

export default Form;
