import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

const ProtectedRoute = ({ user, children }) => {
  const [showModal, setShowModal] = useState(!user);

  const handleClose = () => setShowModal(false);

  if (!user) {
    return (
      <>
        {children} {/* Render the page content underneath the modal */}
        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Access Denied</Modal.Title>
          </Modal.Header>
          <Modal.Body>Please login or register first to access this page.</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => window.location.href = '/login'}>
              Login
            </Button>
            <Button variant="secondary" onClick={() => window.location.href = '/signup'}>
              Signup
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  return children; // Render the protected page if user is logged in
};

export default ProtectedRoute;