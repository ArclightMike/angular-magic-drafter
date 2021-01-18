import { Injectable } from '@angular/core';
import { Card } from './card';
import { COMMONS } from './mock-commons';
import { UNCOMMONS } from './mock-uncommons';
import { RARES } from './mock-rares';
import { MYTHICS } from './mock-mythics';
import { Observable, of } from 'rxjs';

@Injectable()
export class CardService {

  getSet(): Observable<Card[]> {
    //There is probably a way to combine these into a set.
  return of(COMMONS);
}

  getCommons(): Observable<Card[]> {
    //
  return of(COMMONS);
}

  getUncommons(): Observable<Card[]> {
    //
  return of(UNCOMMONS);
}

  getRares(): Observable<Card[]> {
    //
  return of(RARES);
}

  getMythics(): Observable<Card[]> {
    //
  return of(MYTHICS);
}

  constructor() { }

}