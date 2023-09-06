import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private countSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.countSubject.asObservable();

  constructor() { }

  incrementCartCount() {
    const currentCount = this.countSubject.value;
    this.countSubject.next(currentCount + 1)
  }

  decrementCartCount() {
    const currentCount = this.countSubject.value;
    this.countSubject.next(currentCount - 1);
  }
}
