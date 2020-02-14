import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {News} from '../interfaces';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  news: News[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  getNews(): void {
    this.apiService.getNews().subscribe((res: News[]) => this.news = res);
  }

}
