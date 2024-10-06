import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError"
import InputLabel from "@/Components/InputLabel"
import TextInput from "@/Components/TextInput"
import { Head, Link, useForm } from "@inertiajs/react"
import ThemeToggle from "@/Components/ThemeToggle";
import { useState, useEffect } from 'react';
import SelectInput from "@/Components/SelectInput";

export default function AddUser() {
    const { data, setData, post, errors } = useForm({
        name: '',
        email: '',
        role: '',
        password: '',
        password_confirmation: '',
    });
    const onSubmit = (e) => {
        e.preventDefault();
        post(route("user.store"));
    };

    return (
        <AuthenticatedLayout header={
            <div className="flex justify-between items-center">
                <h2 className="font-semibold text-xl text-gray-800 leading-tight dark:text-gray-200">
                    Create New Client
                </h2>
            </div>
        }>
            <Head title="Client" />
            <ThemeToggle />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-900 overflow-hidden shadow-sm sm:rounded-lg">
                        <form onSubmit={onSubmit} className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg">
                            <div>
                                <InputLabel
                                    htmlFor="name"
                                    value="Name"
                                    className="dark:text-gray-300"
                                />
                                <TextInput
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    className="mt-1 block w-full dark:bg-gray-700 dark:text-gray-200"
                                    onChange={e => setData('name', e.target.value)}
                                    required
                                />
                                <InputError
                                    message={errors.name}
                                    className="mt-2 dark:text-red-500"
                                />
                            </div>

                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="email"
                                    value="Email"
                                    className="dark:text-gray-300"
                                />
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full dark:bg-gray-700 dark:text-gray-200"
                                    onChange={e => setData('email', e.target.value)}
                                    required
                                />
                                <InputError
                                    message={errors.email}
                                    className="mt-2 dark:text-red-500"
                                />
                            </div>

                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="password"
                                    value="Password"
                                    className="dark:text-gray-300"
                                />
                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full dark:bg-gray-700 dark:text-gray-200"
                                    onChange={e => setData('password', e.target.value)}
                                    required
                                />
                                <InputError
                                    message={errors.password}
                                    className="mt-2 dark:text-red-500"
                                />
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="password_confirmation" value="Confirm Password" className="dark:text-gray-300"/>

                                <TextInput
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="mt-1 block w-full dark:bg-gray-700 dark:text-gray-200"
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    required
                                />
                                <InputError message={errors.password_confirmation} className="mt-2 dark:text-red-500" />
                            </div>

                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="role"
                                    value="Role"
                                />
                                <SelectInput
                                    name="role"
                                    value={data.role}
                                    id="role"
                                    className="mt-1 block w-full"
                                    onChange={(e) => setData("role", e.target.value)}
                                >
                                    <option value="">Select Role</option>
                                    <option value="admin">Admin</option>
                                    <option value="user">User</option>
                                </SelectInput>
                                <InputError message={errors.role} className="mt-2"/>
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