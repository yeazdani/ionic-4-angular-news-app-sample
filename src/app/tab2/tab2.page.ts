import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getLocaleDateFormat } from '@angular/common';
import { AppService } from '../app.service';
import { Subscription } from 'rxjs';
import { AlertController } from '@ionic/angular';

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
    private appService: AppService,
    private alertController: AlertController,
    private route: Router
  ) { }

  ngOnInit() {

  }

  ionViewDidEnter() {
    this.paramSubscription = this.router.paramMap.subscribe(
      param => {
        if (!param.get('id')) {
          this.createAlert();
        } else {
          const id = param.get('id');
          this.getData(id);
        }
      }
    );
  }

  getData(id) {
    this.appService.getData().subscribe(
      res => {
        this.article = res.articles[id];
      }
    );
  }

  ionViewDidLeave() {
    this.paramSubscription.unsubscribe();
  }

  createAlert() {
    this.alertController.create({
      header: 'Click Any News',
      message: 'No news to show as you did not click any news list',
      buttons: [{
        text: 'Go Back',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          this.route.navigate(['/tabs/news-feed']);
        }
      }]
    }).then(alert => {
      alert.present();
    });
  }

}


