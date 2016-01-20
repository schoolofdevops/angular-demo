package com.mydomain.model;


import java.math.BigDecimal;

public class Product implements java.io.Serializable {

	private Integer id;
	private String productName;
	private BigDecimal productPrice;
	private Integer version;
	private Integer stock;
	
	public Product() {
	}

	public Product(int id, String productName) {
		this.id = id;
		this.productName = productName;
	}

	public Product(int id, String productName, BigDecimal productPrice) {
		this.id = id;
		this.productName = productName;
		this.productPrice = productPrice;
	}

	
	
	public Integer getVersion() {
		return version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	public Integer getStock() {
		return stock;
	}

	public void setStock(Integer stock) {
		this.stock = stock;
	}

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getProductName() {
		return this.productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public BigDecimal getProductPrice() {
		return this.productPrice;
	}

	public void setProductPrice(BigDecimal productPrice) {
		this.productPrice = productPrice;
	}

}
