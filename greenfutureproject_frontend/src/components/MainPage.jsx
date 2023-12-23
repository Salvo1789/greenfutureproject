import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/MainPageStyle.css";

import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import NewMaterialeModal from "./NewMaterialeModal";
import NewRaccoltaModal from "./NewRaccoltaModal";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMaterialeAction, getAllRaccolteAction, getAllMaterialiAction, deleteRaccoltaAction } from "../redux/actions";

const MainPage = () => {
  const raccolte = useSelector((state) => state.raccolte.content);
  const materiali = useSelector((state) => state.materiali.content);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRaccolteAction());
    dispatch(getAllMaterialiAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [materiali]);

  return (
    <Container className="main">
      <Row>
        <Col>
          <NewMaterialeModal />
        </Col>
        <Col>
          <NewRaccoltaModal />
        </Col>
      </Row>

      <Row>
        {raccolte &&
          raccolte.content.map((racc) => (
            <Col xs={4} style={{marginBlock: "1.2rem"}}>
              <Card>
                <Card.Body>
                  <Card.Title>{racc.nome}</Card.Title>
                  <Button
                    variant="danger"
                    onClick={() => {
                      dispatch(deleteRaccoltaAction(`${racc.id}`))
                    }}
                  >
                    Elimina
                  </Button>
                  <ListGroup>
                    {racc.listaMateriali &&
                      racc.listaMateriali.map((mat, i) => (
                        <ListGroup.Item key={i} style={{marginBlock: "1.2rem"}}>
                          <h6>{mat.nome}</h6>
                          <p>{mat.note}</p>
                          <Button
                            variant="danger"
                            onClick={() =>{
                              console.log(materiali);
                              materiali && materiali.content.map((mate) => (
                                mat.nome === mate.nome && (
                                  dispatch(deleteMaterialeAction(`${mate.id}`))
                                )
                              ))
                              
                            }
                            }
                          >
                            Elimina
                          </Button>
                        </ListGroup.Item>
                      ))}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default MainPage;
