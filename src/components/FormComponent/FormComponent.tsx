import { useForm } from '../../hooks/useForm';

const FormComponent = () => {
  const {values,handleChange,resetForm} = useForm({
    nombre: '',
    email: '',
    edad: 0,
  })
  
  const handleSubmitForm = () => {
    console.log(values);
  }
  const handleResetForm = () => {
    resetForm()
  }
  const {email,nombre,edad} = values
  return (
    <div className="formContainer">
      <h2>Formulario</h2>
      <div className="inputsFormContainer">
        {/* inputs de tipo email, text y number */}
        <input
          name="email"
          value={email}
          onChange={handleChange}
          type="email"
          placeholder="Correo electrónico"
        />
        <input
          name="nombre"
          value={nombre}
          onChange={handleChange}
          type="text"
          placeholder="Nombre"
        />
        <input
          name="edad"
          value={edad}
          onChange={handleChange}
          type="number"
          placeholder="Edad"
        />
      </div>
      <div>
        {/* botón de enviar formulario */}
        <button type="submit" onClick={handleSubmitForm}>
          Enviar
        </button>
        {/* bOTON RESETEAR  */}
        <button onClick={handleResetForm}>Resetear</button>
      </div>
    </div>
  );
};

export default FormComponent;