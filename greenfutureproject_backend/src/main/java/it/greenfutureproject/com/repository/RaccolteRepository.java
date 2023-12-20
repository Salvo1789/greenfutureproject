package it.greenfutureproject.com.repository;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import it.greenfutureproject.com.model.Raccolta;

@Repository
public interface RaccolteRepository extends JpaRepository<Raccolta, UUID> {
	
	Optional<Raccolta> findByNome(String nome);
	
	Optional<Raccolta> findByid(UUID id);
}
