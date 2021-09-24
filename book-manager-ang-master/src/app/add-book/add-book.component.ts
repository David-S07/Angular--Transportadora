import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Book } from 'app/model/book';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { GenericService } from 'app/services/generic.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private router: Router, private genericServ: GenericService) { }
  public confirmationString: string = "Novo rastreio adicionado";
  public isAdded: boolean = false; 

  ngOnInit() {
  }

  rastreios = [];
  
  addBook(book){ 
    console.log(book)
    this.rastreios.push({id:this.rastreios.length+4, transportadora:book.transportadora, nome: book.cliente, codigoRastreio:book.codigodeRastreio, status:book.status});
    this.router.navigateByUrl('');
  };  
}