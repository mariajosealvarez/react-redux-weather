import React from 'react';
import { pathOr } from 'ramda';

import './error-modal.css';
import Button from './styled-components/button';

const ErrorModal = ({displayErrorModal, error, hideErrorModal}) => {
  return (
    <div>
    {
      displayErrorModal &&
        <div className="modalOverlay">
          <div className="modal">
            <p>{pathOr('Error', ['message'], error)}</p>
            <Button onClick={hideErrorModal}>OK</Button>
          </div>
        </div>
    }
    </div>
  )
};

export default ErrorModal;