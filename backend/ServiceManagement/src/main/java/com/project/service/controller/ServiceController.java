package com.project.service.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.service.entity.ServiceEntity;
import com.project.service.service.ServiceService;

@RestController
@RequestMapping("/api")
public class ServiceController {
	
	@Autowired
    private ServiceService service;

    @GetMapping("/services")
    public ResponseEntity< List<ServiceEntity>> getAllServices() {
        return new ResponseEntity<List<ServiceEntity>>( service.getAService(),HttpStatus.OK);
    }

    @GetMapping("/services/{id}")
    public ResponseEntity<ServiceEntity> getServiceById(@PathVariable int id) {
        Optional<ServiceEntity> serviceEntity = service.getById(id);
        return serviceEntity.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/services")
    public ResponseEntity< ServiceEntity> addService(@RequestBody ServiceEntity serviceEntity) {
        return new ResponseEntity<ServiceEntity>(service.addService(serviceEntity),HttpStatus.OK);
    }

    @PutMapping("/services")
    public ResponseEntity< ServiceEntity> updateService(@RequestBody ServiceEntity serviceEntity) {
        return new ResponseEntity<ServiceEntity>(service.editService(serviceEntity),HttpStatus.OK);
    }
    
    @DeleteMapping("/services")
    public ResponseEntity<Void> deleteService(){

    	service.deleteService();
    	return new ResponseEntity<Void>(HttpStatus.OK);
    }
    
    @DeleteMapping("/services/{serviceId}")
    public ResponseEntity<Void> deleteById(@PathVariable int serviceId){

    	service.deleteById(serviceId);
    	return new ResponseEntity<Void>(HttpStatus.OK);
    }

}
