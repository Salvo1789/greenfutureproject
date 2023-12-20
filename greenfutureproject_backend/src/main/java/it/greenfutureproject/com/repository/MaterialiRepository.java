package it.greenfutureproject.com.repository;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import it.greenfutureproject.com.model.Materiale;

@Repository
public interface MaterialiRepository extends JpaRepository<Materiale, UUID> {
	
	Optional<Materiale> findByNome(String nome);
	
	Optional<Materiale> findById(UUID id);
	
	@Query("SELECT m from Materiale m where m.raccolta = :raccolta")
	Page<Materiale> findByRaccolta(String raccolta, Pageable pageable);
	
	@Query("SELECT m from Materiale m where m.user = :user")
	Page<Materiale> findByUser(String raccolta, Pageable pageable);
}
