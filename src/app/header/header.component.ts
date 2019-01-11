import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  navLinks: any[] = [
    {text: 'Home', path: '/home'},
    {text: 'Projects', path: '/projects'},
    {text: 'Contact Me', path: '/contact'},
    {text: 'About Me', path: '/about'}
  ];
  ngOnInit() {
  }

}
