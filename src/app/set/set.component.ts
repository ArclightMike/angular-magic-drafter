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
    //Get all commons.
  this.cardService.getCommons().subscribe(cards => this.commons = cards);
  }

  getUncommons(): void {
    //Get all uncommons.
  this.cardService.getUncommons().subscribe(cards => this.uncommons = cards);
  }

  getRares(): void {
    //Get all rares.
  this.cardService.getRares().subscribe(cards => this.rares = cards);
  }

  getMythics(): void {
    //Get all mythics.
  this.cardService.getMythics().subscribe(cards => this.mythics = cards);
  }
}