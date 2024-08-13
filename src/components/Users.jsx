import React, { useEffect, useState } from 'react';
import { Button } from 'flowbite-react';
import { saveAs } from 'file-saver';
import { Link } from 'react-router-dom';
const Users = ({ Users }) => {

    const [data, setData] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState([]);

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async() =>{
        const res = await fetch(`http://localhost:4000/users`);
        const data = await res.json();
        setData(data);
    }

    const handleCheckboxChange = (userId) => {
        setSelectedUsers((prevSelected) =>
            prevSelected.includes(userId)
                ? prevSelected.filter((id) => id !== userId)
                : [...prevSelected, userId]
        );
    };
 

    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:4000/users/${id}`, {
                method: 'DELETE',
            });
    
           
            setData(data.filter((user) => user.id !== id));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };
    
    const handleExport = () => {
        const selectedData = data.filter((user) => selectedUsers.includes(user.id));
        const csvContent =["First Name,Last Name,Email"]
                .concat(selectedData.map(user => `${user.firstName},${user.lastName},${user.email}`))
                .join("\n");

        const encodedUri = encodeURI(csvContent);
        const fileName = "exported_users.csv";


        saveAs(new Blob([csvContent], { type: "text/csv;charset=utf-8;" }), fileName);
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-end space-x-2 mb-10">
                <Link to={'/sign-up'}> <Button color="blue" >Sign Up</Button></Link>
                <Button color="blue" onClick={handleExport}
                    disabled={selectedUsers.length === 0}>Export</Button>
            </div>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr>
                        <th className=" text-left px-4 py-2">
                            <input type="checkbox" />
                        </th>
                        <th className="px-4 py-2 text-left">First name</th>
                        <th className="px-4 py-2 text-left">Last name</th>
                        <th className="px-4 py-2 text-left">Email</th>
                        <th className="px-4 py-2 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user) => (
                        <tr key={user.id} className="border-t border-gray-200">
                            <td className="px-4 py-2">
                                <input type="checkbox"
                                    checked={selectedUsers.includes(user.id)}
                                    onChange={() => handleCheckboxChange(user.id)} className="border rounded-sm shadow-lg" />
                            </td>
                            <td className="px-4 py-2">{user.firstName}</td>
                            <td className="px-4 py-2">{user.lastName}</td>
                            <td className="px-4 py-2">{user.email}</td>
                            <td className="px-4 py-2">
                                <button onClick={() => handleDelete(user.id)} className="text-blue-600 hover:underline">DELETE</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-between mt-4">
                <p>1–5 of 12</p>
                <div>
                    <button className="px-3 py-1 border rounded">‹</button>
                    <button className="px-3 py-1 border rounded">›</button>
                </div>
            </div>
        </div>
    );
};

export default Users;
