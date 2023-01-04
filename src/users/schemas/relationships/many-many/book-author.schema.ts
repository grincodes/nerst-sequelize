import { Table, ForeignKey, Column, Model } from 'sequelize-typescript';
import { Author } from './author.schema';
import { Book } from './book.schema';

@Table
export class BookAuthor extends Model {
  @ForeignKey(() => Book)
  @Column
  bookId: number;

  @ForeignKey(() => Author)
  @Column
  authorId: number;
}
