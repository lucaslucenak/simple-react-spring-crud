package com.lucaslucena.simplecrudapi.models;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="tb_employee")
@Data
public class EmployeeModel {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column
    private String first_name;

    @Column
    private String last_name;

    @Column
    private Integer age;

    @Column
    private String country;

    @Column
    private String position;

    @Column
    private Integer wage;

}
