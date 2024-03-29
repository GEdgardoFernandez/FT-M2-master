import React from 'react';
import { useSelector } from 'react-redux';

const InfoEnviada = () => {
   const { formulario } = useSelector((state) => {
      return state;
    });
    React.useEffect(() => {
      setInformacion(formulario)
    }, [formulario])
    const [informacion, setInformacion] = React.useState({
      nombre: '',
      email: '',
      asunto: '',
      mensaje: '',
    })
   return (
      <div>
         <h1>ESTA ES LA INFORMACIÓN QUE ENVIASTE...</h1>
         <h3>{informacion.nombre}</h3>
         <h3>{informacion.email}</h3>
         <h3>{informacion.asunto}</h3>
         <h3>{informacion.mensaje}</h3>
      </div>
   );
};

export default InfoEnviada;
