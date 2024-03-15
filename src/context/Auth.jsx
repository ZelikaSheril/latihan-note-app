import { createContext, useContext, useState } from "react"
import { handleLogin } from "../Api"

// nilai default 
const initAuthContextPropsState = {
    isLoggedin: false,
    doLogin: () => {},
    doLogout: () => {}
}

// buat context 
const AuthContext = createContext(initAuthContextPropsState)

// buat custom hook 
const useAuth = () => {
    return useContext(AuthContext)
}

// buat provider
const AuthProvider = ({children}) => {

// state 
const [isLoggedin, setIsiLoggedin] = useState(false)
// function 
const doLogin = async (email, password) => {
    // memanggil api dengan data email dan password 
    console.log("akan melakukan login dengan", email, password)

    // memanggil api dengan axios 
    const apiResult = await handleLogin(email, password) 
    console.log(apiResult)


    // jika berhasil maka setIsLoggedin --> true
    // siapkan token ke dalam localstorage

    // jika gagal tampilkan peringatan 
    setIsiLoggedin(true)
    console.log("test kepanggil")

}

const doLogout = () => {
    setIsiLoggedin(false)

}
// return provider 
return(
    <AuthContext.Provider value={{isLoggedin, doLogin, doLogout}}>
        {children}

    </AuthContext.Provider>
)
}

// export provider & hook 
export {AuthProvider, useAuth}