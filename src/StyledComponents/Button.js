import styled from "styled-components";
export const Button = styled.button`
  apperance: none;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  border: ${(props) => props.theme.border};
  padding: 0, 25em 0.5em;
  transition: all 0.5s;
  font-size: 17px;
  &:hover {
    color: ${(props) => props.theme.hoverTextColor};
    background-color: ${(props) => props.theme.hoverbackgroundColor};
    border: ${(props) => props.theme.hoverBorder};
  }
  &:disabled {
    opacity: 0.5;
  }
`;
