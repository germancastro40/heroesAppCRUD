import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
})
export class ListPageComponent implements OnInit {

  constructor(private heroesService: HeroesService) {}

  public heroes:Hero[] = []

  ngOnInit(): void {
    this.heroesService.getHeroes()
    .subscribe( heroes => this.heroes = heroes )
    console.log(this.heroes);
  }


}
