package it.greenfutureproject.com.payload;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class SuccessAuthPayload {
	private String accessToken;
}
