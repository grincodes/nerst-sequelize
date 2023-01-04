import { Table, Model, BelongsToMany } from 'sequelize-typescript';
import { BookAuthor } from './book-author.schema';
import { Book } from './book.schema';

@Table
export class Author extends Model {
  @BelongsToMany(() => Book, () => BookAuthor)
  books: Book[];
}
