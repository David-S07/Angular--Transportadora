import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
 

import { Router } from '@angular/router';
import { Book } from 'app/model/book';
import { GenericService } from 'app/services/generic.service';

@Component({
  selector: 'app-home',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  
  rastreios =[];
 
  constructor(route: Router, private genericServ: GenericService) { }
  
  public books: Book[] = [];

  filtradoString = "";
  filtrado;
  
  ngOnInit() {

    this.rastreios = [
      {id:1, nome:'David Santana', classTransporte: 'Express', codigoRastreio:2357, status:'Rota de entrega'},
      {id:2, nome:'Lidiane Santana', classTransporte: 'Comum', codigoRastreio:7965, status:'Em separação no estoque'},
      {id:3, nome:'Gilberto Alves', classTransporte: 'Express', codigoRastreio:7085, status:'Entregue'}
    ];
    
    this.onFilterChange();
  }

  onFilterChange() {
    this.filtrado = this.rastreios.filter((invoice) => this.isMatch(invoice));
  }

  isMatch(item) {
    if (item instanceof Object) {
      return Object.keys(item).some((k) => this.isMatch(item[k].toString().toLowerCase()));
    } else {
      return item.toString().indexOf(this.filtradoString.toLowerCase()) > -1
    }
  }

  
  

  listBooks(){
  
    this.genericServ.executeGet().subscribe((res: Book[]) => { 
      this.books = res;
    }

    );

  }
   
  deleteBook(id) {
    if (confirm("Você tem certeza?")) { 
      const index = this.filtrado.indexOf(id);
      if (index > -1) {
        this.filtrado.splice(index, 1);
      }
    }
    
  }
 
}
