import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero';
import { HEROES } from 'src/app/interfaces/mock-heroes';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
    console.log("selected")
  }


  constructor() { }

  ngOnInit(): void {
  }

}
