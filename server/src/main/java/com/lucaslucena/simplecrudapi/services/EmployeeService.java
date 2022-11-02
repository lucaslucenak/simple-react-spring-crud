package com.lucaslucena.simplecrudapi.services;

import com.lucaslucena.simplecrudapi.models.EmployeeModel;
import com.lucaslucena.simplecrudapi.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public EmployeeModel findEmployeeById(Long id) throws ChangeSetPersister.NotFoundException {
        return employeeRepository.findById(id).orElseThrow(ChangeSetPersister.NotFoundException::new);
    }

    public List<EmployeeModel> findAllEmployees() {
        return employeeRepository.findAll();
    }

    public EmployeeModel saveEmployee(EmployeeModel employeeModel) {
        return employeeRepository.save(employeeModel);
    }

    public void deleteEmployeeById(Long id) {
        employeeRepository.deleteById(id);
    }

    public EmployeeModel updateEmployeeById(Long id, EmployeeModel employeeModel) throws ChangeSetPersister.NotFoundException {
        EmployeeModel databaseEmployee = employeeRepository.findById(id).orElseThrow(ChangeSetPersister.NotFoundException::new);
        databaseEmployee.setAge(employeeModel.getAge());
        databaseEmployee.setCountry(employeeModel.getCountry());
        databaseEmployee.setFirst_name(employeeModel.getFirst_name());
        databaseEmployee.setLast_name(employeeModel.getLast_name());
        databaseEmployee.setPosition(employeeModel.getPosition());
        databaseEmployee.setWage(employeeModel.getWage());
        return databaseEmployee;
    }
}
