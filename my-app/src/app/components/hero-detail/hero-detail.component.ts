import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from 'src/app/services/hero/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  // property
  @Input() hero?: Hero;


  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
  ) { console.log('Constructor building');}

  ngOnInit(): void {
    console.log('ngOnInit active');
    this.getHero();
  }

  getHero(): void {
    console.log('Getting Hero by id');
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    console.log('previous page');
    this.location.back();
  }

  save(): void {
    if(this.hero){
      console.log('updating hero');
      this.heroService.updateHero(this.hero)
        .subscribe(
          () => this.goBack()
        );
    }
  }
}
