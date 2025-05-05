package com.project.service.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.service.entity.ServiceEntity;


@Repository
public interface ServiceRepository extends JpaRepository<ServiceEntity,  Integer> {

}
