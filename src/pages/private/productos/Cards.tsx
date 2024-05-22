import { useContext, useState, useEffect } from "react";
import { Col, Card, CardImg, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ControladoresContexto } from "../Contexto";
import { motion } from "framer-motion";
const Cards = () => {
  const {
    productos,
    handleMostarEditor,
    handleMostarEliminar,
    categoria,
    seleccionarProductos,
  } = useContext(ControladoresContexto);

  const imagenURL = "http://localhost:3500/uploads/";
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.1 },
  };

  const [showDeleteButtons, setShowDeleteButtons] = useState({});
  const [showEditButtons, setShowEditButtons] = useState({});

  useEffect(() => {
    seleccionarProductos();
  }, [categoria]);

  useEffect(() => {
    seleccionarProductos();
  }, []);

  return (
    <>
      {productos?.map((item) => (
        <Col xs={12} md={4} lg={3} xl={3} className="mb-4 ">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <Card
              key={item._id}
              onMouseEnter={() => {
                setShowDeleteButtons({
                  ...showDeleteButtons,
                  [item._id]: true,
                });
                setShowEditButtons({
                  ...showEditButtons,
                  [item._id]: true,
                });
              }}
              onMouseLeave={() => {
                setShowDeleteButtons({
                  ...showDeleteButtons,
                  [item._id]: false,
                });
                setShowEditButtons({
                  ...showEditButtons,
                  [item._id]: false,
                });
              }}
            >
              <CardImg
                variant="top"
                src={`${imagenURL}${item.imagen}`}
                style={{
                  maxHeight: "18em",
                  height: "18em",
                  objectFit: "cover",
                }}
              ></CardImg>
              <Card.Body>
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text>{`Q. ${item.precio}`}</Card.Text>
                {showDeleteButtons[item._id] && (
                  <NavLink to={`producto/eliminar/${item._id}`}>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={handleMostarEliminar}
                    >
                      Eliminar
                    </Button>
                  </NavLink>
                )}
                {showEditButtons[item._id] && (
                  <NavLink to={`producto/editar/${item._id}`}>
                    <Button
                      variant="outline-info"
                      size="sm"
                      onClick={handleMostarEditor}
                    >
                      Editar
                    </Button>
                  </NavLink>
                )}
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      ))}
    </>
  );
};

export default Cards;