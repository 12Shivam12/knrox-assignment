import { Button } from 'flowbite-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [userInfo, setUserInfo] = useState({
        email: '',
        firstName: '',
        secondName: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!userInfo.email) newErrors.email = 'Email is required';
        if (!userInfo.firstName) newErrors.firstName = 'First Name is required';
        if (!userInfo.secondName) newErrors.secondName = 'Last Name is required';
        if (!userInfo.password) newErrors.password = 'Password is required';
        if (userInfo.password !== userInfo.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const handleSubmit = async () => {
        if (validateForm()) {
            try {
                const response = await fetch('http://localhost:4000/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        firstName: userInfo.firstName,
                        lastName: userInfo.secondName,
                        email: userInfo.email,
                        password: userInfo.password
                    })
                });

                if (!response.ok) {
                    throw new Error('Failed to add user');
                }

                console.log('User Info:', userInfo);
                alert('Signup successful!');


                setUserInfo({
                    email: '',
                    firstName: '',
                    secondName: '',
                    password: '',
                    confirmPassword: ''
                });
                setErrors({});
            } catch (error) {
                console.error('Error:', error);
                alert('Failed to sign up. Please try again.');
            }
        }
    };

    return (
        <div className='w-1/3 mt-[100px] p-5 border m-auto'>
            <div className='flex justify-between'>
                <div>
                    <h2 className='font-bold text-xl'>SIGN UP FORM</h2>
                    <p className='text-gray-500 text-md mt-4'>Fill in the form below to signup a new user</p>
                </div>
                <div>
                    <Link to={'/'}><button className='text-blue-600 px-2 py-1 border border-blue-600 rounded'>BACK</button></Link>
                </div>
            </div>
            <div className='flex flex-col gap-8 mt-5'>
                <input
                    className='rounded'
                    type="text"
                    placeholder='Email'
                    name='email'
                    value={userInfo.email}
                    onChange={handleChange}
                />
                {errors.email && <p className="text-red-600">{errors.email}</p>}

                <input
                    className='rounded'
                    type="text"
                    placeholder='First Name'
                    name='firstName'
                    value={userInfo.firstName}
                    onChange={handleChange}
                />
                {errors.firstName && <p className="text-red-600">{errors.firstName}</p>}

                <input
                    className='rounded'
                    type="text"
                    placeholder='Last Name'
                    name='secondName'
                    value={userInfo.secondName}
                    onChange={handleChange}
                />
                {errors.secondName && <p className="text-red-600">{errors.secondName}</p>}

                <input
                    className='rounded'
                    type="password"
                    placeholder='Password'
                    name='password'
                    value={userInfo.password}
                    onChange={handleChange}
                />
                {errors.password && <p className="text-red-600">{errors.password}</p>}

                <input
                    className='rounded'
                    type="password"
                    placeholder='Re-Type Password'
                    name='confirmPassword'
                    value={userInfo.confirmPassword}
                    onChange={handleChange}
                />
                {errors.confirmPassword && <p className="text-red-600 text-sm">{errors.confirmPassword}</p>}
            </div>
            <div className='mt-10 flex gap-5 float-right'>
                <Link to={'/'}>
                    <button
                        className='text-blue-600 px-2 py-1 border border-blue-600 rounded'
                        onClick={() => setUserInfo({
                            email: '',
                            firstName: '',
                            secondName: '',
                            password: '',
                            confirmPassword: ''
                        })}
                    >
                        CANCEL
                    </button>
                </Link>
                <button
                    className='text-blue-600 px-2 py-1 border border-blue-600 rounded'
                    onClick={handleSubmit}
                >
                    SIGN UP
                </button>
            </div>
        </div>
    );
};

export default Signup;