import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lazy-child',
  templateUrl: './lazy-child.component.html',
  styleUrls: ['./lazy-child.component.styl']
})
export class LazyChildComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
