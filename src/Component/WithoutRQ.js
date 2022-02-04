import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WithoutRQ = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState()
    const [error, setError] = useState('')

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            setData(res.data)
            setIsLoading(false)
        }).catch(error => setError(error.message))
    }, [])

    console.log(data);

    if (isLoading) {
        return <div className="m-5">
            <h2>Loading...</h2>
        </div>
    }

    if (error) {
        return <div className="m-5">
            <h2>{error}</h2>
        </div>
    }

    return (
        <>
            <div className="m-5">
                <h2 className="mt-5">User List</h2>
                <div>
                    {
                        !data ? ("No data found") : (
                            <table className="table table-dark table-hover table-striped">
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>name</th>
                                        <th>username</th>
                                        <th>email</th>
                                        <th>phone</th>
                                        <th>website</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((data) => {
                                            return (
                                                <tr>
                                                    <td>{data.id}</td>
                                                    <td>{data.name}</td>
                                                    <td>{data.username}</td>
                                                    <td>{data.email}</td>
                                                    <td>{data.phone}</td>
                                                    <td>{data.website}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        )
                    }
                </div>
            </div>
        </>
    )
};

export default WithoutRQ;