import { Head, Link, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import ThemeToggle from "@/Components/ThemeToggle"; // Import the ThemeToggle component

export default function Edit({ client }) {
    const { data, setData, post, errors } = useForm({
        name: client.name || '',
        email: client.email || '',
        _method: 'PUT'
    });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("client.update", client.id));
    };

    return (
        <AuthenticatedLayout header={
            <div className="flex justify-between items-center">
                <h2 className="font-semibold text-xl text-gray-800 leading-tight dark:text-gray-200">
                    Edit Client "{client.name}"
                </h2>
            </div>
        }>
            <Head title="Edit Client" />
            <ThemeToggle /> {/* Add the ThemeToggle component here */}
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-900 overflow-hidden shadow-sm sm:rounded-lg">
                        <form onSubmit={onSubmit} className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg">
                            <div>
                                <InputLabel
                                    htmlFor="client_name"
                                    value="Client Name"
                                    className="dark:text-gray-300"
                                />
                                <TextInput
                                    id="client_name"
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    className="mt-1 block w-full dark:bg-gray-700 dark:text-gray-200"
                                    onChange={e => setData('name', e.target.value)}
                                />
                                <InputError
                                    message={errors.name}
                                    className="mt-2 dark:text-red-500"
                                />
                            </div>
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="client_email"
                                    value="Client Email"
                                    className="dark:text-gray-300"
                                />
                                <TextInput
                                    id="client_email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full dark:bg-gray-700 dark:text-gray-200"
                                    onChange={e => setData('email', e.target.value)}
                                />
                                <InputError
                                    message={errors.email}
                                    className="mt-2 dark:text-red-500"
                                />
                            </div>

                            <div className="mt-4 text-right">
                                <Link href={route('dashboard')} className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
                                    Cancel
                                </Link>
                                <button className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
