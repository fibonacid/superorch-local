import { css } from "styled-components";

export const resetInput = css`
  border: solid 1px black;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  outline: 0px !important;
  -webkit-appearance: none;
  &:focus,
  &:hover,
  &:active {
    background-image: none;
    background-color: transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    outline: 0px !important;
    -webkit-appearance: none;
  }
`;
