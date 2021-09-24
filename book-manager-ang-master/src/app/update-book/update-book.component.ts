import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Book } from 'app/model/book';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { GenericService } from 'app/services/generic.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  public id: number;
  public data: any;
  public books: Book[];
  public exist = false;

  constructor(private router: Router, private route: ActivatedRoute, private genericServ: GenericService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = + params['id'];
    });

    this.loadBooks();

  }

  loadBooks() {
    this.genericServ.executeGetWithParams(this.id)
      .subscribe((res: Response) => {

        this.books = res.json();

        if (this.books != null) {
          this.data = res.json();
          this.exist = true;
        }

      });
  }

  updateBook(book) {
    this.genericServ.executeUpdate(book, this.id).subscribe(() => this.router.navigate(['/']));
  }

}
