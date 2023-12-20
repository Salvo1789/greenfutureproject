package it.greenfutureproject.com.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.greenfutureproject.com.exceptions.NotFoundException;
import it.greenfutureproject.com.exceptions.UnauthorizedException;
import it.greenfutureproject.com.model.User;
import it.greenfutureproject.com.payload.SuccessAuthPayload;
import it.greenfutureproject.com.payload.UserLoginPayload;
import it.greenfutureproject.com.payload.UserPayload;
import it.greenfutureproject.com.service.UsersService;

@RestController
@RequestMapping("/auth")
public class AuthController {

	@Autowired
	UsersService usersService;

	@Autowired
	private PasswordEncoder bcrypt;

	@PostMapping("/register")
	public ResponseEntity<User> register(@RequestBody @Validated UserPayload body) {
		body.setPassword(bcrypt.encode(body.getPassword()));
		User createdUser = usersService.createUser(body);
		return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
	}

	@PostMapping("/login")
	public ResponseEntity<SuccessAuthPayload> login(@RequestBody UserLoginPayload body)
			throws NotFoundException {

		User user = usersService.findByEmail(body.getEmail());

		String plainPW = body.getPassword();
		String hashedPW = user.getPassword();

		if (!bcrypt.matches(plainPW, hashedPW))
			throw new UnauthorizedException("Credenziali non valide!");

		String token = JWTTools.createToken(user);

		return new ResponseEntity<>(new SuccessAuthPayload(token), HttpStatus.OK);
	}

}
