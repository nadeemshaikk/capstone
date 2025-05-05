package com.project.ServiceAppointmentService.entity;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data

@Entity
@Table(name = "service_appointments")
public class ServiceAppointment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="appointment_id")
	private Long appointmentId;
	
	@NotNull
	@Column(name="user_id")
	private Long userId;
	
	@NotNull
	@Column(name="car_id " )
	private Long carId;
	
	@NotNull
	@Column(name= "service_provider_id")
	private Long serviceProviderId;
	
	@NotNull
	@Column(name= "service_id")
	private Long serviceId;
	
	@NotNull
	@Column(name=" appointment_date" )
	@Temporal(TemporalType.DATE)
	private Date appointmentDate;
	
	 @NotNull
	 @Column(name= "status")
	 private String status;
	 
	 @Column(name= "engine_condition" )
	 private String engineCondition;
	 
	 @Column(name= "brake_condition")
	 private String breakCondition;
	 
	 @Column(name= "tire_condition" )
	 private String tireCondition;
	 
	 @Column(name= "overall_condition" )
	 private String overallCondition;

}
