package it.greenfutureproject.com.model;

import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.util.List;
import java.util.ArrayList;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="raccolte")
public class Raccolta {
	@Id
	@GeneratedValue
	private UUID id;
	private String nome;
	
	@OneToMany(mappedBy = "raccolta")
	@JsonManagedReference
	public List<Materiale> listaMateriali = new ArrayList<>();

	public Raccolta(String nome) {
		super();
		this.nome = nome;
	}
	
	
}
