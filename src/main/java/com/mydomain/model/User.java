package com.mydomain.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.ws.rs.core.Link;

public class User {

	private Integer id;
	private String name="";
	private String emailId="";
	private String password="";
	private Date joinDate=new Date();
	private Integer age;
	private String state="";
	private List<Link> links = new ArrayList<Link>();
	
	public User(){
		
	}
	
	public User(User u){
		this.id = u.id;
		this.name = u.name;
		this.emailId=u.emailId;
		this.password = u.password;
		this.joinDate=u.joinDate;
		this.age=u.age;
		this.state=u.state;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Date getJoinDate() {
		return joinDate;
	}
	public void setJoinDate(Date joinDate) {
		this.joinDate = joinDate;
	}
	public Integer getAge() {
		return age;
	}
	public void setAge(Integer age) {
		this.age = age;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}

	public List<Link> getLinks() {
		return links;
	}

	public void setLinks(List<Link> links) {
		this.links = links;
	}
	
	
}
