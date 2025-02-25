package com.aditya.EmployeeManagementSystem.controller;

import com.aditya.EmployeeManagementSystem.dto.EmployeeDto;
import com.aditya.EmployeeManagementSystem.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    @PostMapping("/create-employee")
    public ResponseEntity<EmployeeDto> createUser(@RequestBody EmployeeDto employeeDto) {
        EmployeeDto employee = employeeService.createEmployee(employeeDto);
        return new ResponseEntity<>(employee, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EmployeeDto> getByID(@PathVariable Long id) {
        EmployeeDto employeeDto = employeeService.findEmployeeById(id);
        return ResponseEntity.ok(employeeDto);
    }

    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getAll() {
        return new ResponseEntity<>(employeeService.findAll(), HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<EmployeeDto> updateEmployee(@RequestBody EmployeeDto employeeDto) {
        EmployeeDto updatedEmployeeDto = employeeService.updaateEmployee(employeeDto.getId(), employeeDto);

        return ResponseEntity.ok(employeeDto);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        try{
            String s = employeeService.deleteById(id);
            return new ResponseEntity<>(s,HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(String.valueOf(e),HttpStatus.NO_CONTENT);
        }

    }
}
