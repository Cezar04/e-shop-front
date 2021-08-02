import React,{useRef} from 'react'

export default function Contact() {
    let form = useRef(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form_data = new FormData(form.current);
        let payload = {};
        form_data.forEach(function (value, key) {
            payload[key] = value;
        });
        //  console.log("payload", payload);
        // Place your API call here to submit your payload.
    };


    return (
        <div className="pb-36 sm:pb-0">
            <section className="bg-white {-- h-screen --} mb-96 sm:pb-0">
                <div className="mx-auto flex lg:justify-center h-full flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2 px-2 py-20 sm:py-40 sm:px-12 flex flex-col justify-center items-center  relative">
                         <div className="absolute  sm:pt-36">
                                <img className="sm:p-10" src="https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                        </div> 
                        <div className="flex relative z-30 flex-col justify-center px-4 md:pr-12">
                            <div className="sm:px-2 flex flex-col items-center justify-center">
                            <h3 className="text-6xl pt-36 leading-tight font-medium text-white text-center">4N!TURE</h3>
                            <h3 className="text-xl  leading-tight font-medium text-white text-center">Lifestile Furniture</h3>
                            </div>
                        </div>
                       
                    </div>
                    <form onSubmit={handleSubmit} ref={form} className="w-full  lg:w-1/2 flex justify-center bg-white dark:bg-gray-900">
                        <div className="w-full sm:w-4/6 md:w-3/6 lg:w-2/3 text-gray-800 dark:text-gray-100 flex flex-col justify-center px-2 sm:px-0 py-16">
                            <div className="mx-auto sm:px-6">
                                <h3 className="text-2xl sm:text-3xl md:text-2xl font-bold leading-tight">Call us</h3>
                                


                            </div>
                            <div className="text-center p-10 ">
                                <a className="bg-yellow-500 p-10 " href="tel:+"><i class="fas fa-phone text-2xl sm:text-4xl md:text-2xl font-bold leading-tight "></i></a>
                            </div>
                            <div className="text-center p-5">
                                <h3 className="text-2xl sm:text-3xl md:text-2xl font-bold leading-tight">or you can send us a message</h3>
                            </div>
                            <div className="mt-8 w-full px-2 sm:px-6">
                            <div className="flex flex-col mt-8">
                                    <label for="name" className="text-lg font-semibold leading-tight">
                                        Name
                                    </label>
                                    <input id="name" required aria-required="true" name="name" className="h-10 px-2 w-full rounded mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 border-gray-300 border shadow" type="email" />
                                </div>
                                <div className="flex flex-col mt-8">
                                    <label for="email" className="text-lg font-semibold leading-tight">
                                        Email
                                    </label>
                                    <input id="email" required aria-required="true" name="email" className="h-10 px-2 w-full rounded mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 border-gray-300 border shadow" type="email" />
                                </div>
                                <div className="flex flex-col mt-5">
                                    <label for="message" className="text-lg font-semibold fleading-tight">
                                        Message
                                    </label>
                                    <textarea id="password" required aria-required="true" name="password" type="password" className="h-36 px-2 w-full rounded mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 border-gray-300 border shadow" />
                                </div>
                            </div>
                         
                            <div className="px-2 sm:px-6">
                                <button type="submit" className="focus:outline-none m font-medium w-full sm:w-auto bg-yellow-500 transition duration-150 ease-in-out hover:text-black rounded text-white px-8 py-3  mt-6">
                                    Send
                                </button>
                                
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}
