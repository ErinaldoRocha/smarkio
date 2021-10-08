import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})

export class DetalhesComponent implements OnInit {

  dataSource: any = [];
  ano: string ='';
  

  constructor(private service: AppService,
    private route: ActivatedRoute,
    private router: Router) {
    const id: string = this.route.snapshot.params['id'];
    this.service.filmeId(id).then(response => {
      this.dataSource = response;
      this.ano = this.dataSource.release_date;
      this.ano = this.ano.substr(0,4);
      console.log(response);
    }).catch(error => {
      console.log(error);
    });

   }

  ngOnInit(): void {
  }
  
  home(){
    this.router.navigate(['/']);
   }
}
