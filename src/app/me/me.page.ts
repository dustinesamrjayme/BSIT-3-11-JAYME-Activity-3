import { Component, OnInit } from '@angular/core';
import { Me } from '../attributes/me';
import { MeService } from '../services/me.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.page.html',
  styleUrls: ['./me.page.scss'],
  standalone: false,
})
export class MePage implements OnInit {
  me: Me | undefined;

  constructor(private meService: MeService) {}

  ngOnInit(): void {
    this.me = this.meService.getMe();
  }
}
