import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonText} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonText],
})
export class HomePage {
  constructor() {}
}
