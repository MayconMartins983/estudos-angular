import { Component } from '@angular/core';
import { SubjectSimplesService } from '../subject-simples.service';

@Component({
  selector: 'app-produtos2',
  templateUrl: './produtos2.component.html',
  styleUrls: ['./produtos2.component.css'],
})
export class Produtos2Component {
  constructor(private service: SubjectSimplesService) {}

  message: string = '';

  sendMessage() {
    this.service.sendData(this.message);
  }
}
