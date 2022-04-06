import styled from "styled-components";
export const Dropdown = styled.select`
 width:100%;
 height:50px;
 font-weight:bold;
 cursor:pointer;
 border-radius:0;
 background-color:${(props) => props.theme.backgroundColor};
 border:${(props) => props.theme.border};
 color:${(props) => props.theme.color};
 padding:10px;
 padding-right:38px;
 apperance:none;
 transition: color 0.3s ease , background-color 0.3s ease, border-bottom-color 0.3s ease
 &:hover{
    color: ${(props) => props.theme.hoverTextColor};
    background-color: ${(props) => props.theme.hoverbackgroundColor};
    border-bottom-color:#DCDCDC;

 }
`;
