import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function EmployeeData() {
    const [getDetails, setData] = useState([])

    useEffect(() => {
        fetch('https://63b806e94d97e82aa3ccef11.mockapi.io/Employee')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                console.log(data)

            })
    }, [])

    function editFunc(){    

    }
    
    function deleteFunc(){

    }

    return (
        <>
            <div className='container mt-2 table-responsive'>
                <table className='table table-success table-bordered  text-center '>
                    <thead className='fs-4 ' >
                        <tr>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='fs-5' >
                        {getDetails.map((post) => {
                            return (

                                <tr key={post.id}>
                                    <td>{post.firstName}</td>
                                    <td>{post.lastName}</td>
                                    <td>{post.email}</td>
                                    <td>{<button className='border-0 bg-warning' type='button' onClick={editFunc}><span><FontAwesomeIcon icon="fa-solid fa-pen-to-square" /></span></button>}
                                    {<button className='border-0 bg-danger' type='button' onClick={deleteFunc}><span><FontAwesomeIcon icon="fa-regular fa-trash" /></span></button>}</td>
                                </tr>
                            )
                        })
                        }

                    </tbody>


                </table>
            </div>
        </>
    )
}

export default EmployeeData;