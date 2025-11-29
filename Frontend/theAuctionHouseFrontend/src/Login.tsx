

const Login = () =>{
        return(
                <>
                <div className="h-screen flex justify-center items-center px-6">
                    <div className="w-full max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Left decorative side */}
                        <div className="hidden md:flex flex-col gap-6 justify-center items-start p-10 rounded-2xl card-frost shadow-xl fast-fade">
                            <div className="logo text-2xl font-bold">AH</div>
                            <h2 className="text-3xl font-extrabold">Welcome to The Auction House</h2>
                            <p className="muted max-w-xs">Bid, sell and discover exclusive items in our secure and beautiful auction marketplace.</p>
                            <div className="mt-4">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm" style={{background: 'linear-gradient(90deg,#7c3aed,#06b6d4)'}}>Live Auctions</span>
                            </div>
                        </div>

                        {/* Login card */}
                        <div className="p-10 rounded-2xl card-frost shadow-2xl fast-fade">
                            <div className="mb-6 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="logo">AH</div>
                                    <div>
                                        <div className="card-title">Sign in</div>
                                        <div className="muted text-sm">Enter your account details</div>
                                    </div>
                                </div>
                                <div className="text-sm muted">Need an account? <a href="#" className="text-white font-semibold">Sign up</a></div>
                            </div>
              
                            <form className="flex flex-col gap-4">
                                <div>
                                    <label className="block text-sm muted mb-1">Username</label>
                                    <input type="text" id="username" placeholder="name@domain.com" className="w-full input-style" />
                                </div>
                                <div>
                                    <label className="block text-sm muted mb-1">Password</label>
                                    <input type="password" id="password" placeholder="Your password" className="w-full input-style" />
                                </div>
                                <div className="flex items-center justify-between text-sm muted">
                                    <label className="flex items-center gap-2"><input type="checkbox"/> Remember me</label>
                                    <a className="text-white font-medium" href="#">Forgot?</a>
                                </div>
                                <button type="submit" className="mt-2 py-3 rounded-lg btn-gradient font-semibold shadow-inner">Sign in</button>
                            </form>
              
                            <div className="mt-6 text-center muted">or sign in with</div>
                            <div className="mt-4 flex gap-3">
                                <button className="flex-1 py-2 rounded-md border border-white/10 input-style">Google</button>
                                <button className="flex-1 py-2 rounded-md border border-white/10 input-style">Github</button>
                            </div>
                        </div>
                    </div>
                </div>
                </>
        )
}

export default Login;