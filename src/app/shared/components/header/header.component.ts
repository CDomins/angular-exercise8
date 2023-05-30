import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/modules/blog/services/blog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router, private blogService: BlogService) {}

  add = () => {
    this.router.navigate([`${this.router.url}/form`]);
  }

  deleteAll = () => {
    this.router.navigate([`${this.router.url}/form`]);
  }
}
