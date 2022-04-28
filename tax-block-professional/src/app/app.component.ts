import { Component } from '@angular/core';

interface Service {
  pictureName: String;
  serviceName: String;
  serviceDescription: String;
  article: Article;
}

interface Article {
  topics: Topic[];
}

interface Topic {
  paragraghs: Paragragh[];
}

interface Paragragh {
  line: String;
  points: String[];
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'a';
}
