package com.aditya.EmployeeManagementSystem.service;

import com.aditya.EmployeeManagementSystem.dto.EmployeeDto;
import com.aditya.EmployeeManagementSystem.entity.Employee;
import com.aditya.EmployeeManagementSystem.exception.ResourceNotFoundException;
import com.aditya.EmployeeManagementSystem.mapper.EmployeeMapper;
import com.aditya.EmployeeManagementSystem.repository.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class EmployeeService {
    @Autowired
    EmployeeRepo employeeRepo;

    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        return EmployeeMapper.mapToEmployeeDto(employeeRepo.save(employee));
    }

    public EmployeeDto updaateEmployee(Long id, EmployeeDto updatedEmployee) {
        Employee employee = employeeRepo.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("no user with given id"+ id)
        );

        employee.setEmail(updatedEmployee.getEmail());
        employee.setFname(updatedEmployee.getFname());
        employee.setLname(updatedEmployee.getLname());

        employeeRepo.save(employee);

        return EmployeeMapper.mapToEmployeeDto(employee);
    }

    public EmployeeDto findEmployeeById(Long id) {
        Employee employee = employeeRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("no employee wit this id"));
        return EmployeeMapper.mapToEmployeeDto(employee);
    }

    public List<EmployeeDto> findAll() {
        List<Employee> employees = employeeRepo.findAll();
        List<EmployeeDto> employeeDto = employees.stream().map((employee -> EmployeeMapper.mapToEmployeeDto(employee))).collect(Collectors.toList());
        return employeeDto;
    }

    public String deleteById(Long id) throws Exception{

        try{
            employeeRepo.deleteById(id);
            return "successfully deleted";
        } catch (Exception e){
            throw new Exception( "not deleted");

        }



    }
}
