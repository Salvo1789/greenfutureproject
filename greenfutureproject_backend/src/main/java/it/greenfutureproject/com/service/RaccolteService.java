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
import it.greenfutureproject.com.model.Raccolta;
import it.greenfutureproject.com.model.User;
import it.greenfutureproject.com.payload.RaccoltaPayload;
import it.greenfutureproject.com.payload.UserPayload;
import it.greenfutureproject.com.repository.RaccolteRepository;

@Service
public class RaccolteService {
	@Autowired
	private RaccolteRepository raccolteRepo;
	
	public Page<Raccolta> find(int page, int size, String sortBy) {
		if (size < 0)
			size = 10;
		if (size > 15)
			size = 15;
		Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));

		return raccolteRepo.findAll(pageable);
	}
	
	public Raccolta findById(UUID id) throws NotFoundException {
		return raccolteRepo.findById(id).orElseThrow(() -> new NotFoundException("Raccolta non trovata!"));

	}
	
	public Raccolta findByNome(String nome) throws NotFoundException {
		return raccolteRepo.findByNome(nome)
				.orElseThrow(() -> new NotFoundException("Nessuna raccolta " + nome + " trovata"));
	}
	
	public Raccolta createRaccolta(RaccoltaPayload racc) {
		raccolteRepo.findByNome(racc.getNome()).ifPresent(r -> {
			throw new BadRequestException("La raccolta " + 
					racc.getNome() + " è stata già inserita.");
		});
		Raccolta newRacc = new Raccolta(racc.getNome());
		return raccolteRepo.save(newRacc);
	}
	
	public Raccolta updateRaccolta(UUID id, RaccoltaPayload racc) {
		Raccolta found = this.findById(id);
		found.setNome(racc.getNome());
		return raccolteRepo.save(found);
	}

	public void deleteRaccolta(UUID id) throws NotFoundException {
		Raccolta found = this.findById(id);
		raccolteRepo.delete(found);
	}
}
