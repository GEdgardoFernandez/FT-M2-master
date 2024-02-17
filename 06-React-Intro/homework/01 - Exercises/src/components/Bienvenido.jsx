import React from "react";
import Botones from "../components/Botones";
const studentName = "Guillermo";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido(props) {
  // el código de tu componente acá
  return (
    <div> 
      <h1>Bienvenidos</h1>
      <h2>{studentName}</h2>
      <ul>
        {techSkills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <Botones alerts={alerts} />
    </div>
  );
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
