import { Article } from '../models/Article';

export type Service  = {
    pictureName: String;
    serviceName: String;
    serviceDescription: String;
    article: Article;
  }