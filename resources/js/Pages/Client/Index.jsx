import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useState } from "react";


export default function Index({ success }) {
    const [openIndex, setOpenIndex] = useState(null); // State to track the open accordion index

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index); // Toggle open/close
    };

    const data = [
        {
            id: 1,
            clientName: "TMOBILE",
            url: "http://google.com",
            cpu: "2 CPU",
            ram: "4GB",
            privateIp: "0.0.0.0",
            publicIp: "0.0.0.0",
            os: "Linux",
            storage: "2TB",
            details: "Additional details about TMOBILE.",
        },
        {
            id: 2,
            clientName: "TMOBILE",
            url: "http://google.com",
            cpu: "2 CPU",
            ram: "4GB",
            privateIp: "0.0.0.0",
            publicIp: "0.0.0.0",
            os: "Linux",
            storage: "2TB",
            details: "Additional details about TMOBILE with details.",
        },
        {
            id: 3,
            clientName: "TMOBILE",
            url: "http://google.com",
            cpu: "2 CPU",
            ram: "4GB",
            privateIp: "0.0.0.0",
            publicIp: "0.0.0.0",
            os: "Linux",
            storage: "2TB",
            details: "Additional details about TMOBILE with samples.",
        },
        // Add more client data as needed
    ];

    return (
        <>
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
                            {data.map((item, index) => (
                                <React.Fragment key={item.id}>
                                    <tr className={`bg-white border-b cursor-pointer hover:bg-gray-50`} onClick={() => toggleAccordion(index)}>
                                        <td className="py-4">{item.id}</td>
                                        <td className="py-4">{item.clientName}</td>
                                        <td className="py-4">
                                            <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                                Live Link
                                            </a>
                                        </td>
                                        <td className="py-4">{item.cpu}</td>
                                        <td className="py-4">{item.ram}</td>
                                        <td className="py-4">{item.privateIp}</td>
                                        <td className="py-4">{item.publicIp}</td>
                                        <td className="py-4">{item.os}</td>
                                        <td className="py-4">{item.storage}</td>
                                        <td className="py-4">
                                            {/* Action buttons here */}
                                            <button className="text-blue-600 hover:underline mx-1">Edit</button>
                                            <button className="text-red-600 hover:underline mx-1">Delete</button>
                                        </td>
                                    </tr>
                                    {openIndex === index && (
                                        <tr>
                                            <td colSpan="10" className="bg-gray-100 p-4">
                                                <div className="text-gray-700">{item.details}</div>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
