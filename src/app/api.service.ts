import { Injectable } from "@angular/core";
import { baseUrl, headers } from "./api.config";
import { HttpClient } from "@angular/common/http";
import { Category, News, Article } from "./interfaces";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http
      .get<Category[]>(`${baseUrl}/categories`, headers)
      .pipe(map(response => response["list"]));
  }

  getNews(id: number, page: number): Observable<News[]> {
    return this.http
      .get<News[]>(`${baseUrl}/categories/${id}/news?page=${page}`, headers)
      .pipe(map(response => response["list"]));
  }

  getArticle(id: number): Observable<Article> {
    return this.http
      .get<Article>(`${baseUrl}/details?id=${id}`, headers)
      .pipe(map(response => response["news"]));
  }
}
