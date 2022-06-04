import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() articleDetail:any;
  article:any = null;

  constructor() {
    
   }

  ngOnInit(): void {
    
    // this.article = this.serviceInfo;
    this.article = this.articleDetail;
    console.log(this.article);
  }

}
