import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/index';
@Component({
  templateUrl: './public.component.html'
})
export class PublicComponent implements OnInit {
  constructor(public authenticationService: AuthenticationService) {}
  ngOnInit() {}
}
