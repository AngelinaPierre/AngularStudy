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
  ) { }

  ngOnInit(): void {
  }

}
