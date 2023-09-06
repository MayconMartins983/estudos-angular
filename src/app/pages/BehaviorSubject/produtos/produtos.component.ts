import { Component } from '@angular/core';
import { SubjectService } from 'src/app/pages/BehaviorSubject/subject.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent {
  constructor(private service: SubjectService) {}

  aumentar() {
    this.service.incrementCartCount();
  }

  diminuir() {
    this.service.decrementCartCount();
  }
}
