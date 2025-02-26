import React, { useState, useEffect } from 'react'
import { deleteEmployee, listEmployees } from '../service/EmployeeService';
import { useNavigate,useLocation } from 'react-router-dom';

const ListEmployeeComponent = () => {
  /*  const dummyData = [
        {
            "id": 1,
            "fname": "Aditya",
            "lname": "Poonia",
            "email": "xyx@gmail.com"
        },
        {
            "id": 2,
            "fname": "udi",
            "lname": "Poonia",
            "email": "abc@gmail.com"   
        },
        {
            "id": 3,
            "fname": "rahul",
            "lname": "sharma",
            "email": "rahu@gmail.com"
        }
    ] */

        const [employees, setEmployees] = useState([]);
        const navigate = useNavigate();
        const location = useLocation();

        useEffect(()=>{
            getAllEmployees()
         } , [location]);

        function getAllEmployees() {
            listEmployees().then(

                (Response) => setEmployees(Response.data)

            ).catch(

                error => {console.error(error)}

            )
        }

        const addNewEmployee = () => {
            navigate('/add-employee')
        }

        function handleClick(id) {
            navigate(`/update-employee/${id}`)
        }

        function handleDelete(id) {
            deleteEmployee(id).then(
                (Response) => {
                    console.log(Response.data);
                    getAllEmployees()
                }
            ).catch(error => console.error(error))
        }

  return (
    <div className='container'>
      <h2 className='text-center'>Employee Data</h2>
      <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
      <table className='table table-striped table-bordered'>
        <thead>
            <tr>
                <th>Employee id</th>
                <th>Employee first name</th>
                <th>Employee last name</th>
                <th>Employee email id</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                employees.map(employee => 
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.fname}</td>
                        <td>{employee.lname}</td>
                        <td>{employee.email}</td>
                        <td>
                            <button className='btn btn-outline-info'
                                    onClick = {()=> handleClick(employee.id)}>
                                Update
                            </button>
                            <button className='btn btn-outline-danger '
                                    style={{marginLeft:"20px"}}
                                    onClick={()=> handleDelete(employee.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                )
            }
        </tbody>
      </table>
    </div>
  )
}

export default ListEmployeeComponent

