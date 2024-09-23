import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError"
import InputLabel from "@/Components/InputLabel"
import TextInput from "@/Components/TextInput"
import { Head, Link, useForm } from "@inertiajs/react"
import SelectInput from "@/Components/SelectInput";

export default function Create({ client  }) {
    const { data, setData, post, errors } = useForm({
        client_id: client.id,
        url: '',
        cpu: '',
        ram: '',
        private_ip: '',
        public_ip: '',
        os: '',
        storage: '',
    })

    const onSubmit = (e) => {
        e.preventDefault()

        post(route("specs.store"))
    }

    return (
        <AuthenticatedLayout header={
            <div className="flex justify-between items-center">
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Create Server Specification to {client.name}
                </h2>
            </div>
        }>

        <Head title="Server Specification" />    

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <form onSubmit={onSubmit} className="p-4 sm:p-8 bg-white shadow-sm sm:rounded-lg">
                            <div className="mt-4">
                                <InputLabel
                                htmlFor="client_url"
                                value="Client URL"
                                />
                                <TextInput
                                    id="client_url"
                                    type="text"
                                    name="url"
                                    value={data.url}
                                    className="mt-1 block w-full"
                                    onChange={e => setData('url', e.target.value)}
                                />
                                <InputError
                                    message={errors.url}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4">
                                <InputLabel
                                htmlFor="client_cpu"
                                value="Client CPU"
                                />
                                <TextInput
                                    id="client_cpu"
                                    type="text"
                                    name="cpu"
                                    value={data.cpu}
                                    className="mt-1 block w-full"
                                    onChange={e => setData('cpu', e.target.value)}
                                />
                                <InputError
                                    message={errors.cpu}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4">
                                <InputLabel
                                htmlFor="client_ram"
                                value="Client RAM"
                                />
                                <TextInput
                                    id="client_ram"
                                    type="text"
                                    name="ram"
                                    value={data.ram}
                                    className="mt-1 block w-full"
                                    onChange={e => setData('ram', e.target.value)}
                                />
                                <InputError
                                    message={errors.ram}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4">
                                <InputLabel
                                htmlFor="client_private_ip"
                                value="Client Private IP"
                                />
                                <TextInput
                                    id="client_private_ip"
                                    type="text"
                                    name="private_ip"
                                    value={data.private_ip}
                                    className="mt-1 block w-full"
                                    onChange={e => setData('private_ip', e.target.value)}
                                />
                                <InputError
                                    message={errors.private_ip}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4">
                                <InputLabel
                                htmlFor="client_public_ip"
                                value="Client Public IP"
                                />
                                <TextInput
                                    id="client_public_ip"
                                    type="text"
                                    name="public_ip"
                                    value={data.public_ip}
                                    className="mt-1 block w-full"
                                    onChange={e => setData('public_ip', e.target.value)}
                                />
                                <InputError
                                    message={errors.public_ip}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4">
                                <InputLabel
                                htmlFor="client_os"
                                value="Client Operating System"
                                />
                                <TextInput
                                    id="client_os"
                                    type="text"
                                    name="os"
                                    value={data.os}
                                    className="mt-1 block w-full"
                                    onChange={e => setData('os', e.target.value)}
                                />
                                <InputError
                                    message={errors.os}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4">
                                <InputLabel
                                htmlFor="client_storage"
                                value="Client Storage"
                                />
                                <TextInput
                                    id="client_storage"
                                    type="text"
                                    name="storage"
                                    value={data.storage}
                                    className="mt-1 block w-full"
                                    onChange={e => setData('storage', e.target.value)}
                                />
                                <InputError
                                    message={errors.storage}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4 text-right">
                                <Link href={route('dashboard')} className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2">
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
    )
}