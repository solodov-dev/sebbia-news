import { Component, OnInit } from "@angular/core";
import { Article } from "../interfaces";
import { ApiService } from "../api.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"]
})
export class ArticleComponent implements OnInit {
  article: Article;
  state: Object;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.state = this.location.getState();
    this.getArticle();
  }

  getArticle(): void {
    this.route.paramMap.subscribe(params => {
      this.apiService
        .getArticle(+params.get("id"))
        .subscribe(res => (this.article = res));
    });
  }

  getArticleInfo(key: string): string {
    if (this.state[key]) {
      return this.state[key];
    } else {
      return this.article[key];
    }
  }
}
