package it.greenfutureproject.com.controller;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
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
import it.greenfutureproject.com.model.Raccolta;
import it.greenfutureproject.com.model.User;
import it.greenfutureproject.com.payload.RaccoltaPayload;
import it.greenfutureproject.com.service.RaccolteService;

@RestController
@RequestMapping("/raccolte")
public class RaccolteController {
	@Autowired
	RaccolteService raccolteService;
	
	@GetMapping("")
	public Page<Raccolta> getRaccolte(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size,
			@RequestParam(defaultValue = "id") String sortBy) {
		return raccolteService.find(page, size, sortBy);
	}
	
	@GetMapping("/{id}")
	public Raccolta getById(@PathVariable UUID id) throws Exception {
		return raccolteService.findById(id);
	}
	
	@GetMapping("/{nome}")
	public Raccolta getByNome(@PathVariable String nome) throws Exception {
		return raccolteService.findByNome(nome);
	}
	
	@PostMapping("")
	@ResponseStatus(HttpStatus.CREATED)
	public Raccolta createRaccolta(@RequestBody RaccoltaPayload body) {
		return raccolteService.createRaccolta(body);
	}
	
	@PutMapping("/{id}")
	public Raccolta updateRaccolta(@PathVariable UUID id, @RequestBody RaccoltaPayload body) {
		return raccolteService.updateRaccolta(id, body);
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteRaccolta(@PathVariable UUID id) throws NotFoundException {
		raccolteService.deleteRaccolta(id);
	}
}
