import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataSource: any = [];
  p: number = 0;
  s: number = 1;
  t: number = 2;
  q: number = 4;

  constructor(private service: AppService,
    private router: Router) { }

  ngOnInit(): void {

    this.service.lista().then(response => {
      this.dataSource = response;
      console.log(this.dataSource);
      this.dataSource = this.dataSource.results;
     }).catch(error => {
     console.log(error);
   });


  }

 detalhes(id: string){
  this.router.navigate(['/detalhes', id]);
 }

 direita(){
this.p = this.p+1;
this.s = this.s+1;
this.t = this.t+1;
this.q = this.q+1;
 }

 esquerda(){
  this.p = this.p-1;
  this.s = this.s-1;
  this.t = this.t-1;
  this.q = this.q-1;
 }

}
