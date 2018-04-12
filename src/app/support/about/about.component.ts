import { Component, OnInit } from '@angular/core';
import { SystemService } from '@services/system.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private sys: SystemService,
  ) { }

  ngOnInit() {
  }

}
