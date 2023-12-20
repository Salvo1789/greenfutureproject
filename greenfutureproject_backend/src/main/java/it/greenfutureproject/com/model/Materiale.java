package it.greenfutureproject.com.model;

import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="materiali")
public class Materiale {
	@Id
	@GeneratedValue
	private UUID id;
	private String nome;
	private String note;
	
	@ManyToOne
	private Raccolta raccolta;
	@ManyToOne
	private User user;
	
	public Materiale(String nome, String note) {
		super();
		this.nome = nome;
		this.note = note;
	}
	
	
}
