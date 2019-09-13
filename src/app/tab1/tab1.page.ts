import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  articles: [] = [];
  loading = true;
  constructor(
    private appService: AppService,
    private route: Router
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.appService.getData().subscribe(
      res => {
        this.articles = res.articles;
        console.log(this.articles);
        this.loading = false;
      }
    );
  }
  onClick(i) {
    this.route.navigate(['/tabs/details',i]);
  }
}
