package it.greenfutureproject.com.controller;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import it.greenfutureproject.com.exceptions.NotFoundException;
import it.greenfutureproject.com.model.User;
import it.greenfutureproject.com.payload.UserPayload;
import it.greenfutureproject.com.service.UsersService;

@RestController
@RequestMapping("/users")
public class UsersController {
	@Autowired
	UsersService usersService;
	
	@GetMapping("")
	public Page<User> getUsers(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size,
			@RequestParam(defaultValue = "id") String sortBy) {
		return usersService.find(page, size, sortBy);
	}
	
	@GetMapping("/{id}")
	public User getById(@PathVariable UUID id) throws Exception {
		return usersService.findById(id);
	}
	
	@PostMapping("")
	@ResponseStatus(HttpStatus.CREATED)
	public User createUser(@RequestBody UserPayload body) {
		return usersService.createUser(body);
	}
	
	@PutMapping("/{id}")
	public User getByIdAndUpdate(@PathVariable UUID id, @RequestBody UserPayload body) {
		return usersService.updateUser(id, body);
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteUser(@PathVariable UUID id) {
		usersService.deleteUser(id);
	}
	
	@GetMapping("/me")
	public User getCurrentUser(Authentication authentication) throws NotFoundException {
		User userDetails = (User) authentication.getPrincipal();
		UUID userId = userDetails.getId();
		return usersService.findById(userId);
	}
	
}
