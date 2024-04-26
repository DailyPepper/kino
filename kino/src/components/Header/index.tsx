import React from "react";
import styled from "styled-components";

const Heading = styled.header`
    display: flex;
    justify-content: space-around;
    background-color: #c25353fa;
    height: 100px;
    width: 100vw; 
    position: absolute; 
    left: 0; 
    top: 0; 
`
const Header = () => {
    return ( 
        <>
        <Heading>
            <h1>
                Kino
            </h1>
        </Heading>
        </>
     );
}
 
export default Header;