import React from 'react'



function About() {
    return (
        <div className="bg-black">
         <div className="mx-auto container pt-20">
                <div className="flex flex-col justify-center items-center w-full">
                    <h1 className="text-base leading-6 text-3xl text-gray-100 font-semibold uppercase">About Us</h1>
                </div>
                <div className="lg:flex items-center justify-center mt-4 lg:mt-32">
                   
                    <div className="mt-4 lg:mt-0 py-12 px-8 lg:px-12  lg:w-2/5 lg:-ml-12  f-f-l">
                        <div className="mt-2 text-2xl leading-8 font-extrabold text-gray-100 dark:text-white sm:text-4xl sm:leading-9">Life Style Furniture</div>
                        <div className="flex items-center font-lato">
                            <div className="text-sm lg:text-lg font-normal text-gray-100 color-white mb-4">Lorem, ipsum dolor sit amet . </div>
                            <span className="dot-color text-gray-100 text-2xl px-2 mb-4">•</span>
                            <div className="text-sm lg:text-lg font-normal text-yellow-500  mb-4 uppercase">4N!ture</div>
                        </div>
                        <div className="mt-4 text-lg leading-6 text-gray-200 dark:text-gray-300">Our mission is to help people visualize, create & maintain beautiful homes. We bring to you inspiring visuals of cool homes, specific spaces, architectural marvels, and new design trends.</div>
                        
                    </div>
                    <div className="lg:w-1/2 h-1/3">
                        <img src="https://cdn.tuk.dev/assets/templates/Fabterior/Section7(1).png" alt='poza' className="w-full h-full" />
                    </div>
                </div>
            </div>

            <div className="max-w-screen-xl p-10 pb-36  bg-black mx-auto px-4 sm:px-6 lg:px-8 relative py-26 lg:mt-20">
                <div className="relative">
                    <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div className="lg:col-start-2 lg:max-w-2xl ml-auto">
                            <p className="text-base leading-6 text-yellow-500 font-semibold uppercase">
                                the goal
                            </p>
                            <h4 className="mt-2 text-2xl leading-8 font-extrabold text-gray-200 dark:text-white sm:text-4xl sm:leading-9">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, non.
                            </h4>
                            <p className="mt-4 text-lg leading-6 text-gray-200 dark:text-gray-300">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta nam enim amet nisi expedita aspernatur ipsum tenetur nemo placeat cupiditate, corrupti, facere maxime itaque pariatur repellat repudiandae officiis velit officia?
                            </p>
                            
                        </div>
                        <div className="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 sm:col-start-1">
                            <div className="relative space-y-4">
                                <div className="flex items-end justify-center lg:justify-start space-x-4">
                                    <img className=" w-32 sm:w-72" width="200" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/posters-in-cozy-apartment-interior-royalty-free-image-943910360-1534189931.jpg" alt="1"/>
                                    <img className="  w-40 sm:w-80" width="260" src="data:image/jpeg;base64,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" alt="2"/>
                                </div>
                                <div className="flex items-start justify-center lg:justify-start space-x-4 ">
                                    <img className="  w-24 sm:w-80" width="170" src="data:image/jpeg;base64,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" alt="3"/>
                                    <img className=" w-32 sm:w-72" width="200" src="https://www.gannett-cdn.com/presto/2020/01/17/USAT/e0c24668-b84e-41e8-b1f3-c99be905125a-wayfair.png?width=660&height=372&fit=crop&format=pjpg&auto=webp" alt="4"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="p-4 pb-36">
                <p className="text-center text-5xl font-bold text-gray-200">
                    Professional team
                </p>
                <p className="text-center mb-32 text-xl font-normal text-gray-200">
                    Meat the best team in wolrd
                </p>
                <div className="flex items-center space-y-24 ms:space-y-0 flex-col md:flex-row justify-evenly">
                    <div className="p-4 relative">
                        <div className="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
                            <div className="block relative">
                                <img alt="profil" src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg" className="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800"/>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow px-8 py-4 pt-24">
                            <div className="text-center">
                                <p className="text-2xl text-gray-800 dark:text-white">
                                    Patrick Sebastien
                                </p>
                                <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                                    Tamplar
                                </p>
                                <p className="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
                                    Patrick Sébastien, born November 14, 1953 in Brive-la-Gaillarde, is an imitator.
                                </p>
                            </div>
                            <div className="pt-8 flex border-t border-gray-200 w-40 mx-auto text-gray-500 items-center justify-between">
                                <div href="#">
                                    <svg width="30" height="30" fill="currentColor" className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z">
                                        </path>
                                    </svg>
                                </div>
                                <div href="#">
                                    <svg width="30" height="30" fill="currentColor" className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z">
                                        </path>
                                    </svg>
                                </div>
                                <div href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792">
                                        <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z">
                                        </path>
                                    </svg>
                                </div>
                                <div href="#">
                                    <svg width="30" height="30" fill="currentColor" className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z">
                                        </path>
                                    </svg>
                                </div>
                                <div href="#">
                                    <svg width="30" height="30" fill="currentColor" className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1551 1476q15-6 26-3t11 17.5-15 33.5q-13 16-44 43.5t-95.5 68-141 74-188 58-229.5 24.5q-119 0-238-31t-209-76.5-172.5-104-132.5-105-84-87.5q-8-9-10-16.5t1-12 8-7 11.5-2 11.5 4.5q192 117 300 166 389 176 799 90 190-40 391-135zm207-115q11 16 2.5 69.5t-28.5 102.5q-34 83-85 124-17 14-26 9t0-24q21-45 44.5-121.5t6.5-98.5q-5-7-15.5-11.5t-27-6-29.5-2.5-35 0-31.5 2-31 3-22.5 2q-6 1-13 1.5t-11 1-8.5 1-7 .5h-10l-3-.5-2-1.5-1.5-3q-6-16 47-40t103-30q46-7 108-1t76 24zm-394-443q0 31 13.5 64t32 58 37.5 46 33 32l13 11-227 224q-40-37-79-75.5t-58-58.5l-19-20q-11-11-25-33-38 59-97.5 102.5t-127.5 63.5-140 23-137.5-21-117.5-65.5-83-113-31-162.5q0-84 28-154t72-116.5 106.5-83 122.5-57 130-34.5 119.5-18.5 99.5-6.5v-127q0-65-21-97-34-53-121-53-6 0-16.5 1t-40.5 12-56 29.5-56 59.5-48 96l-294-27q0-60 22-119t67-113 108-95 151.5-65.5 190.5-24.5q100 0 181 25t129.5 61.5 81 83 45 86 12.5 73.5v589zm-672 21q0 86 70 133 66 44 139 22 84-25 114-123 14-45 14-101v-162q-59 2-111 12t-106.5 33.5-87 71-32.5 114.5z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 relative">
                        <div className="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
                            <div href="#" className="block relative">
                                <img alt="profil" src="https://assets.entrepreneur.com/content/3x2/2000/20190502194704-ent19-june-editorsnote.jpeg" className="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800"/>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow px-8 py-4 pt-24">
                            <div className="text-center">
                                <p className="text-2xl text-gray-800 dark:text-white">
                                    Charlie
                                </p>
                                <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                                    Sofer
                                </p>
                                <p className="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
                                    Charlie, born December 18, 1993 in Challans, is an imitator and pintor.
                                </p>
                            </div>
                            <div className="pt-8 flex border-t border-gray-200 w-40 mx-auto text-gray-500 items-center justify-between">
                                <div href="#">
                                    <svg width="30" height="30" fill="currentColor" className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z">
                                        </path>
                                    </svg>
                                </div>
                                <div href="#">
                                    <svg width="30" height="30" fill="currentColor" className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z">
                                        </path>
                                    </svg>
                                </div>
                                <div href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792">
                                        <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z">
                                        </path>
                                    </svg>
                                </div>
                                <div href="#">
                                    <svg width="30" height="30" fill="currentColor" className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z">
                                        </path>
                                    </svg>
                                </div>
                                <div href="#">
                                    <svg width="30" height="30" fill="currentColor" className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1551 1476q15-6 26-3t11 17.5-15 33.5q-13 16-44 43.5t-95.5 68-141 74-188 58-229.5 24.5q-119 0-238-31t-209-76.5-172.5-104-132.5-105-84-87.5q-8-9-10-16.5t1-12 8-7 11.5-2 11.5 4.5q192 117 300 166 389 176 799 90 190-40 391-135zm207-115q11 16 2.5 69.5t-28.5 102.5q-34 83-85 124-17 14-26 9t0-24q21-45 44.5-121.5t6.5-98.5q-5-7-15.5-11.5t-27-6-29.5-2.5-35 0-31.5 2-31 3-22.5 2q-6 1-13 1.5t-11 1-8.5 1-7 .5h-10l-3-.5-2-1.5-1.5-3q-6-16 47-40t103-30q46-7 108-1t76 24zm-394-443q0 31 13.5 64t32 58 37.5 46 33 32l13 11-227 224q-40-37-79-75.5t-58-58.5l-19-20q-11-11-25-33-38 59-97.5 102.5t-127.5 63.5-140 23-137.5-21-117.5-65.5-83-113-31-162.5q0-84 28-154t72-116.5 106.5-83 122.5-57 130-34.5 119.5-18.5 99.5-6.5v-127q0-65-21-97-34-53-121-53-6 0-16.5 1t-40.5 12-56 29.5-56 59.5-48 96l-294-27q0-60 22-119t67-113 108-95 151.5-65.5 190.5-24.5q100 0 181 25t129.5 61.5 81 83 45 86 12.5 73.5v589zm-672 21q0 86 70 133 66 44 139 22 84-25 114-123 14-45 14-101v-162q-59 2-111 12t-106.5 33.5-87 71-32.5 114.5z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 relative">
                        <div className="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
                            <div href="#" className="block relative">
                                <img alt="profil" src="https://avada.theme-fusion.com/wp-content/uploads/2019/07/person_sample_2.jpg" className="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800"/>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow px-8 py-4 pt-24">
                            <div className="text-center">
                                <p className="text-2xl text-gray-800 dark:text-white">
                                    Thierry Halliday
                                </p>
                                <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                                    Contabila
                                </p>
                                <p className="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
                                    Thierry Halliday, born November 4, 1993 in Saint hilaire de riez, is css specialist.
                                </p>
                            </div>
                            <div className="pt-8 flex border-t border-gray-200 w-40 mx-auto text-gray-500 items-center justify-between">
                                <div href="#">
                                    <svg width="30" height="30" fill="currentColor" className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z">
                                        </path>
                                    </svg>
                                </div>
                                <div href="#">
                                    <svg width="30" height="30" fill="currentColor" className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z">
                                        </path>
                                    </svg>
                                </div>
                                <div href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792">
                                        <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z">
                                        </path>
                                    </svg>
                                </div>
                                <div href="#">
                                    <svg width="30" height="30" fill="currentColor" className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z">
                                        </path>
                                    </svg>
                                </div>
                                <div href="#">
                                    <svg width="30" height="30" fill="currentColor" className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1551 1476q15-6 26-3t11 17.5-15 33.5q-13 16-44 43.5t-95.5 68-141 74-188 58-229.5 24.5q-119 0-238-31t-209-76.5-172.5-104-132.5-105-84-87.5q-8-9-10-16.5t1-12 8-7 11.5-2 11.5 4.5q192 117 300 166 389 176 799 90 190-40 391-135zm207-115q11 16 2.5 69.5t-28.5 102.5q-34 83-85 124-17 14-26 9t0-24q21-45 44.5-121.5t6.5-98.5q-5-7-15.5-11.5t-27-6-29.5-2.5-35 0-31.5 2-31 3-22.5 2q-6 1-13 1.5t-11 1-8.5 1-7 .5h-10l-3-.5-2-1.5-1.5-3q-6-16 47-40t103-30q46-7 108-1t76 24zm-394-443q0 31 13.5 64t32 58 37.5 46 33 32l13 11-227 224q-40-37-79-75.5t-58-58.5l-19-20q-11-11-25-33-38 59-97.5 102.5t-127.5 63.5-140 23-137.5-21-117.5-65.5-83-113-31-162.5q0-84 28-154t72-116.5 106.5-83 122.5-57 130-34.5 119.5-18.5 99.5-6.5v-127q0-65-21-97-34-53-121-53-6 0-16.5 1t-40.5 12-56 29.5-56 59.5-48 96l-294-27q0-60 22-119t67-113 108-95 151.5-65.5 190.5-24.5q100 0 181 25t129.5 61.5 81 83 45 86 12.5 73.5v589zm-672 21q0 86 70 133 66 44 139 22 84-25 114-123 14-45 14-101v-162q-59 2-111 12t-106.5 33.5-87 71-32.5 114.5z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default About
