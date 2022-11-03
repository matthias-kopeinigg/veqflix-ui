import { ChangeDetectionStrategy, Component, Input, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

enum ActiveView {

  LANDING,
  SIGN_IN,
  SIGN_UP,
  FORGOT_PASSWORD

}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {

  username: string = '';
  email: string = '';
  password: string = '';

  @Input() activeView: ActiveView = ActiveView.LANDING;
  activeViews = ActiveView;

  updateActiveView(activeView: ActiveView) {
    this.activeView = activeView;
  }

  updateActiveViewWithForm(activeView: ActiveView, formClass : NgForm) {
    this.activeView = activeView;
    formClass.resetForm();
  }

}
