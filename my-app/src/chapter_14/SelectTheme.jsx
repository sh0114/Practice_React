import { useState, useCallback } from "react";
import ThemeContext from "./ThemeContext";
import MainContent from "./MainContent";

/** 테마 정하는 함수 */
function SelectTheme(props){

    const [theme, setTheme] = useState("light");

    const toggleTheme = useCallback(() => {
        if(theme == 'light'){
            setTheme("dark");
        }else if(theme=="dark"){
            setTheme("light");
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
         {/* MainContent가 하위 컴포넌트에 있어서 상위컴포넌트에서 제공해주는 context를 받아 먹을 수 있어요 */}
        <MainContent />
        </ThemeContext.Provider>
    );

}

export default SelectTheme;