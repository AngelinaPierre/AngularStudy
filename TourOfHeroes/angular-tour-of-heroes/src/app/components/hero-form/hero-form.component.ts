import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero';
import { HeroService } from 'src/app/services/hero.service';
import { Location } from '@angular/common';


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

  add(): void {
    if (this.model) {
      this.heroService.addHero(this.model)
      .subscribe(() => this.goBack());
    }
  }


}
