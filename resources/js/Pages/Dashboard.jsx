import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import Index from './Client/Index';
import ThemeToggle from '@/Components/ThemeToggle';

export default function Dashboard({ clients }) {
    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-100 leading-tight">Client Details</h2>}
        >
            <Head title="Dashboard" />

            <ThemeToggle />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className='text-right mb-5 mr-5'>
                        <Link href={route("client.create")} className="bg-gray-100 dark:bg-gray-600 py-1 px-3 text-gray-800 dark:text-gray-300 rounded shadow transition-all hover:bg-gray-200 dark:hover:bg-gray-500">
                            Add New Client
                        </Link>
                    </div>
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <Index clients={clients} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
