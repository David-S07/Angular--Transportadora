import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
 

import { Router } from '@angular/router';
import { Book } from 'app/model/book';
import { GenericService } from 'app/services/generic.service';

@Component({
  selector: 'app-home',
  templateUrl: './book-cliente.component.html',
  styleUrls: ['./book-cliente.component.css']
})
export class BookClienteComponent implements OnInit {
  
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
  }

  onFilterChange() {
    
    if(this.filtradoString.length < 4) {
      this.filtrado = [];
    } else {
      this.filtrado = this.rastreios.filter((invoice) => this.isMatch(invoice));
    } 
  }

  isMatch(item) {
    if (item instanceof Object) {
      return Object.keys(item).some((k) => this.isMatch(item['codigoRastreio'].toString().toLowerCase()));
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

      const index = this.rastreios.indexOf(id);
    if (index > -1) {
      this.rastreios.splice(index, 1);
}

    }
    
  }
 
}
