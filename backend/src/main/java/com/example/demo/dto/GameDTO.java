package com.example.demo.dto;

import java.io.Serializable;

import com.example.demo.entities.Game;
import com.example.demo.entities.enums.Plataforma;

public class GameDTO implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	 

	
	
	private Long id;
	private String title;
	private Plataforma platform;
	
	public GameDTO() {
		
	}
	
	public GameDTO(Game entity) {
		id= entity.getId();
		title= entity.getTitle();
		platform=entity.getPlataform();
		}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Plataforma getPlatform() {
		return platform;
	}

	public void setPlatform(Plataforma platform) {
		this.platform = platform;
	}
	
	
}
