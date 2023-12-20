package it.greenfutureproject.com.model;

import java.util.Collection;
import java.util.List;
import java.util.UUID;
import java.util.ArrayList;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

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
@Table(name="users")
public class User implements UserDetails {
	@Id
	@GeneratedValue
	private UUID id;
	private String username;
	private String password;
	private String email;
	private String nome;
	private String cognome;
	
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	private List<Materiale> materialiCaricati = new ArrayList<>();
	
	public User(String username, String password, String email,  String nome, String cognome) {
		super();
		this.username = username;
		this.email = email;
		this.password = password;
		this.nome = nome;
		this.cognome = cognome;
		
	}
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return false;
	}
	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return false;
	}
	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return false;
	}
	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return false;
	}
}
