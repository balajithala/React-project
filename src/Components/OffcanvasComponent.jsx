// OffcanvasComponent.js
import { Offcanvas, Button } from 'react-bootstrap';

const OffcanvasComponent = ({ show, handleClose, onCheckboxChange }) => {
  return (
    <>
      <Button variant="primary" onClick={() => handleClose(true)}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="form-check form-switch mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="isVisible"
              onChange={onCheckboxChange}
            />
            <label className="form-check-label" htmlFor="isVisible">
              Show Job Cards
            </label>
          </div>
          <div className="form-check form-switch mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="isFreelancerChecked"
              onChange={onCheckboxChange}
            />
            <label className="form-check-label" htmlFor="isFreelancerChecked">
              Show Freelance Jobs
            </label>
          </div>
          <div className="form-check form-switch mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="isParttimeChecked"
              onChange={onCheckboxChange}
            />
            <label className="form-check-label" htmlFor="isParttimeChecked">
              Show Part-time Jobs
            </label>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffcanvasComponent;
