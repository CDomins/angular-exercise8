import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent {
  @Input('blogs') blog: Blog | undefined;
  @Output() editEmitter: EventEmitter<Blog> = new EventEmitter();
  @Output() deleteEmitter: EventEmitter<Blog> = new EventEmitter();

  edit = (blog: Blog) => {
    this.editEmitter.emit(blog);
  };

  delete = (blog: Blog) => {
    this.deleteEmitter.emit(blog);
  }
}
