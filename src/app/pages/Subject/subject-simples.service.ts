import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectSimplesService {

  private subject = new Subject<string>();

  constructor() { }

  sendData(data: string) {
    this.subject.next('primeiro valor') // nao sera impresso devido, ainda nao estar inscrito.
    this.subject.next(data)
  }

  getData() {
    return this.subject.asObservable();
  }
}
