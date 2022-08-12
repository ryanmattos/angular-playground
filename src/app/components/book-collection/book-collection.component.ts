import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.scss']
})
export class BookCollectionComponent implements OnInit {
  @Input() books: ReadonlyArray<Book | undefined> | null = [];
  @Output() remove = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
