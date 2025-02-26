import React, { useState , useEffect} from 'react'
import { createEmployee,getEmployee, updateEmployee } from '../service/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Employee = () => {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");

    const navigator = useNavigate();

    const [errors, setErrors] = useState({
      fname : '',
      lname: '',
      email: ''
    });

    const {id} = useParams();

    useEffect(()=>{
      if (id) {
        getEmployee(id).then(
          (Response) => {
            setFname(Response.data.fname);
            setEmail(Response.data.email);
            setLname(Response.data.lname);
          }
        ).catch(error => console.log(error))
      }
      
    }, [])

    const onSubmitHandle = ( event)=> {
        event.preventDefault();

        if (validateForm()) {

          if (id) {
            const employee = {id, fname, lname, email};
            updateEmployee(employee).then(
              (Response) => console.log(Response.data)
            ).catch(error => console.error(error))

          } else {
            const employee = {fname, lname, email};
            createEmployee(employee).then(
              (Response) => console.log(Response.data)
            ).catch(error => console.error(error))
          }
          
          navigator('/employee')

        }
    }

    const validateForm = () => {
      let valid = true;
      const copyError = {... errors};

      if (fname.trim()) {
        copyError.fname = "";
      } else {
        copyError.fname = "First name is required"
        valid = false;
      }

      if (lname.trim()) {
        copyError.lname = ""
      } else {
        copyError.lname = "last name is required"
        valid = false;
      }

      if (email.trim()) {
        copyError.email = ""
      } else {
        copyError.email = "email is required"
        valid = false;
      }

      setErrors(copyError);

      return valid;
    }

    function pageTitle() {
      if (id) {
        return <h2 className='text-center'>Update Employee</h2>
      } else {
        return <h2 className='text-center'>Add Employee</h2>
      }
    }
    
  return (
    <div className=' container card px-5 py-5 mt-5 col-md-6 offset-md-3 offset-md-3'>
        
          <form className='' onSubmit={onSubmitHandle} >

            {
            pageTitle()
            }
                        
                  <label htmlFor="fname" className="form-label"><b>First Name</b></label>
                  <input 
                    type="text"
                    placeholder='enter first name'
                      value = {fname} 
                      onChange={e => setFname(e.target.value)}
                      className= {`form-control ${errors.fname ? 'is-invalid' : ""}`}
                      id="fname"/>              
            
                  <div className="invalid-feedback mb-3">{errors.fname}</div>
    
            
                <label htmlFor="lname" className="form-label"><b>Last Name</b></label>
                <input 
                  type="text"
                  placeholder = 'enter last name '
                    value={lname}
                    onChange={e => setLname(e.target.value)} 
                    className= {`form-control ${errors.lname ? 'is-invalid' : ''}`}
                    id="lname"
                    />
            
                <div className='invalid-feedback mb-3'>{errors.lname}</div>

            
                <label htmlFor="email" className="form-label"><b>Email address</b></label>
                <input 
                    type="email"
                      placeholder= 'enter email ' 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} 
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      id="email"
                        aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            
                <div className='invalid-feedback mb-3'>{errors.email}</div>

            <div className="mb-3 form-check">
                <input type="checkbox"
                 className="form-check-input"
                  id="Check"/>
                <label className="form-check-label" htmlFor="Check"><b>Agree with our privacy policies?</b></label>
            </div>

            <button 
             type="submit"
             className="btn btn-success">
                Submit
            </button>

          </form>
        

    </div>
  )
}

export default Employee
