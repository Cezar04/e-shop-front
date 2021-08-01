import React from 'react'

function Login() {
    const handleFormSubmit = (e) => {
        e.preventDefault();

        let email = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;

        console.log(email, password);
    };



    return (
        <div className='h-screen flex bg-black'>
        <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
            <h1 className='sm:text-2xl font-medium text-primary mt-4 mb-12 text-center uppercase'>
                login
            </h1>

            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                        id='email'
                        placeholder='Your Email'
                        required
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                        id='password'
                        placeholder='Your Password'
                        required
                    />
                </div>

                <div className='flex justify-center items-center mt-6 hover:text-black '>
                    <button
                        className={`bg-yellow-500 py-2 px-4  text-white  `}
                    >
                        Login
                    </button>
                </div>
                <span className="flex justify-center pt-10 text-gray-400 ">Don't have an account?</span>
                <span className="flex justify-center  text-gray-400 hover:text-black ">Register First</span>
            </form>
        </div>
    </div>
    )
}

export default Login
