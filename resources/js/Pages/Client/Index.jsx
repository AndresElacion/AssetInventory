import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, router } from "@inertiajs/react";
import React, { useState } from "react";

export default function Index({ success, clients }) {
    const [openIndex, setOpenIndex] = useState(null); // State to track the open accordion index

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index); // Toggle open/close
    };

    const deleteClient = (client) => {
        if (!window.confirm('Are you sure you want to delete the client?')) {
            return;
        }
        router.delete(route('client.destroy', client.id));
    };

    return (
        <div>
            <div className="container mx-auto p-4">
                {success && (
                    <div className="bg-green-500 text-white py-2 px-4 rounded-lg mb-4 text-center">
                        {success}
                    </div>
                )}
                <div className="bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-100">
                                <tr>
                                    {["ID", "Client Name", "URL", "CPU", "RAM", "Private IP", "Public IP", "Actions"].map((header) => (
                                        <th key={header} className="py-3 px-6 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {clients && clients.data && clients.data.length > 0 ? (
                                    clients.data.map((client, index) => (
                                        <React.Fragment key={client.id}>
                                            <tr className="hover:bg-gray-50 cursor-pointer" onClick={() => toggleAccordion(index)}>
                                                <td className="py-4 px-6">{client.id}</td>
                                                <td className="py-4 px-6">{client.name}</td>
                                                <td className="py-4 px-6">
                                                    <a href={client.serverSpecs[0]?.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                                        {client.serverSpecs[0]?.url ? 'Live Link' : 'N/A'}
                                                    </a>
                                                </td>
                                                <td className="py-4 px-6">{client.serverSpecs[0]?.cpu || 'N/A'}</td>
                                                <td className="py-4 px-6">{client.serverSpecs[0]?.ram || 'N/A'}</td>
                                                <td className="py-4 px-6">{client.serverSpecs[0]?.private_ip || 'N/A'}</td>
                                                <td className="py-4 px-6">{client.serverSpecs[0]?.public_ip || 'N/A'}</td>
                                                <td className="py-4 px-6">
                                                    <Link href={route('client.edit', client.id)} className="text-blue-600 hover:underline mx-1">Edit</Link>
                                                    <button onClick={() => deleteClient(client)} className="text-red-600 hover:underline mx-1">Delete</button>
                                                </td>
                                            </tr>
                                            {openIndex === index && (
                                                <tr>
                                                    <td colSpan="8" className="bg-gray-50 p-4">
                                                        <div className="text-gray-700">
                                                            <h4 className="font-semibold mb-2">Server Specifications: { client.name }</h4>
                                                            {client.serverSpecs && client.serverSpecs.length > 0 ? (
                                                                <table className="min-w-full divide-y divide-gray-200">
                                                                    <thead className="bg-gray-100">
                                                                        <tr>
                                                                            <th className="py-2 px-4 text-left text-xs font-medium text-gray-700">URL</th>
                                                                            <th className="py-2 px-4 text-left text-xs font-medium text-gray-700">CPU</th>
                                                                            <th className="py-2 px-4 text-left text-xs font-medium text-gray-700">RAM</th>
                                                                            <th className="py-2 px-4 text-left text-xs font-medium text-gray-700">PRIVATE IP</th>
                                                                            <th className="py-2 px-4 text-left text-xs font-medium text-gray-700">PUBLIC IP</th>
                                                                            <th className="py-2 px-4 text-left text-xs font-medium text-gray-700">OS</th>
                                                                            <th className="py-2 px-4 text-left text-xs font-medium text-gray-700">Storage</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody className=" divide-y divide-gray-200">
                                                                        {client.serverSpecs.map(spec => (
                                                                            <tr key={spec.id} className="hover:bg-gray-100">
                                                                                <td className="py-2 px-4">
                                                                                    <a href={spec.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                                                                        {spec.url ? 'Live Link' : 'N/A'}
                                                                                    </a>
                                                                                </td>
                                                                                <td className="py-2 px-4">{spec.cpu}</td>
                                                                                <td className="py-2 px-4">{spec.ram}</td>
                                                                                <td className="py-2 px-4">{spec.private_ip}</td>
                                                                                <td className="py-2 px-4">{spec.public_ip}</td>
                                                                                <td className="py-2 px-4">{spec.os}</td>
                                                                                <td className="py-2 px-4">{spec.storage}</td>
                                                                            </tr>
                                                                        ))}
                                                                    </tbody>
                                                                </table>
                                                            ) : (
                                                                <p>No server specifications found.</p>
                                                            )}
                                                            <div className="mt-4">
                                                                <Link href={route('serverSpecs.create', client.id)} className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200">
                                                                    Add server specs
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>

                                            )}
                                        </React.Fragment>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="8" className="py-4 text-center">No clients found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
