import styled from "styled-components/macro";
import _FlashMessage from "../FlashMessage";

export const List = styled.ul`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const FlashMessage = styled(_FlashMessage)`
  background: yellow;
  border: solid 1px black;
`;
