package com.mydomain.service;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.hibernate.Session;
import org.hibernate.Transaction;

import com.mydomain.model.Product;
import com.mydomain.model.User;

@Path("/products")
public class ProductService {

	@GET
	@Path("/{param}")
	@Produces({MediaType.APPLICATION_JSON})
	public Product getProduct(@PathParam("param") Integer id) {
		Session ses = HibernateUtil.currentSession();
		try {
			System.out.println("Loading product for id: "+id);
			Product p = (Product) ses.createQuery("from Product p where p.id="+id).uniqueResult();
			return p;
		} finally {
			HibernateUtil.currentSession();
		}
	}
	
	@GET
	@Produces({MediaType.APPLICATION_JSON})
	public List<Product> getProducts() {
		Session ses = HibernateUtil.currentSession();
		try {
			System.out.println("Loading products");
			return ses.createCriteria(Product.class).list();
		} finally {
			HibernateUtil.closeSession();
		}
	}
		
}
