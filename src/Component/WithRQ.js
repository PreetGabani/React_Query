import React from 'react';
import { Link } from 'react-router-dom';
import { useUserData } from '../Hooks/useUserData';
import { useHistory } from 'react-router-dom';

const WithRQ = () => {

    const history = useHistory();

    const onSuccess = (data) => {
        console.log("Success", data);
    }

    const onError = (error) => {
        console.log("Failed", error);
    }

    const { isLoading, data, isError, error, isFetching, refetch } = useUserData(onSuccess, onError)

    // console.log("isLoading",isLoading);
    // console.log("isFetching",isFetching);

    if (isLoading||isFetching) {
        return <div className="m-5">
            <h2>Loading...</h2>
        </div>
    }

    if (isError) {
        return <div className="m-5">
            <h2>{error.message}</h2>
        </div>
    }

    return (
        <>
            <div className="m-5">
                <h2 className="mt-5">User List</h2>
                <div>
                    <button onClick={refetch} className="btn btn-outline-dark mb-2">Fetch Data</button>
                    <br />
                    {
                        !data ? ("No data found") : (
                            <table className="table table-dark table-hover table-striped flex-nowrap">
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
                                        data.data.map((data) => {
                                            return (
                                                <tr>
                                                    <Link className="d-flex text-white" to={`RQUser/${data.id}`}>
                                                        <td>{data.id}</td>
                                                    </Link>
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

export default WithRQ;
