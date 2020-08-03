import { Component, OnInit } from '@angular/core';
import { Hero, Champion } from '../hero';
import { HeroService } from "../hero.service";
import { MessageService } from "../message.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  // champion: Champion = {
  //   id: 2,
  //   name: 'Jack',
  //   match: 'FILA World Champion'
  // };

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelected(hero: Hero) {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero ID=${hero.id}  Name=${hero.name}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(subs_heroes => this.heroes = subs_heroes)
  }
}
