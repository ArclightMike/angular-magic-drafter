import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-booster-pack',
  templateUrl: './booster-pack.component.html',
  styleUrls: ['./booster-pack.component.css']
})
export class BoosterPackComponent implements OnInit {

  commons: Card[];
  uncommons: Card[];
  rares: Card[];
  mythics: Card[];

  constructor(private cardService: CardService) { }

  ngOnInit() {
    //This is a 50/50 chance, which is not correct.  ToDo: Fix the math.
    var MythicOrRare = Math.round(Math.random());
    if (MythicOrRare === 0){
      this.getMythics();
    }
    else{
      this.getRares();
    }
    this.getUncommons();
    this.getCommons();
  }

  getCommons(): void {
    //Get 10 random commons.
    this.cardService.getCommons().subscribe(cards => this.commons = cards.sort(() => .5 - Math.random()).slice(0,10));
  }

  getUncommons(): void {
    //Get 3 random uncommons.
    this.cardService.getUncommons().subscribe(cards => this.uncommons = cards.sort(() => .5 - Math.random()).slice(0,3));
  }

  getRares(): void {
    //Get 1 random rare.
    this.cardService.getRares().subscribe(cards => this.rares = cards.sort(() => .5 - Math.random()).slice(0,1));
  }

  getMythics(): void {
    //Get 1 random mythic.
    this.cardService.getMythics().subscribe(cards => this.mythics = cards.sort(() => .5 - Math.random()).slice(0,1));
  }

}