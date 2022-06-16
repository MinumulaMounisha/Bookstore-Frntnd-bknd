import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  currentBook: any;
  message = '';

  constructor(  private booksService: BooksService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getBook(this.route.snapshot.paramMap.get('id'));
  }
  getBook(id: string | null): void {
    this.booksService.getBook(id)
      .subscribe(
        (book: null) => {
          this.currentBook = book;
          console.log(book);
        },
        (error: any) => {
          console.log(error);
        });
  }

  setAvailableStatus(status: any): void {
    const data = {
      title: this.currentBook.title,
      description: this.currentBook.description,
      available: status
    };

    this.booksService.updateBook(this.currentBook._id, data)
      .subscribe(
        response => {
          this.currentBook.available = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateBook(form:NgForm): void {
    this.booksService.updateBook(this.currentBook._id, this.currentBook)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The product was updated!';
          this.reset(form);
          this.router.navigate(['/books']);
        },
        error => {
          console.log(error);
        });
  }

  deleteBook(): void {
    this.booksService.deleteBook(this.currentBook._id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/books']);
        },
        error => {
          console.log(error);
        });
  }

  reset(form:NgForm){
    form.resetForm();  
  }

}
