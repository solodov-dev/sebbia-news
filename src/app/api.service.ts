import { Injectable } from "@angular/core";
import { baseUrl, headers } from "./api.config";
import { HttpClient } from "@angular/common/http";
import { Category, News } from "./interfaces";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

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

  getNews(id: number): Observable<News[]> {
    return this.http
      .get<News[]>(`${baseUrl}/categories/${id}/news`, headers)
      .pipe(map(response => response["list"]));
  }
}
