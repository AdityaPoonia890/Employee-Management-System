package com.aditya.EmployeeManagementSystem.mapper;

import com.aditya.EmployeeManagementSystem.dto.EmployeeDto;
import com.aditya.EmployeeManagementSystem.entity.Employee;

public class EmployeeMapper {
    public static EmployeeDto mapToEmployeeDto(Employee employee) {
        return new EmployeeDto(
                employee.getId(),
                employee.getFname(),
                employee.getLname(),
                employee.getEmail()
        );
    }

    public static Employee mapToEmployee(EmployeeDto employeeDto) {
        return  new Employee(
                employeeDto.getId(),
                employeeDto.getFname(),
                employeeDto.getLname(),
                employeeDto.getEmail()
        );
    }
}
