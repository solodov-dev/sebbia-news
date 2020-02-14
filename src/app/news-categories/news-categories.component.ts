import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Category} from '../interfaces';

@Component({
  selector: 'app-news-categories',
  templateUrl: './news-categories.component.html',
  styleUrls: ['./news-categories.component.css']
})
export class NewsCategoriesComponent implements OnInit {
  categories: Category[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.apiService.getCategories().subscribe((res: Category[]) => this.categories = res);
  }

}
