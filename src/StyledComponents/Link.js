import styled from "styled-components";
export const Link = ({ className, children, ...restProps }) => {
  <a className={className} {...restProps}>
    {children}
  </a>;
};
export const LinkCustom = styled(Link)`
  backgroundcolor: ${(props) => props.theme.backgroundColor};
  font-weight: bold;
  color: #fff;
`;
