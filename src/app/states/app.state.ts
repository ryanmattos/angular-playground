import { Book } from '../models/book.model'

export interface AppState {
   books: ReadonlyArray<Book>
   collection: ReadonlyArray<string>
}