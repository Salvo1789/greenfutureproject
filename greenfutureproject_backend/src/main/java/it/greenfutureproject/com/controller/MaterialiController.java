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
import it.greenfutureproject.com.model.Materiale;
import it.greenfutureproject.com.model.Raccolta;
import it.greenfutureproject.com.payload.MaterialePayload;
import it.greenfutureproject.com.payload.RaccoltaPayload;
import it.greenfutureproject.com.service.MaterialiService;

@RestController
@RequestMapping("/materiali")
public class MaterialiController {
	@Autowired
	MaterialiService materialiService;
	
	@GetMapping("")
	public Page<Materiale> getRaccolte(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size,
			@RequestParam(defaultValue = "id") String sortBy) {
		return materialiService.find(page, size, sortBy);
	}
	
	@GetMapping("/{id}")
	public Materiale getById(@PathVariable UUID id) throws Exception {
		return materialiService.findById(id);
	}
	
	@GetMapping("/{nome}")
	public Materiale getByNome(@PathVariable String nome) throws Exception {
		return materialiService.findByNome(nome);
	}
	
	@PostMapping("")
	@ResponseStatus(HttpStatus.CREATED)
	public Materiale createMateriale(@RequestBody MaterialePayload body) {
		return materialiService.createMateriale(body);
	}
	
	@PutMapping("/{id}")
	public Materiale updateMateriale(@PathVariable UUID id, @RequestBody MaterialePayload body) {
		return materialiService.updateMateriale(id, body);
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteMateriale(@PathVariable UUID id) throws NotFoundException {
		materialiService.deleteMateriale(id);
	}
}
