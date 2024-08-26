import { theme } from "antd";
import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [collapsed, setCollapsed] = useState(true);
  const [mobileSideBarOpen, setMobileSideBarOpen] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <AuthContext.Provider
      value={{
        mobileSideBarOpen,
        setMobileSideBarOpen,
        collapsed,
        setCollapsed,
        colorBgContainer,
        borderRadiusLG,
        token,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
