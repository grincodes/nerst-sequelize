import { Column, Table, Model, BelongsToMany } from 'sequelize-typescript';
import { Author } from './author.schema';
import { BookAuthor } from './book-author.schema';

@Table
export class Book extends Model {
  @BelongsToMany(() => Author, () => BookAuthor)
  authors: Author[];
}
