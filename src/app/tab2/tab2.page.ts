import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getLocaleDateFormat } from '@angular/common';
import { AppService } from '../app.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  paramSubscription: Subscription;
  article: any = {};
  constructor(
    private router: ActivatedRoute,
    private appService: AppService
  ) { }

  ngOnInit() {
    this.paramSubscription = this.router.paramMap.subscribe(
      param => {
        const id = param.get('id');
        this.getData(id);
      }
    );
  }

  getData(id) {
    this.appService.getData().subscribe(
      res => {
        this.article = res.articles[id];
        console.log(this.article)
      }
    );
  }

  ionViewDidLeave() {
    this.paramSubscription.unsubscribe();
  }
}
