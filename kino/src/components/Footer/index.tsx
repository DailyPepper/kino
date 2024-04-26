import styled from "styled-components";

const Basement = styled.footer`
  background-color: #c25353fa;
  height: 100px;
  width: 100vw;
  left: 0;
  bottom: 0; 
`;

const Footer = () => {
  return (
    <>
      <Basement />
    </>
  );
};

export default Footer;
