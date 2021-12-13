import { createContext, useState } from "react";

const initialToken = '';
const initialUser = {
    id: '',
    nombre: '',
    email: ''
};
const initialAuth = true;

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(initialAuth);
    const [user, setUser] = useState(initialUser);
    const [token, setToken] = useState(initialToken);

    const isAuth = () => {
        if(sessionStorage.getItem('token') && sessionStorage.getItem('id')) {
            setAuth(true);
            setToken(sessionStorage.getItem('token'));
        }else{
            setAuth(false);
            setToken(null);
            setUser(null);
        }
   };

   const signin = (id, token) => {
       sessionStorage.setItem('token', token);
       sessionStorage.setItem('id', id);
       isAuth();
   }

   const signout = () => {
       sessionStorage.clear();
       isAuth();
   }

    const data = {
        auth,
        user,
        token,
        isAuth,
        signin,
        signout
    };

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>

}

export {AuthProvider};
export default AuthContext;