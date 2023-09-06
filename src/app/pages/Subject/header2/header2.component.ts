import { Component } from '@angular/core';
import { SubjectSimplesService } from '../subject-simples.service';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css'],
})
export class Header2Component {
  receivedData = '';

  constructor(private service: SubjectSimplesService) {}

  ngOnInit() {
    this.service.getData().subscribe((data) => {
      this.receivedData = data;
    });
    this.printar();
    this.printar2();
    this.printar3();
  }

  printar() {
    const subject = new Subject<number>(); //declarei o subject

    subject.subscribe((x) => console.log('subject' + x)); //me inscrevi
    subject.next(1); //como to inscrito nele e ouve uma alteração ele vai printar na tela essa alteração.
    //se a linha de cima tivesse trocada com o do console, nao funcionaria, pq taria me inscrevendo somente dps que alterou o numero
  }

  printar2() {
    const subject = new Subject<number>();

    subject.next(600);
    subject.subscribe((x) => console.log('subject' + x));
    subject.next(13); //vai printar 13 pq me inscrevi depois
  }

  //SUBJECT BEHAVIOR


  printar3() {
    const behavior = new BehaviorSubject<number>(0);

    behavior.next(200);
    behavior.subscribe(x => console.log('BEHAVIOR' + x))
    behavior.next(15);
  }
}
