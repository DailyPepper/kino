import styled from "styled-components";
import {useState} from "react";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";


const SwitchThemeStyled = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 20px;
  background: none;
  border-style: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${sun});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: background-color 0.5s;
  &:hover {
    filter: grayscale(80%) sepia(20%);
  }
`;

const SwitchTheme = () => {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [backgroundImage, setBackgroundImage] = useState(sun);
  
    const handleClick = () => {
      const newTheme = theme === "light" ? "dark" : "light";
      const newBackgroundImage = newTheme === "light" ? sun : moon;
  
      document.documentElement.setAttribute("data-theme", newTheme);
      setTheme(newTheme);
      setBackgroundImage(newBackgroundImage);
    };
    return ( 
        <SwitchThemeStyled onClick={handleClick} style={{ backgroundImage: `url(${backgroundImage})` }}>
            {theme === "light"}
        </SwitchThemeStyled>
     );
}
 
export default SwitchTheme;