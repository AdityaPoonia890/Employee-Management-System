package com.aditya.EmployeeManagementSystem.repository;

import com.aditya.EmployeeManagementSystem.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//@Repository
public interface EmployeeRepo extends JpaRepository<Employee, Long> {

}
