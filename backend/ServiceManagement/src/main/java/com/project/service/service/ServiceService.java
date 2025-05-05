package com.project.service.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.service.entity.ServiceEntity;
import com.project.service.repository.ServiceRepository;

@Service
public class ServiceService {
	
	@Autowired
	ServiceRepository repository;
	
	public List<ServiceEntity> getAService(){
		return repository.findAll();
	}

	public Optional<ServiceEntity> getById( int serviceId){
		return repository.findById(serviceId);
	}
	
	public ServiceEntity addService(ServiceEntity addService) {
		return repository.saveAndFlush(addService);
	}
	
	public ServiceEntity editService(ServiceEntity updateService) {
		return repository.save(updateService);
	}
	
	public void deleteService() {
		repository.deleteAll();
	}
	
	public void deleteById(int serviceId) {
		repository.deleteById(serviceId);
	}
}

