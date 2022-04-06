import styled from "styled-components";
export const Heading1 = styled.h1`
  font-size: 4em;
  font-weight: 300;
  line-height: 1.2;
  color: ${(props) => props.theme.color};
`;
export const Heading2 = styled(Heading1)`
  font-size: 3em;
`;
export const Heading3 = styled(Heading1)`
  font-size: 2em;
`;
export const Heading4 = styled(Heading1)`
  font-size: 1em;
`;
export const Heading5 = styled(Heading1)`
  font-size: 0.5em;
`;
