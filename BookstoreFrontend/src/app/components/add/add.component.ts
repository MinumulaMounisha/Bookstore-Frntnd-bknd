import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  
  book = {
    title: '',
    description: '',
    price:''
  };
  isBookAdded = false;

  constructor(private booksService: BooksService,private router: Router) { }

  ngOnInit(): void {
  }

  // Add New
  addBook(): void {
    const data = {
      title: this.book.title,
      description: this.book.description,
      price: this.book.price
    };
    if (!data.title) {
      alert('Please add title!');
      return;
    }

    this.booksService.AddBook(data)
      .subscribe(
        response => {
          console.log(response);
          this.isBookAdded = true;
        },
        error => {
          console.log(error);
        });
  }

  // Reset on adding new
  newBook(): void {
    this.isBookAdded = false;
    this.book = {
      title: '',
      description: '',
      price:''
    };
  }
  Bookslist(){
    this.isBookAdded = false;
    this.router.navigate(['/books']);
  }

}
