import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.css']
})
export class SetComponent implements OnInit {

  commons: Card[];
  uncommons: Card[];
  rares: Card[];
  mythics: Card[];

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.getMythics();
    this.getRares();
    this.getUncommons();
    this.getCommons();
  }

  getCommons(): void {
  this.cardService.getCommons().subscribe(cards => this.commons = cards);
  }

  getUncommons(): void {
  this.cardService.getUncommons().subscribe(cards => this.uncommons = cards);
  }

  getRares(): void {
  this.cardService.getRares().subscribe(cards => this.rares = cards);
  }

  getMythics(): void {
  this.cardService.getMythics().subscribe(cards => this.mythics = cards);
  }
}