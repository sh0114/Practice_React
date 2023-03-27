import React from "react";

const ThemeContext = React.createContext();
// 초기 기본값을 별도 생성하지 않음, 이후 provider에서 설정함

ThemeContext.displayName = "테마context";

export default ThemeContext;