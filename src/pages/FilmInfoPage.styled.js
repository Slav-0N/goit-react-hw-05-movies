import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const BackToBtn = styled.div`
  width: 170px;
  border-radius: 4px;
  background: var(--IRIS, #4d5ae5);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
  /* display: inline-flex; */
  padding: 16px 5px;
  /* align-items: flex-start; */
  /* gap: 10px; */
  color: white;
  margin: 10px 0;
`;

export const BtnTxt = styled(Link)`
  color: white;
  text-align: center;
`;
