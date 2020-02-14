import { Injectable } from "@angular/core";
import { baseUrl, headers } from "./api.config";
import { HttpClient } from "@angular/common/http";
import { Category, News } from "./interfaces";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http
      .get<Category[]>(`${baseUrl}/categories`, headers)
      .pipe(map(response => response["list"]));
  }

  getNews(categoryId: number) {
    return this.http
      .get<News[]>(`${baseUrl}/categories/${categoryId}/news`, headers)
      .pipe(map(response => response["list"]));
  }
}
