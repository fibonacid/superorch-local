export function resetAppearance() {
  return (`
  &:focus,
  &:hover,
  &:active {
    outline:0px !important;
    -webkit-appearance:none;
    box-shadow: none !important;
  }
  `)
}
