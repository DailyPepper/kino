import styled from "styled-components";

const Basement = styled.footer`
  background-color: #c25353fa;
  height: 100px;
  width: 100vw;
  left: 0;
  position: absolute;
`;

const Footer = () => {
  return (
      <Basement />
  );
};

export default Footer;
