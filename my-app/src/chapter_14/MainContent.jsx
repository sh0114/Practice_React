import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function MainContent(props){
    
    const {theme, toggleTheme} = useContext(ThemeContext);

    return(
        <div style={{
            width: "100vw",
            height: "100vh",
            padding: "1.5rem",
            backgroundColor: theme == "light" ? "white" : "black",
            color: theme == "light" ? "black" : "white",
        }}>
            <p>테마변경하기</p>
            <button onClick={toggleTheme}>테마변경버튼</button>

        </div>
    );

}

export default MainContent;