import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, router } from "@inertiajs/react";
import React, { useState } from "react";

export default function Index({ success, clients, role }) {
    const [openIndex, setOpenIndex] = useState(null); // State to track the open accordion index
     const [filteredClients, setFilteredClients] = useState(clients.data); // State for filtered clients
    const [selectedCategory, setSelectedCategory] = useState(""); // State for selected category

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index); // Toggle open/close
    };

    const deleteClient = (client) => {
        if (!window.confirm("Are you sure you want to delete the client?")) {
            return;
        }
        router.delete(route("client.destroy", client.id));
    };

    const deleteServerSpecs = (spec) => {
        if (!window.confirm("Are you sure you want to delete this server specification?")) {
            return;
        }
        router.delete(route("specs.destroy", spec.id));
    };

    const categories = ['physical', 'vm', 'docker', 'virtual_host']; // Define categories

    const filterByCategory = (category) => {
        setSelectedCategory(category);
        if (category) {
            const filtered = clients.data.filter((client) => 
                client.serverSpecs.some(spec => spec.category === category)
            );
            setFilteredClients(filtered);
        } else {
            setFilteredClients(clients.data); // Reset to original list if no category is selected
        }
    };

    console.log("Role:", role); // Add this to check the role value

    return (
        <div className="relative justify-center items-center p-4">
            {success && (
                <div className="bg-green-500 dark:bg-green-700 text-white py-2 rounded-lg mb-4 text-center">
                    {success}
                </div>
            )}

            {/* Category Filter Buttons */}
            <div className="mb-4 flex justify-end items-center dark:text-gray-300 ">
                <div>
                    <select
                    value={selectedCategory}
                    onChange={(e) => filterByCategory(e.target.value)}
                    className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 py-1 rounded-md shadow-md mx-1"
                >
                    <option value="">Select Category</option>
                    {['physical', 'vm', 'docker', 'virtual_host'].map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-100 dark:bg-gray-700 dark:text-gray-100">
                            <tr>
                                {[
                                    "ID", 
                                    "Client Name", 
                                    "URL", 
                                    "CPU", 
                                    "RAM", 
                                    "Private IP", 
                                    "Public IP", 
                                    "Category", 
                                    "Hosted On", 
                                    "Assigned User",
                                    "Actions"
                                ].map((header) => (
                                    <th
                                        key={header}
                                        className="py-3 px-6 text-left text-nowrap text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider"
                                    >
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                            {filteredClients && filteredClients.length > 0 ? (
                                filteredClients.map((client, index) => (
                                    <React.Fragment key={client.id}>
                                        <tr
                                            className="hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
                                            onClick={() => toggleAccordion(index)}
                                        >
                                            <td className="py-4 px-6">{client.id}</td>
                                            <td className="py-4 px-6">{client.name}</td>
                                            <td className="py-4 px-6 text-nowrap">
                                                <a
                                                    href={client.serverSpecs[0]?.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 dark:text-blue-400 hover:underline"
                                                >
                                                    {client.serverSpecs[0]?.url ? "Live Link" : "N/A"}
                                                </a>
                                            </td>
                                            <td className="py-4 px-6">{client.serverSpecs[0]?.cpu || "N/A"}</td>
                                            <td className="py-4 px-6">{client.serverSpecs[0]?.ram || "N/A"}</td>
                                            <td className="py-4 px-6">{client.serverSpecs[0]?.private_ip || "N/A"}</td>
                                            <td className="py-4 px-6">{client.serverSpecs[0]?.public_ip || "N/A"}</td>
                                            <td className="py-4 px-6">{client.serverSpecs[0]?.category || "N/A"}</td>
                                            <td className="py-4 px-6">{client.serverSpecs[0]?.hosted_on || "N/A"}</td>
                                            <td className="py-4 px-6">
                                                {client.users && client.users.length > 0 ? (
                                                    <div className="flex flex-wrap">
                                                        {client.users.map((user, index) => (
                                                            <span
                                                                key={index} // Use index if user doesn't have a unique ID
                                                                className="mr-2 mb-1 px-2 py-1 text-sm text-white bg-blue-500 rounded-full"
                                                            >
                                                                {user}
                                                            </span>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <span className="text-gray-500">Unassigned</span>
                                                )}
                                            </td>

                                            <td className="py-4 px-6 text-nowrap">
                                                {
                                                    role === 'admin' ? (
                                                        <>
                                                            <Link href={route("client.edit", client.id)} className="text-blue-600 dark:text-blue-400 hover:underline mx-1">
                                                                Edit
                                                            </Link>
                                                            <button
                                                                onClick={() => deleteClient(client)}
                                                                className="text-red-600 dark:text-red-400 hover:underline mx-1"
                                                            >
                                                                Delete
                                                            </button>
                                                        </>
                                                    ) : (
                                                        <Link href={route("client.edit", client.id)} className="text-blue-600 dark:text-blue-400 hover:underline mx-1">
                                                            Edit
                                                        </Link>
                                                    )
                                                }
                                            </td>
                                        </tr>
                                        {openIndex === index && (
                                            <tr>
                                                <td colSpan="11" className="bg-gray-50 dark:bg-gray-700 p-4">
                                                    <div className="text-gray-700 dark:text-gray-300">
                                                        <h4 className="font-semibold mb-2">
                                                            Server Specifications: {client.name}
                                                        </h4>
                                                        {client.serverSpecs && client.serverSpecs.length > 0 ? (
                                                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                                                <thead className="bg-gray-100 dark:bg-gray-600">
                                                                    <tr className="text-center">
                                                                        <th className="py-2 px-4 text-xs font-medium text-gray-700 dark:text-gray-300">URL</th>
                                                                        <th className="py-2 px-4 text-xs font-medium text-gray-700 dark:text-gray-300">CPU</th>
                                                                        <th className="py-2 px-4 text-xs font-medium text-gray-700 dark:text-gray-300">RAM</th>
                                                                        <th className="py-2 px-4 text-xs font-medium text-gray-700 dark:text-gray-300">PRIVATE IP</th>
                                                                        <th className="py-2 px-4 text-xs font-medium text-gray-700 dark:text-gray-300">PUBLIC IP</th>
                                                                        <th className="py-2 px-4 text-xs font-medium text-gray-700 dark:text-gray-300">OS</th>
                                                                        <th className="py-2 px-4 text-xs font-medium text-gray-700 dark:text-gray-300">STORAGE</th>
                                                                        <th className="py-2 px-4 text-xs font-medium text-gray-700 dark:text-gray-300">CATEGORY</th>
                                                                        <th className="py-2 px-4 text-xs font-medium text-gray-700 dark:text-gray-300">HOSTED ON</th>
                                                                        <th className="py-2 px-4 text-xs font-medium text-gray-700 dark:text-gray-300">ACTION</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                                                    {client.serverSpecs.map((spec) => (
                                                                        <tr key={spec.id} className="hover:bg-gray-100 dark:hover:bg-gray-500 text-center">
                                                                            <td className="py-2 px-4">
                                                                                <a
                                                                                    href={spec.url}
                                                                                    target="_blank"
                                                                                    rel="noopener noreferrer"
                                                                                    className="text-blue-600 dark:text-blue-400 hover:underline"
                                                                                >
                                                                                    {spec.url ? `${spec.url}` : "N/A"}
                                                                                </a>
                                                                            </td>
                                                                            <td className="py-2 px-4">{spec.cpu}</td>
                                                                            <td className="py-2 px-4">{spec.ram}</td>
                                                                        <td className="py-2 px-4">{spec.private_ip}</td>
                                                                        <td className="py-2 px-4">{spec.public_ip}</td>
                                                                        <td className="py-2 px-4">{spec.os}</td>
                                                                        <td className="py-2 px-4">{spec.storage}</td>
                                                                        <td className="py-2 px-4">{spec.category}</td>
                                                                        <td className="py-2 px-4">{spec.hosted_on}</td>
                                                                        <td className="py-2 px-4 text-nowrap">
                                                                            {
                                                                                role === 'admin' ? (
                                                                                    <>
                                                                                        <Link
                                                                                            href={route("serverSpecs.edit", { client: client.id, spec: spec.id })} // Ensure you pass both parameters correctly
                                                                                            className="text-blue-600 dark:text-blue-400 hover:underline mx-1"
                                                                                        >
                                                                                            Edit
                                                                                        </Link>
                                                                                        <button
                                                                                            onClick={() => deleteServerSpecs(spec)}
                                                                                            className="text-red-600 dark:text-red-400 hover:underline"
                                                                                        >
                                                                                            Delete
                                                                                        </button>
                                                                                    </>
                                                                                ) : (
                                                                                    <Link
                                                                                    href={route("serverSpecs.edit", { client: client.id, spec: spec.id })} // Ensure you pass both parameters correctly
                                                                                    className="text-blue-600 dark:text-blue-400 hover:underline mx-1"
                                                                                    >
                                                                                        Edit
                                                                                    </Link>   
                                                                                )        
                                                                            }
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    ) : (
                                                        <div>No server specifications found for this client.</div>
                                                        )}
                                                        <div className="mt-4">
                                                            <Link
                                                                href={route("serverSpecs.create", client.id)}
                                                                className="bg-gray-100 dark:bg-gray-600 py-1 px-3 text-gray-800 dark:text-gray-300 rounded shadow transition-all hover:bg-gray-200 dark:hover:bg-gray-500"
                                                            >
                                                                Add Server Specifications
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
                                <td colSpan="11" className="py-4 px-6 text-center">No clients found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
)};
