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
import it.greenfutureproject.com.model.Materiale;
import it.greenfutureproject.com.model.Raccolta;
import it.greenfutureproject.com.payload.MaterialePayload;
import it.greenfutureproject.com.payload.RaccoltaPayload;
import it.greenfutureproject.com.repository.MaterialiRepository;

@Service
public class MaterialiService {
	@Autowired
	private MaterialiRepository materialiRepo;
	
	public Page<Materiale> find(int page, int size, String sortBy) {
		if (size < 0)
			size = 10;
		if (size > 50)
			size = 50;
		Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));

		return materialiRepo.findAll(pageable);
	}
	
	public Materiale findById(UUID id) throws NotFoundException {
		return materialiRepo.findById(id).orElseThrow(() -> new NotFoundException("Materiale non trovato!"));
	}
	
	public Materiale findByNome(String nome) throws NotFoundException {
		return materialiRepo.findByNome(nome).orElseThrow(() -> new NotFoundException("Nessun materiale " + nome + " trovato!"));
	}
	
	public Materiale createMateriale(MaterialePayload mat) {
		materialiRepo.findByNome(mat.getNome()).ifPresent(r -> {
			throw new BadRequestException("Il materiale " + 
					mat.getNome() + " è stato già inserito.");
		});
		Materiale newMat = new Materiale(mat.getNome(), mat.getNote());
		return materialiRepo.save(newMat);
	}
	
	public Materiale updateMateriale(UUID id, MaterialePayload mat) {
		Materiale found = this.findById(id);
		found.setNome(mat.getNome());
		found.setNote(mat.getNote());
		return materialiRepo.save(found);
	}
	
	public void deleteMateriale(UUID id) throws NotFoundException {
		Materiale found = this.findById(id);
		materialiRepo.delete(found);
	}
}
