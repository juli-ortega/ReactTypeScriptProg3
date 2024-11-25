import React, { useState } from 'react';
import Header from './Header/Header';
import FormProduct from './FormProduct/FormProduct';
import ListProduct from './ListProduct/ListProduct';

interface ItemProduct {
  precio: number;
  imagen: string;
  nombre: string;
}

const AppProduct = () => {
  const [products, setProducts] = useState<ItemProduct[]>([]); // Corregido el tipo a ItemProduct[]

  const handleAddProduct = (newItem: ItemProduct) => {
    setProducts((prev) => [...prev, newItem]); // Usamos prev correctamente
  };

  return (
    <>
      <Header />
      <h2 className='text-center'>FORMULARIO</h2>
      <FormProduct handleAddProduct={handleAddProduct} />
      <h2 className='text-center'>PRODUCTOS</h2>
      {/* si es mayor a cero muestra la lista sino no la muestra */}
      {products.length > 0 ? <ListProduct arrItems={products} /> : <p className='text-center'>No hay productos</p>}
    </>
  );
};

export default AppProduct;