import React from 'react'
import './Contact.modules.css'

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate(inputs) {
  let errors = {};
  if (!inputs.name) {
    errors.name = "Se requiere un nombre";
  }
  if (!inputs.email) {
    errors.email = "Se requiere un email";
  } else if (!regexEmail.test(inputs.email)) {
    errors.email = "Debe ser un correo electrónico";
  }
  if (!inputs.message) {
    errors.message = "Se requiere un mensaje";
  }
  return errors;
}

export default function Contact() {
  const [inputs, setInputs] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = React.useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }));
    setErrors(validate({
      ...inputs,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validate(inputs);
    if (Object.keys(validationErrors).length !== 0) {
      setErrors(validationErrors);
      alert("Debe llenar todos los campos");
    } else {
      alert("Datos completos");
      alert(JSON.stringify(inputs));
      setInputs({
        name: '',
        email: '',
        message: ''
      });
    }
  };
  return <div>
    <form onSubmit={handleSubmit}>
      <label>Nombre:</label>
      <input type="text" 
      name='name' 
      placeholder='Escribe tu nombre...' 
      value={inputs.name}
      onChange={handleChange}
      className={errors.name && 'warning'}/>
      <p className={errors.name && 'danger'}>{errors.name}</p>
      <label>Correo Electrónico:</label>
      <input type="text" 
      name='email' 
      placeholder='Escribe tu email...' 
      value={inputs.email} 
      onChange={handleChange}
      className={errors.email && 'warning'}/>
      <p className={errors.email && 'danger'}>{errors.email}</p>
      <label>Mensaje:</label>
      <textarea type="text" 
      name="message" 
      placeholder='Escribe tu mensaje...' 
      value={inputs.message} 
      onChange={handleChange}
      className={errors.message && 'warning'}></textarea>
      <p className={errors.message && 'danger'}>{errors.message}</p>
      <button type="submit">Enviar</button>
    </form>
  </div>
}
