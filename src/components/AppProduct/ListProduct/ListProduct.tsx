import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

interface ItemProduct {
  precio: number;
  imagen: string;
  nombre: string;
}
interface IPropsListProducts {
  arrItems: ItemProduct[]
}


const ListProduct: React.FC<IPropsListProducts> = ({ arrItems }) => {
  return (
    <div>
      <h2 className='text-center'>Lista de Productos</h2>
      <Row>
        {arrItems.map((item, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={item.imagen} alt={item.nombre} />
              <Card.Body>
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text>${item.precio}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};;


export default ListProduct