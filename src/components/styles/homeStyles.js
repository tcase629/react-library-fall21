import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const HomeHeader = styled.h1`
  color: #59F65F;
  font-size: ${props => props.large ? "40px" : "12px"};
  background: #EB609D;
`

export const HomePara = styled.p`
  color: red;
  font-size: 14px;
`

export const MainBtn = styled(Button)`
  color: #59F65F !important;
`