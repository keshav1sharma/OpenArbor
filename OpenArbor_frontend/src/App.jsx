import React ,{useState , useEffect , } from "react";
import Routes from "./Routes";
import { AuthContext } from "./context/AuthContext";


function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  
  useEffect(() => {
    const login = JSON.parse(localStorage.getItem("login")) || false;
    const username = JSON.parse(localStorage.getItem("username")) || "";
    setIsLoggedIn(login);
    setUsername(username);
  }, []);


  return<>
  <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn, username, setUsername}}>
    <Routes />
  </AuthContext.Provider>
  </> ;
}

export default App;
