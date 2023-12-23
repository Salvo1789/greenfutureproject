package it.greenfutureproject.com.payload;

import java.util.UUID;

import it.greenfutureproject.com.model.Raccolta;
import it.greenfutureproject.com.model.User;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MaterialePayload {
	
	@NotNull(message="Inserisci il nome del materiale.")
	protected String nome;
	@NotNull(message="Inserisci una descrizione del materiale.")
	protected String note;
	@NotNull(message="Raccolta obbligatoria.")
	protected String raccolta;
	@NotNull(message="User obbligatorio.")
	protected UUID user;
}
