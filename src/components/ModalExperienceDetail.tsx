import { FC } from "react";
import Modal from "react-bootstrap/Modal";
import { IExperience } from "../data";
import { Row, Col, Accordion } from "react-bootstrap";

interface Props {
  show: boolean,
  itemView?: IExperience | null,
  onClose: () => void
}

const ModalExperienceDetail: FC<Props> = ({ itemView, ...props }) => {
  return (
    <Modal show={props.show} onHide={props.onClose} size="xl">
      <Modal.Header closeButton>
        <Modal.Title>
          {itemView?.projectName}
        </Modal.Title>

      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col sm={3}>
            <p>Company:</p>
          </Col>
          <Col sm={9}><p className="mb-0 text-dark">{itemView?.company}</p></Col>
        </Row>
        <Row>
          <Col sm={3}>
            <p>Timeline:</p>
          </Col>
          <Col sm={9}><p className="mb-0 text-primary">{itemView?.time}</p></Col>
        </Row>
        <Row>
          <Col sm={3}>
            <p>Tools & Technologies:</p>
          </Col>
          <Col sm={9}><p className="mb-0 text-success">{itemView?.technicals}</p></Col>
        </Row>
        <Col sm={3}>
          <p>Responsibility:</p>
        </Col>
        <Accordion
          defaultActiveKey={['0', '1']} alwaysOpen
        >
          {
            (itemView?.frontendRp?.length || 0) > 0 &&
            <Accordion.Item eventKey="0">
              <Accordion.Header>Frontend Developer</Accordion.Header>
              <Accordion.Body>
                <ul className="list-group list-group-flush">
                  {
                    itemView?.frontendRp?.map(it => (
                      <li className="list-group-item">
                        <div className="d-flex gap-2 align-items-center">
                          <i className="fas fa-code "></i>{it}
                        </div>
                      </li>
                    ))
                  }
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          }
          {
            (itemView?.backendRp?.length || 0) > 0 &&
            <Accordion.Item eventKey="1">
              <Accordion.Header>Backend developer</Accordion.Header>
              <Accordion.Body>
                <ul className="list-group list-group-flush">
                  {
                    itemView?.backendRp?.map(it => (
                      <li className="list-group-item">
                        <div className="d-flex gap-2 align-items-center">
                          <i className="fas fa-code "></i>{it}
                        </div>
                      </li>
                    ))
                  }
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          }

        </Accordion>

      </Modal.Body>
      <Modal.Footer>
        <button onClick={props.onClose}>Close</button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalExperienceDetail