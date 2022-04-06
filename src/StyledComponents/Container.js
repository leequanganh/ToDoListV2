import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 15px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  border: ${(props) => props.theme.border};
`;
export const ContainerFluid = styled.div`
  padding: 15px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  border: ${(props) => props.theme.border};
`;
