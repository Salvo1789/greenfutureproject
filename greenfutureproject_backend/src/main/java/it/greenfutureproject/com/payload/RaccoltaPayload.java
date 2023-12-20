package it.greenfutureproject.com.payload;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RaccoltaPayload {
	
	@NotNull(message="Inserisci il nome della raccolta.")
	protected String nome;

}
