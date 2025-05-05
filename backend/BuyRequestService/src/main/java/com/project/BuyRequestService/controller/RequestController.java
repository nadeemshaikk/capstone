package com.project.BuyRequestService.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.BuyRequestService.Entity.RequestEntity;
import com.project.BuyRequestService.service.RequestService;

@RestController
@RequestMapping("/api")
public class RequestController {
	
	@Autowired
	RequestService service;
	
	@PostMapping("/requests")
	public ResponseEntity< RequestEntity> createBuyRequest(@RequestBody RequestEntity buyRequest) {
		return ResponseEntity.ok(service.createBuyRequest(buyRequest));
	}
	
	//This end point is used by admin to get all request
	@GetMapping("/requests")
	public ResponseEntity< List<RequestEntity>> getAllBuyRequests(){
		return ResponseEntity.ok(service.getAllBuyRequests());
	}
	
	//This endpoint is accessed by owner 
	@GetMapping("/requests/car/{carId}")
	public ResponseEntity<List<RequestEntity>> getBuyRequestsByCarId(@PathVariable Long carId){
		return ResponseEntity.ok(service.getBuyRequestsByCarId(carId));
	}
	
	
	@PatchMapping("/{requestId}/status")
	public ResponseEntity< RequestEntity> updateRequestStatus(@PathVariable Long requestId, @RequestParam("status") RequestEntity.RequestStatus status) {
		return ResponseEntity.ok(service.updateRequestStatus(requestId, status));
	}
	
	@DeleteMapping("/{requestId}")
	public ResponseEntity<Void> deleteBuyRequest(@PathVariable Long requestId) {
		service.deleteBuyRequest(requestId);
		return ResponseEntity.noContent().build();
	}

}
