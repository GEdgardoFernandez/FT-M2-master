import React from "react";
import { useDispatch } from "react-redux";
import { enviarForm } from "../../redux/actions/actions.js";

const ContactUs = () => {

  const [form, setForm] = React.useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });
  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(enviarForm(form));
    setForm({
      nombre: "",
      email: "",
      asunto: "",
      mensaje: "",
    })
  }
  return (
    <div>
      <form className="contactBg" onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre: </label>
        <input name="nombre" onChange={handleInput} />
        <label htmlFor="email">Email: </label>
        <input name="email" onChange={handleInput}/>
        <label htmlFor="asunto">Asunto: </label>
        <input name="asunto" onChange={handleInput} />
        <label htmlFor="mensaje">Mensaje: </label>
        <input name="mensaje" onChange={handleInput}/>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactUs;
