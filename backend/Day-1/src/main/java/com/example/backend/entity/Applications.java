package com.example.backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity

@Table(name = "_applications")

public class Applications {
	
	@Id

    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(length = 50, nullable = false)

	private String applicationName;

	@Column(length = 50, nullable = false)
	private String contactNumber;
	
	@Column(length = 50, nullable = false)

	private String email;
	
	@Column(length = 50, nullable = false)

	private String jobtitle;
	
	public Applications(Long id, String applicationName, String contactNumber, String email,
            String jobtitle) {
        this.id = id;
        this.applicationName = applicationName;
        this.contactNumber = contactNumber;
        this.email = email;
        this.jobtitle = jobtitle;
    }

    public Long getId() {
        return id;
    }


    public void setId(Long id) {
        this.id = id;
    }




    public String getApplicationName() {
        return applicationName;
    }




    public void setApplicationName(String applicationName) {
        this.applicationName = applicationName;
    }




    public String getContactNumber() {
        return contactNumber;
    }




    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }




    public String getEmail() {
        return email;
    }




    public void setEmail(String email) {
        this.email = email;
    }






    public String getJobtitle() {
        return jobtitle;
    }




    public void setJobtitle(String jobtitle) {
        this.jobtitle = jobtitle;
    }




    public Applications()
	{
		super();
	}
	
	
	
	
	
}
