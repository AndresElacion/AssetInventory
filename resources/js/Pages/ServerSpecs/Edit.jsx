import { Head, Link, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import ThemeToggle from "@/Components/ThemeToggle";
import SelectInput from "@/Components/SelectInput";

export default function Edit({ serverSpecs }) {
    // Initialize form with the correct data
    const { data, setData, post, errors } = useForm({
        url: serverSpecs.url || '', 
        cpu: serverSpecs.cpu || '',
        ram: serverSpecs.ram || '',
        private_ip: serverSpecs.private_ip || '',
        public_ip: serverSpecs.public_ip || '',
        os: serverSpecs.os || '',
        storage: serverSpecs.storage || '', 
        category: serverSpecs.category || '',
        hosted_on: serverSpecs.hosted_on || '',
        sso: serverSpecs.sso || '',
        mfa: serverSpecs.mfa || '',
        _method: 'PUT',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        // Submit form data
        post(route("specs.update", serverSpecs.id));
    };

    return (
        <AuthenticatedLayout header={
            <div className="flex justify-between items-center">
                <h2 className="font-semibold text-xl text-gray-800 leading-tight dark:text-gray-200">
                    Edit Server Specification
                </h2>
            </div>
        }>
            <Head title="Edit Server Specification" />    
            <ThemeToggle /> {/* Add the ThemeToggle component here */}
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden dark:bg-gray-900 shadow-sm sm:rounded-lg">
                        <form onSubmit={onSubmit} className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg">
                            {/* URL */}
                            <div className="mt-4">
                                <InputLabel htmlFor="client_url" value="Client URL" className="dark:text-gray-300"/>
                                <TextInput
                                    id="client_url"
                                    type="text"
                                    name="url"
                                    value={data.url}
                                    className="mt-1 block w-full dark:bg-gray-700 dark:text-gray-200"
                                    onChange={e => setData('url', e.target.value)}
                                />
                                <InputError message={errors.url} className="mt-2" />
                            </div>

                            {/* CPU */}
                            <div className="mt-4">
                                <InputLabel htmlFor="client_cpu" value="Client CPU" className="dark:text-gray-300"/>
                                <TextInput
                                    id="client_cpu"
                                    type="text"
                                    name="cpu"
                                    value={data.cpu}
                                    className="mt-1 block w-full dark:bg-gray-700 dark:text-gray-200"
                                    onChange={e => setData('cpu', e.target.value)}
                                />
                                <InputError message={errors.cpu} className="mt-2" />
                            </div>

                            {/* RAM */}
                            <div className="mt-4">
                                <InputLabel htmlFor="client_ram" value="Client RAM" className="dark:text-gray-300"/>
                                <TextInput
                                    id="client_ram"
                                    type="text"
                                    name="ram"
                                    value={data.ram}
                                    className="mt-1 block w-full dark:bg-gray-700 dark:text-gray-200"
                                    onChange={e => setData('ram', e.target.value)}
                                />
                                <InputError message={errors.ram} className="mt-2" />
                            </div>

                            {/* Private IP */}
                            <div className="mt-4">
                                <InputLabel htmlFor="client_private_ip" value="Client Private IP" className="dark:text-gray-300"/>
                                <TextInput
                                    id="client_private_ip"
                                    type="text"
                                    name="private_ip"
                                    value={data.private_ip}
                                    className="mt-1 block w-full dark:bg-gray-700 dark:text-gray-200"
                                    onChange={e => setData('private_ip', e.target.value)}
                                />
                                <InputError message={errors.private_ip} className="mt-2" />
                            </div>

                            {/* Public IP */}
                            <div className="mt-4">
                                <InputLabel htmlFor="client_public_ip" value="Client Public IP" className="dark:text-gray-300"/>
                                <TextInput
                                    id="client_public_ip"
                                    type="text"
                                    name="public_ip"
                                    value={data.public_ip}
                                    className="mt-1 block w-full dark:bg-gray-700 dark:text-gray-200"
                                    onChange={e => setData('public_ip', e.target.value)}
                                />
                                <InputError message={errors.public_ip} className="mt-2" />
                            </div>

                            {/* OS */}
                            <div className="mt-4">
                                <InputLabel htmlFor="client_os" value="Client Operating System" className="dark:text-gray-300"/>
                                <TextInput
                                    id="client_os"
                                    type="text"
                                    name="os"
                                    value={data.os}
                                    className="mt-1 block w-full dark:bg-gray-700 dark:text-gray-200"
                                    onChange={e => setData('os', e.target.value)}
                                />
                                <InputError message={errors.os} className="mt-2" />
                            </div>

                            {/* Storage */}
                            <div className="mt-4">
                                <InputLabel htmlFor="client_storage" value="Client Storage" className="dark:text-gray-300"/>
                                <TextInput
                                    id="client_storage"
                                    type="text"
                                    name="storage"
                                    value={data.storage}
                                    className="mt-1 block w-full dark:bg-gray-700 dark:text-gray-200"
                                    onChange={e => setData('storage', e.target.value)}
                                />
                                <InputError message={errors.storage} className="mt-2" />
                            </div>

                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="client_category"
                                    value="Client Category"
                                     className="dark:text-gray-300"
                                />
                                <SelectInput
                                    name="category"
                                    id="client_category"
                                    className="mt-1 block w-full dark:bg-gray-700 dark:text-gray-200"
                                    onChange={(e) => setData("category", e.target.value)}
                                >
                                    <option value="">Select Category</option>
                                    <option value="physical">Physical</option>
                                    <option value="vm">VM</option>
                                    <option value="docker">Docker</option>
                                    <option value="virtual_host">Virtual Host</option>
                                </SelectInput>
                                <InputError message={errors.category} className="mt-2"/>
                            </div>

                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="client_sso"
                                    value="Client Category"
                                     className="dark:text-gray-300"
                                />
                                <SelectInput
                                    name="sso"
                                    id="client_sso"
                                    className="mt-1 block w-full dark:bg-gray-700 dark:text-gray-200"
                                    onChange={(e) => setData("sso", e.target.value)}
                                >
                                    <option value="">Select SSO</option>
                                    <option value="samlV2.0">SAML V2.0</option>
                                    <option value="openIdConnect">Open ID Connect</option>
                                    <option value="OAuth">OAuth</option>
                                </SelectInput>
                                <InputError message={errors.sso} className="mt-2"/>
                            </div>
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="client_mfa"
                                    value="Client Category"
                                     className="dark:text-gray-300"
                                />
                                <SelectInput
                                    name="mfa"
                                    id="client_mfa"
                                    className="mt-1 block w-full dark:bg-gray-700 dark:text-gray-200"
                                    onChange={(e) => setData("mfa", e.target.value)}
                                >
                                    <option value="">Select MFA</option>
                                    <option value="email">EMAIL</option>
                                    <option value="sms">SMS</option>
                                </SelectInput>
                                <InputError message={errors.mfa} className="mt-2"/>
                            </div>
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="client_hosted_on"
                                    value="Client Hosted On"
                                    className="dark:text-gray-300"
                                />
                                <TextInput
                                    id="client_hosted_on"
                                    type="text"
                                    name="hosted_on"
                                    value={data.hosted_on}
                                    className="mt-1 block w-full dark:bg-gray-700 dark:text-gray-200"
                                    onChange={e => setData('hosted_on', e.target.value)}
                                />
                                <InputError
                                    message={errors.hosted_on}
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
