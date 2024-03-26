package com.example.backend.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity

@Table(name = "_premiumapplications")

public class PremiumApplications {
	
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

	private String amount;
	
	@Column(length = 50, nullable = false)

	private String jobtitle;
	
	public PremiumApplications(Long id, String applicationName, String contactNumber, String email, String amount,
            String jobtitle) {
        this.id = id;
        this.applicationName = applicationName;
        this.contactNumber = contactNumber;
        this.email = email;
        this.amount = amount;
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

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    public String getJobtitle() {
        return jobtitle;
    }

    public void setJobtitle(String jobtitle) {
        this.jobtitle = jobtitle;
    }




    public PremiumApplications()
	{
		super();
	}
	
	
	
	
	
}
