import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-select-autor',
  templateUrl: './select-autor.component.html',
  styleUrls: ['./select-autor.component.css']
})
export class SelectAutorComponent implements OnInit {
  authors: string[] = [];
  constructor(private service : ArticleService) { }

  ngOnInit(): void {
    // imi extrage o lista de autori si din ea pe rand extrage nume autoriului
    // folosesc subscribe pentru a sincroniza informatia (async-await)
    this.service.getAuthors().subscribe(result=>{
      this.authors = result.map(author=>{
          return author.name;
      });
    });
  }

}
