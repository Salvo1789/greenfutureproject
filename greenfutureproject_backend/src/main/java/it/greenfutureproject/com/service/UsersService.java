package it.greenfutureproject.com.service;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import it.greenfutureproject.com.exceptions.BadRequestException;
import it.greenfutureproject.com.exceptions.NotFoundException;
import it.greenfutureproject.com.model.User;
import it.greenfutureproject.com.payload.UserPayload;
import it.greenfutureproject.com.repository.UsersRepository;

@Service
public class UsersService {
	@Autowired
	private UsersRepository usersRepo;
	
	public Page<User> find(int page, int size, String sortBy){
		if (size < 0)
			size = 10;
		if (size > 100)
			size = 100;
		Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));

		return usersRepo.findAll(pageable);
	}
	
	public User findById(UUID id) throws NotFoundException {
		return usersRepo.findById(id).orElseThrow(() -> new NotFoundException("Utente non trovato!"));

	}
	
	public User findByEmail(String email) throws NotFoundException {
		return usersRepo.findByEmail(email)
				.orElseThrow(() -> new NotFoundException("Utente con questa mail: " + email + " non trovato!"));
	}
	
	public User findByUsername(String username) throws NotFoundException {
		return usersRepo.findByUsername(username)
				.orElseThrow(() -> new NotFoundException("Nessun utente con username: " + username + " trovato"));
	}
	
	public User createUser(UserPayload u) {
		usersRepo.findByEmail(u.getEmail()).ifPresent(user -> {
			throw new BadRequestException("Email " + user.getEmail() + " già in uso");
		});
		User newUser = new User(u.getUsername(), u.getPassword(), u.getEmail(),
				u.getNome(), u.getCognome()
				);
		return usersRepo.save(newUser);
	}
	
	public User updateUser(UUID id, UserPayload u) {
		User found = this.findById(id);
		found.setUsername(u.getUsername());
		found.setEmail(found.getEmail());
		found.setPassword(u.getPassword());
		found.setNome(u.getNome());
		found.setCognome(u.getCognome());
		return usersRepo.save(found);
	}

	public void deleteUser(UUID id) throws NotFoundException {
		User found = this.findById(id);
		usersRepo.delete(found);
	}
}
