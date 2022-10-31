package com.lucaslucena.simplecrudapi.controllers;

import com.lucaslucena.simplecrudapi.models.EmployeeModel;
import com.lucaslucena.simplecrudapi.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public EmployeeModel findEmployeeById(@PathVariable Long id) throws ChangeSetPersister.NotFoundException {
        return employeeService.findEmployeeById(id);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<EmployeeModel> findAllEmployees()  {
        return employeeService.findAllEmployees();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public EmployeeModel saveEmployee(@RequestBody EmployeeModel employeeModel) {
        return employeeService.saveEmployee(employeeModel);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteEmployeeById(@PathVariable Long id) {
        employeeService.deleteEmployeeById(id);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public EmployeeModel updateEmployeeById(@PathVariable Long id, @RequestBody EmployeeModel employeeModel) throws ChangeSetPersister.NotFoundException {
        return employeeService.updateEmployeeById(id, employeeModel);
    }
}
