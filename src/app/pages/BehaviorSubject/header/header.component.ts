import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/pages/BehaviorSubject/subject.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private service: SubjectService) {}

  valor: number = 0;

  ngOnInit() {
    this.service.cartCount$.subscribe((count) => {
      this.valor = count;
    });
  }
}
