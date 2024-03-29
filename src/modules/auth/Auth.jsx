import { createContext, useContext, useEffect, useState } from "react"
import { getToken, handleLogin, removeToken, setTokens } from "../config/Api"

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

useEffect(() => {
    const token = getToken()
    if (token != null) {
        setIsiLoggedin(true)
    }
}, [])
// function 
const doLogin = async (email, password) => {
    // memanggil api dengan data email dan password 
    console.log("akan melakukan login dengan", email, password)

    // memanggil api dengan axios 
    const apiResult = await handleLogin(email, password) 
    console.log(apiResult)
    console.log(apiResult.data.data.accessToken)


    // jika berhasil maka setIsLoggedin --> true
    // simpan token ke dalam localstorage
    setIsiLoggedin(true)
    setTokens(apiResult.data.data.accessToken)


    // jika gagal tampilkan peringatan 
    
    // setIsiLoggedin(true)
    // console.log("test kepanggil")

}

const doLogout = () => {
    setIsiLoggedin(false)
    removeToken()
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