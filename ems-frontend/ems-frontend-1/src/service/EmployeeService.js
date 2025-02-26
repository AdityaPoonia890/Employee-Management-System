import React from 'react'
import axios from 'axios'

const Base_Api_Url = "http://localhost:8080/employee";

export const listEmployees = () => {
    return axios.get(Base_Api_Url);
}

export const createEmployee = (employee) => {
    return axios.post(Base_Api_Url+"/create-employee", employee);
}

export const getEmployee = (id) => {
    return axios.get(Base_Api_Url+"/"+id);
}

export const updateEmployee = (employee) => {
    return axios.put(Base_Api_Url+"/update", employee);
}

export const deleteEmployee = (id) => {
    return axios.delete(Base_Api_Url+"/delete/"+id);
}
 
