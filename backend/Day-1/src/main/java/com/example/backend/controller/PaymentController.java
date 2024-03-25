// package com.example.backend.controller;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.example.backend.entity.Payment;
// import com.example.backend.repository.PaymentRepository;



// @RestController
// @RequestMapping("/api/payment")
// @CrossOrigin
// public class PaymentController {

//     @Autowired
//     private PaymentRepository paymentRepository;

//     @PostMapping("/add")
//     public Payment add(@RequestBody Payment payment) {
//         return paymentRepository.save(payment);
//     }

//     @GetMapping("/get")
//     public List<Payment> getAllPayments() {
//         return paymentRepository.findAll();
//     }

//     @GetMapping("/get/{id}")
//     public Payment getPaymentById(@PathVariable Long id) {
//         return paymentRepository.findById(id).orElse(null);
//     }

//     @PutMapping("/update/{id}")
//     public Payment updatePayment(@RequestBody Payment updatedPayment, @PathVariable Long id) {
//         return paymentRepository.findById(id).map(payment -> {
//             payment.setPaymentmode(updatedPayment.getPaymentmode());
//             payment.setCardnumber(updatedPayment.getCardnumber());
//             payment.setExpirydate(updatedPayment.getExpirydate());
//             payment.setCvv(updatedPayment.getCvv());
//             payment.setPaymentdate(updatedPayment.getPaymentdate());
//             payment.setAmount(updatedPayment.getAmount());
//             return paymentRepository.save(payment);
//         }).orElse(null);
//     }

//     @DeleteMapping("/delete/{id}")
//     public String deletePayment(@PathVariable Long id) {
//         paymentRepository.deleteById(id);
//         return "Deleted Successfully";
//     }
// }
