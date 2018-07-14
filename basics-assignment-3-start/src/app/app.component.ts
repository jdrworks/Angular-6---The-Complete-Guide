import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	display = false;
	logs = [];

	toggleDisplay() {
		this.display = this.display ? false : true;
		this.logs.push(Date.now());
	}
}
