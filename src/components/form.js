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

    const dict = [{
      value: givenname,
      handle: handlename,
      message: "Nombre"
    }, {
      value: surname,
      handle: handlesurname,
      message: "Apellido"
    }, {
      value: rut,
      handle: handlerut,
      message: "Rut"
    }, {
      value: email,
      handle: handleemail,
      message: "Email"
    }];

    return(
    <div className="Form">
      { 
        dict.map((values) => {
          return (
          <div className="InputCont" key={`${values.message}`}>      
          <div key={`${values.value}`}>
            {`${values.message}: `}
          </div>
          <input key={`${values.rut}`}
            value={values.value}
            onChange={values.handle}
            placeholder={`Escribe tu ${values.message}`}
          />
          </div>
          );
        })
      }
      
      <button onClick={() => {submit(givenname, surname, rut, email)}} className="submit-button">
        Submit
      </button>
    </div>
    );
}

export default Form;