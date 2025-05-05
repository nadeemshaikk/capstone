package com.project.service.pojo;

import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data

public class ServicePojo {

	private int serviceId;
	private String name;
	private Boolean isValueAffected;
	private BigDecimal Cost;
}
