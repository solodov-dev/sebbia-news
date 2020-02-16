import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { News } from "../interfaces";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-news-list",
  templateUrl: "./news-list.component.html",
  styleUrls: ["./news-list.component.css"]
})
export class NewsListComponent implements OnInit{
  currentPage: number;
  news: News[] = [];

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.currentPage = 0;
    this.getNews(this.currentPage);
  }

  getNews(page: number): void {
    this.route.paramMap.subscribe(params => {
      this.apiService
        .getNews(+params.get("id"), page)
        .subscribe((res: News[]) => (this.news = res));
    });
  }

  changePage(num: number): void {
    this.currentPage = this.currentPage + num;
    this.getNews(this.currentPage);
  }
}
