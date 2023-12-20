package it.greenfutureproject.com.payload;

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
}
