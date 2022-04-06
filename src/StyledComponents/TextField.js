import styled from "styled-components";
export const Input = styled.input`
  border: ${(props) => props.theme.border};
  mmin-heigt: 35px;
  height: 35px;
  font-size: 17px;
  width: auto;
  display: initial;
`;
export const Lable = styled.span`
    color:props.theme.color: ${(props) => props.theme.color};
    width:auto;
`;
export const TextFiled = ({ lable, ...props }) => {
  return (
    <div>
      <Lable>{lable}</Lable>
      <Input {...props} />
    </div>
  );
};
