import styled from "styled-components";
export const Table = styled.table`
  color: ${(props) => props.theme.color};
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
  border-spacing: 2px;
  border-color: ${(props) => props.theme.color};
`;
export const Thead = styled.thead`
  display: header-table-group;
  vertical-align: middle;
  border: ${(props) => props.theme.border};
`;
export const Tbody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border: inherit;
`;
export const Tr = styled.tr`
display: table-row
vertical-align: inherit;
border:${(props) => props.theme.border};
`;
export const Td = styled.td`
  padding: 0.75rem;
  vertical-align: middle;
  border: ${(props) => props.theme.border};
`;
export const Th = styled.th`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  vertical-align: middle;
  text-align: inherit;
  border-top: ${(props) => props.theme.border};
  padding: 0.75rem;
`;
