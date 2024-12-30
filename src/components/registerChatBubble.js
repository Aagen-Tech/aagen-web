import Image from "next/image"

export default function RegisterChatBubble(props) {


    return (
        <>
            <div className={`flex justify-start items-start gap-2.5 w-full`}>
            {/* <img className="w-8 h-8 rounded-full" src="/assets/favicon.ico" alt="Aagen logo" /> */}
            <Image
                alt="Aagen logo"
                src="/assets/web-app-manifest-192x192.png"
                className="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px] md:w-[32px] md:h-[32px] lg:w-[40px] lg:h-[40px] border border-gray-700 rounded-full"
                width={40}
                height={40}
                sizes="(max-width: 640px) 18px,
                       (max-width: 768px) 24px,
                       (max-width: 1024px) 32px,
                       40px"
                priority
            />
            <div className={`flex flex-col w-full max-w-[320px] leading-1.5 p-4 bg-gray-200 rounded-e-xl rounded-bl-xl dark:bg-gray-700`}>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">Aagen Shopping Assistant</span>
                    {/* <span className="text-sm font-normal text-gray-500 dark:text-gray-400"></span> */}
                </div>
                <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">Please type in your name, email address, and password to create an account.</p>
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
            </div>
            </div>
            <div className={`flex justify-end items-start gap-2.5 w-full`}>

            <div className={`flex flex-col w-full max-w-[320px] leading-1.5 p-4 bg-gray-200 rounded-s-xl rounded-br-xl dark:bg-gray-700`}>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">You</span>
                    {/* <span className="text-sm font-normal text-gray-500 dark:text-gray-400"></span> */}
                </div>
                <label className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">Name: </label>
                <input type="text" className="border border-gray-300 rounded-md p-1 w-full focus:outline-none" maxLength={32}></input>
                <label className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">Email: </label>
                <input type="email" className="border border-gray-300 rounded-md p-1 w-full focus:outline-none"></input>
                <label className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">Password: </label>
                <input type="password" className="border border-gray-300 rounded-md p-1 w-full focus:outline-none" maxLength={64}></input>
                <label className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">Confirm Password: </label>
                <input type="password" className="border border-gray-300 rounded-md p-1 w-full focus:outline-none" maxLength={64}></input>
                <br />
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Typing...</span>
            </div>
            <Image
                src="/deer.png"
                alt="Aagen logo"
                className="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px] md:w-[32px] md:h-[32px] lg:w-[40px] lg:h-[40px] border border-gray-700 rounded-full"
                width={40}
                height={40}
                sizes="(max-width: 640px) 18px,
                       (max-width: 768px) 24px,
                       (max-width: 1024px) 32px,
                       40px"
                priority
            />
            {/* <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" data-dropdown-placement="bottom-start" className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600" type="button">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                    <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
                </svg>
            </button> */}
            {/* <div id="dropdownDots" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reply</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Forward</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Copy</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</a>
                    </li>
                </ul>
            </div> */}
            </div>

        </>
    )

}