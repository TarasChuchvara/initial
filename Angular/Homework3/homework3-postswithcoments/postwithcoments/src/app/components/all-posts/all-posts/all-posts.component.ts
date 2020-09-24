import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../../models/post";
import {PostService} from "../../../services/post.service";

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent {
posts:any[];


  constructor(private postSevice:PostService) {
    this.postSevice.getComents().subscribe(value => this.posts=value)
  }




}
