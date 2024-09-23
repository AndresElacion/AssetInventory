import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useState } from "react";


export default function Index({ success, clients }) {
    const [openIndex, setOpenIndex] = useState(null); // State to track the open accordion index

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index); // Toggle open/close
    };

    return (
        <div>
            {success && (
                <div className="bg-emerald-500 py-2 px-4 text-right rounded mb-4">
                    {success}
                </div>
            )}
            <div className="p-2 bg-gray-50 text-gray-900 rounded-lg shadow-md">
                <div className="overflow-auto shadow-sm sm:rounded-lg">
                    <table className="w-full text-sm text-center text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100 border-b border-gray-300">
                            <tr>
                                <th className="py-3">ID</th>
                                <th className="py-3">Client Name</th>
                                <th className="py-3">URL</th>
                                <th className="py-3">CPU</th>
                                <th className="py-3">RAM</th>
                                <th className="py-3">Private IP</th>
                                <th className="py-3">Public IP</th>
                                <th className="py-3">OS</th>
                                <th className="py-3">Storage</th>
                                <th className="py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients && clients.data && clients.data.length > 0 ? (
                                clients.data.map((client, index) => (
                                    <>
                                        <tr key={client.id} className={`bg-white border-b cursor-pointer hover:bg-gray-50`} onClick={() => toggleAccordion(index)}>
                                            <td className="py-4">{client.id}</td>
                                            <td className="py-4">{client.name}</td>
                                            <td className="py-4">
                                                <a href={client.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                                    Live Link
                                                </a>
                                            </td>
                                            <td className="py-4">{client.cpu}</td>
                                            <td className="py-4">{client.ram}</td>
                                            <td className="py-4">{client.privateIp}</td>
                                            <td className="py-4">{client.publicIp}</td>
                                            <td className="py-4">{client.os}</td>
                                            <td className="py-4">{client.storage}</td>
                                            <td className="py-4">
                                                <button className="text-blue-600 hover:underline mx-1">Edit</button>
                                                <button className="text-red-600 hover:underline mx-1">Delete</button>
                                            </td>
                                        </tr>
                                        {openIndex === index && (
                                            <tr>
                                                <td colSpan="10" className="bg-gray-100 p-4">
                                                    <div className="text-gray-700">123123123</div>
                                                </td>
                                            </tr>
                                        )}
                                    </>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="10" className="py-4 text-center">No clients found.</td>
                                </tr>
                            )}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}
