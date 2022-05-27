import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  titles: String[] = [];
  images: String[] = []

  constructor(private service : ArticleService) { }

  ngOnInit(): void {

    this.service.getPosts().subscribe(result=> {
      this.titles = result.map(article=>{
        return article.title;
      })
    });
    this.images[0]= 'https://picsum.photos/1280/720?random=' +
    Math.floor(Math.random() * 100);
    this.images[1]= 'https://picsum.photos/1280/720?random=' +
    Math.floor(Math.random() * 100);
    this.images[2]= 'https://picsum.photos/1280/720?random=' +
    Math.floor(Math.random() * 100);
    this.images[3]= 'https://picsum.photos/1280/720?random=' +
    Math.floor(Math.random() * 100);
  }

}
