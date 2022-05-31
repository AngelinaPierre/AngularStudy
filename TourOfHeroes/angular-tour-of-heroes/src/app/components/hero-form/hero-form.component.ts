import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero';
import { HeroService } from 'src/app/services/hero.service';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {
  hero: Hero | undefined;
  heroes: Hero[] = [];

  powers = [
    'Really Smart',
    'Super Flexible',
    'Super Hot',
    'Weather Changer'
  ];

  model = new Hero(18,'Dr.IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;
  onSubmit() {
    this.submitted = true;
  }

  constructor(
    private heroService: HeroService,
    private location: Location,
  ) { }

  ngOnInit(): void {
  }

  // go back method for button in template
  goBack(): void {
    this.location.back();
  }

  newHero(){
    this.model = new Hero(42,'','');
  }

  add(hero: Hero): void {
    // console.log(this.model);
    this.model = hero;
    // console.log(this.model);
    if (this.model) {
      this.heroService.addHero(this.model)
      .subscribe(() => this.goBack());
    }
  }
}
