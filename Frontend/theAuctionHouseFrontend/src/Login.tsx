

const Login = () =>{


    return(
        <>
        <div className="h-screen flex justify-center items-center
">
        <div className="bg-sky-50 flex flex-col p-24 shadow-xl ">
            <h2>Login</h2>
            <label htmlFor="">Username</label>
            <input type="text" id="username"  className=""/>
            <label htmlFor="" >Password</label>
            <input type="text" id="password"  className=""/>
        </div>
        </div>
        </>
    )
}

export default Login;