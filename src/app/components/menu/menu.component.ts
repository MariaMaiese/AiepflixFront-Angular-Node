import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: any[] = [
    {
      url: 'home',
      text: 'Películas',
      icon: 'bi-film'
    },
    {
      url: 'contact',
      text: 'Gifs',
      icon: 'bi-emoji-smile-upside-down'
    },
    {
      url: 'about',
      text: 'Gifs (2)',
      icon: 'bi-emoji-dizzy'
    },
    {
      url: 'mantgif',
      text: 'Mant. Gif',
      icon: 'bi-emoji-laughing'
    },
    {
      url: 'mantenedorpeliculas',
      text: 'Mant. Pelis',
      icon: 'bi-camera-video'
    },
    {
      url: 'mantenedor-generos',
      text: 'Mant. Generos',
      icon: 'bi-camera-reels'
    }


  ];

  constructor(public userService: UserService) { }

  ngOnInit(): void {

  }

}
