import RegisterChatBubble from "@/components/registerChatBubble";


export default function RegistrationPage() {
    

    return (
        <main className="items-center justify-items-center gap-8 row-start-2">
            <div className="items-center justify-items-center min-h-screen">
                <div className="flex flex-col gap-4 items-center h-full bg-gray-100 rounded-xl dark:bg-gray-800 p-8"> 
                    <RegisterChatBubble />
                    <div className="flex w-full flex-col gap-4 items-center">
                        <button className="text-white w-full rounded-xl px-4 py-2 bg-slate-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-400 duration-300">Create Account</button>
                        <p>Or</p>
                        <button className="text-white w-full rounded-xl px-4 py-2 bg-slate-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-400 duration-300">
                            <img src="/google-logo.png" alt="Google logo" className="w-6 h-6 inline-block" />
                            Continue with Google
                        </button>
                        <button className="text-white w-full rounded-xl px-4 py-2 bg-slate-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-400 duration-300">
                            <img src="/microsoft-logo.png" alt="Microsoft logo" className="w-5 h-5 pe-1 inline-block" />
                            Continue with Microsoft
                        </button>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Already have an account? <a href="/sign_in" className="underline">Sign In</a></p>
                </div>
            </div>
        </main>
    )
}