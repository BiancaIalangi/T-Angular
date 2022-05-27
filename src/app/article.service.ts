import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import {Author} from './author'
import {Article} from './article'
import {Post} from './post'

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  authors: String[] = [];
  articles: String[] = [];
  titles: String[] = [];
  finalTitle: String[] = [];
  
  getAuthors(): Observable<Author[]> {
    // return this.http.get<Author>(url).pipe(
    //   tap(_ => this.log(`fetched hero id=${id}`)),
    //   catchError(this.handleError<Author>(`getAuthor id=${id}`))
    // );
    return this.http
    .get<Author[]>('https://jsonplaceholder.typicode.com/users');
  }

  getAuthorByID(id: number): Observable<Author> {
    return this.http
    .get<Author>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  getPosts(): Observable<Post[]> {
    const posts = this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    return posts;
  }

  getItems() {
    return this.authors;
  }

  constructor(private http:HttpClient) { }
}
