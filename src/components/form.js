import React from "react";

const Form = (props) => {
    const [givenname, setName] = React.useState(""); //Nuevo username
    const [surname, setSurname] = React.useState(""); //Nuevo username
    const [rut, setRut] = React.useState(""); //Nuevo username
    const [email, setEmail] = React.useState(""); //Nuevo username

    const handlename = (event) => {
        setName(event.target.value);
    };

    const handlesurname = (event) => {
        setSurname(event.target.value);
    };

    const handlerut = (event) => {
        setRut(event.target.value);
    };

    const handleemail = (event) => {
        setEmail(event.target.value);
    };

    const submit = (name, surname, rut, email) => {
        console.log('Hola ' + name + ' ' + surname)
        console.log('')
        console.log('Tu info no la usaremos, ni la guardamos, solo la mostramos para mostrar nuestras habilidades al programar')
        console.log('')
        console.log('Tu RUT es: ' + rut)
        console.log('Tu email es: ' + email)
        console.log('')
        console.log('Saludos! Que te vaya bien!')
      };

    return(
    <div className="Form">
      <textarea
        value={givenname}
        onChange={handlename}
        placeholder="Escribe tu nombre"
      />
      <textarea
        value={surname}
        onChange={handlesurname}
        placeholder="Escribe tu apellido"
      />
      <textarea
        value={rut}
        onChange={handlerut}
        placeholder="Escribe tu rut"
      />
      <textarea
        value={email}
        onChange={handleemail}
        placeholder="Escribe tu email"
      />
      <button onClick={() => {submit(givenname, surname, rut, email)}} className="submit-button">
        Submit
      </button>
    </div>
    );
}

export default Form;