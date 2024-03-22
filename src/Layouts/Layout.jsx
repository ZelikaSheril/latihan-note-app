import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../modules/auth/Auth";

export default function Layout() {
    const { isLoggedin } = useAuth()
    const { doLogout } = useAuth()

    return (
        <>
            <div className="flex bg-blue-600 h-[55px] justify-around py-2 gap-2 text-white">
                <h1 className="flex items-center gap-5">VOTE</h1>
                {isLoggedin ? (
                    <span className="font=bold">Sudah Login</span>
                ) : (
                    <span className="font=bold">Belum Login</span>
                )}

                <nav className="flex gap-5 items-center">
                    {isLoggedin ? <>
                        <Link to={"/Note"}><p className="hover:text-amber-300">Note</p></Link>
                        <Link onClick={() => doLogout()}><span className="text-white font-sans hover:text-slate-300">Logout</span></Link>
                    </> : <>
                        <Link to={"/Registrasi"}><p className="hover:text-amber-300">Registrasi</p></Link>
                        <Link to={"/Login"}><p className="hover:text-amber-300">Logout</p></Link>
                    </>}
                </nav>
            </div>
            <Outlet />
        </>
    )
}