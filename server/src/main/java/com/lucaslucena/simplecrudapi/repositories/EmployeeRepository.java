package com.lucaslucena.simplecrudapi.repositories;

import com.lucaslucena.simplecrudapi.models.EmployeeModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<EmployeeModel, Long> {
}
