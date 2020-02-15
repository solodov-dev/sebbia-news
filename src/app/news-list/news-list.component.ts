import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { News } from "../interfaces";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-news-list",
  templateUrl: "./news-list.component.html",
  styleUrls: ["./news-list.component.css"]
})
export class NewsListComponent implements OnInit {
  news: News[];

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.apiService
        .getNews(+params.get("id"))
        .subscribe(res => (this.news = res));
    });
  }
}
