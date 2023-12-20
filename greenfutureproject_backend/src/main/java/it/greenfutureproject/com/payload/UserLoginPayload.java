package it.greenfutureproject.com.payload;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserLoginPayload {
	
	String email;
	String password;
}
