


export default function GenericChatBubble() {

    const { sender, msg, time, status } = props; 

    return (
        <>
            <div className={`flex justify-start items-start gap-2.5 w-full`}>
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
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">{sender.name}</span>
                    </div>
                    <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">msg</p>
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">status</span>
                </div>
            </div>
        </>
    )

}