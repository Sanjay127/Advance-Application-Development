package com.example.backend.entity;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity

@Table(name = "_payment")
public class Payment {
    @Id

    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(length = 50, nullable = false)

	private String paymentmode;

	@Column(length = 50, nullable = false)
	private String cardnumber;
	
	@Column(length = 50, nullable = false)

	private String expirydate;
	
	@Column(length = 50, nullable = false)
    
	private String cvv;
	
	@Column(length = 50, nullable = false)

	private Date paymentdate;
    
	@Column(length = 50, nullable = false)

	private String amount;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPaymentmode() {
        return paymentmode;
    }

    public void setPaymentmode(String paymentmode) {
        this.paymentmode = paymentmode;
    }

    public String getCardnumber() {
        return cardnumber;
    }

    public void setCardnumber(String cardnumber) {
        this.cardnumber = cardnumber;
    }

    public String getExpirydate() {
        return expirydate;
    }

    public void setExpirydate(String expirydate) {
        this.expirydate = expirydate;
    }

    public String getCvv() {
        return cvv;
    }

    public void setCvv(String cvv) {
        this.cvv = cvv;
    }

    public Date getPaymentdate() {
        return paymentdate;
    }

    public void setPaymentdate(Date paymentdate) {
        this.paymentdate = paymentdate;
    }

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    public Payment(Long id, String paymentmode, String cardnumber, String expirydate, String cvv, Date paymentdate,
            String amount) {
        this.id = id;
        this.paymentmode = paymentmode;
        this.cardnumber = cardnumber;
        this.expirydate = expirydate;
        this.cvv = cvv;
        this.paymentdate = paymentdate;
        this.amount = amount;
    }

    public Payment()
	{
		super();
	}
	

}
