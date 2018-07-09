import styled from 'styled-components';
import { FONT_COLOR } from '../../constants';

const ButtonLink = styled.button`
  color: palevioletred;
  font-size: 1em;
  border: none;
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  background: transparent;
  text-decoration: ${props => props.disabled ? 'none' : 'underline'};

  &:disabled {
    color: ${FONT_COLOR}};
  }
`;

export default ButtonLink;