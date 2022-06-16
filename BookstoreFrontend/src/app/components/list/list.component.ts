import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  books: any;
  currentBook:any;
  currentIndex = -1;
  searchTitle = '';

  constructor(private booksService: BooksService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  // Get list
  getAllBooks(): void {
    this.booksService.list()
      .subscribe(
        (books: any) => {
          this.books = books;
          console.log(this.books)
        },
        (error: any) => {
          console.log(error);
        });
  }

  // Delete action
  deleteBook(id:number){
    this.booksService.deleteBook(id)
    .subscribe(
      () => {
       // this.getAllBooks();
        console.log('book deleted')
        //this.router.navigate(['/books']);
        setTimeout(() => {this.getAllBooks()}, 1000);

      },
      error => {
        console.log(error);
      });

    /* this.booksService.deleteBook(id)
    .subscribe(
      () => {
        console.log('book deleted');
        //this.getAllBooks();
        this.router.navigate(['/books']);
        //setTimeout(() => {this.getAllBooks()}, 1000);
      },
      error => {
        console.log(error);
      }); */
  }

  
 /*  // Search items
  searchByTitle(): void {
    this.booksService.filterByTitle(this.searchTitle)
      .subscribe(
        books => {
          this.books = books;
        },
        error => {
          console.log(error);
        });
  } */

}

/*  */
