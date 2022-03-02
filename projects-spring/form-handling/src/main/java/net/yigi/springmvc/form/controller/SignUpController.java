package net.yigi.springmvc.form.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import net.yigi.springmvc.form.model.SignUpForm;

/**
 * SignUpController class for User sign up form processing
 * 
 * @author Yigit Erkal
 */
@Controller
public class SignUpController {

	
	@ModelAttribute("signUpForm") // signUpForm in signup-form.jsp  
	public SignUpForm setSignUpForm() {
		return new SignUpForm();
	}

	
	@GetMapping("/showSignUpForm")
	public String showForm() {
		return "signup-form";
	}

	
	@PostMapping("/saveSignUpForm") // saveSignUpForm action value in signup-form.jsp form
	public String saveUser(@ModelAttribute("signUpForm") SignUpForm signUpForm, Model model) {

		// Implement business logic to save user details into a database TODO
		
		System.out.println("FirstName : " + signUpForm.getFirstName());
		System.out.println("LastName : " + signUpForm.getLastName());
		System.out.println("Username : " + signUpForm.getUserName());
		System.out.println("Password : " + signUpForm.getPassword());
		System.out.println("Email : " + signUpForm.getEmail());

		model.addAttribute("message", "User SignUp successfully.");
		model.addAttribute("user", signUpForm);

		return "signup-success";
	}

}
