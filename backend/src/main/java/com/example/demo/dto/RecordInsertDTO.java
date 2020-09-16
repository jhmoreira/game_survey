package com.example.demo.dto;

import java.io.Serializable;

public class RecordInsertDTO implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	 

	
	
	private String nome;
	private Integer age;
	private Long gameId;
	
	public RecordInsertDTO() {
		
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public Long getGameId() {
		return gameId;
	}

	public void setGameId(Long gameId) {
		this.gameId = gameId;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	
	
	
}
