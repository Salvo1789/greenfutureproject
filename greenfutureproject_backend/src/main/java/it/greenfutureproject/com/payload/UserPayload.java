package it.greenfutureproject.com.payload;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserPayload {
	
	@NotNull(message = "Inserisci lo username.")
	String username;
	@NotNull(message = "Inserisci la password.")
	String password;
	@Email(message = "Inserisci l'indirizzo email.")
	String email;
	@NotNull(message = "Inserisci il nome.")
	String nome;
	@NotNull(message = "Inserisci il cognome.")
	String cognome;
}
