import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from '../../../hooks/useForm';

interface IPropsFormProduct {
  handleAddProduct: (product: { nombre: string; imagen: string; precio: number }) => void;
}

const FormProduct: React.FC<IPropsFormProduct> = ({ handleAddProduct }) => {
  const { handleChange, values, resetForm } = useForm({
    nombre: '',
    imagen: '',
    precio: 0,
  });

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault(); 
    handleAddProduct(values);
    resetForm();
  };

  return (
    <Form className='p-4 border rounded m-3'>
      <Form.Group className="mb-3" controlId="formNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingrese nombre del producto" name="nombre" value={values.nombre} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formNombre">
        <Form.Label>Imagen</Form.Label>
        <Form.Control type="text" placeholder="Ingrese imagen del producto" name="imagen" value={values.imagen} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formNombre">
        <Form.Label>Precio</Form.Label>
        <Form.Control type="number" placeholder="Ingrese el precio" name="precio" value={values.precio} onChange={handleChange}/>
      </Form.Group>
      <div className='d-flex justify-content-center mt-4'>
        <Button onClick={handleSubmitForm} variant='primary'>Enviar Producto</Button>
      </div>
    </Form>
  )
}

export default FormProduct