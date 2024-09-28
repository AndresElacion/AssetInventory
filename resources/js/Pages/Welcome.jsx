import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="text-black/50 dark:bg-black dark:text-white/50 bg-gradient-to-r from-slate-300 via-slate-200 to-slate-100">
                <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                            <div className="flex lg:justify-center lg:col-start-2">
                                
                            </div>
                            <nav className="-mx-3 flex flex-1 justify-end">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>

                        <div class="relative pt-40 pb-20 dark:bg-gray-900">
                            <div class="relative xl:container m-auto px-6 md:px-12 lg:px-6">
                                <h1 class="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl dark:text-white">Welcome to<br class="lg:block hidden"/> <span class="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Client Asset Pro</span>.</h1>
                                <div class="lg:flex">
                                    <div class="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
                                        <p class="sm:text-lg text-gray-700 dark:text-gray-300 lg:w-11/12">
                                           Disclaimer:
                                        </p>
                                        <p class="sm:text-lg text-gray-700 dark:text-gray-300 lg:w-11/12">
                                           This application is for testing and development purposes only. Please do not enter any personal, sensitive, or confidential information. Any data entered may not be secure and is subject to deletion without notice. By using this application, you acknowledge that it is not intended for production use.
                                        </p>
                                        <p class="sm:text-lg text-gray-700 dark:text-gray-300 lg:w-11/12">
                                           For any inquiries, feel free to contact me: <a href="andreielacion5@gmail.com" className='hover:underline'>Here</a>.
                                        </p>
                                        <div class="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
                                            <a aria-label="add to slack" href="https://github.com/AndresElacion/AssetInventory" target='_blank' class="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30">
                                                <div class="flex justify-center space-x-4">
                                                    <span class="hidden font-medium md:block dark:text-white">Github</span>
                                                </div>
                                            </a>
                                        </div>
                                        <p class="sm:text-lg text-gray-700 dark:text-gray-300 lg:w-11/12">
                                            Testing Account: <br />
                                            email: user@test.com <br />
                                            password: password
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
