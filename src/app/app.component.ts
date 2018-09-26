import { Component, OnInit, ViewChild } from '@angular/core';
import { Post } from '../model/post';
import { NgForm } from '@angular/forms'
import { DatePipe } from '../../node_modules/@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  DatePipe = DatePipe;
  @ViewChild ('parentformHTML') parentformTS:NgForm;
  postArray: Array <Post> = Array <Post>();
  postObject: Post = new Post();
  ngOnInit(){
    // this.postObject.name = "priya";
    // this.postObject.post = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
  }
  submit(post:Post){
    if(this.postObject.id == null)
      {
        this.postArray.push(post)
      }
    else
      {
        this.postArray.splice(this.postObject.id, 1, this.postObject)
      }
    this.postObject = new Post;
  }
  edit(data){
    this.postObject.name = data.post.name;
    this.postObject.post = data.post.post;
    this.postObject.id = data.id; 
  }
  delete(i){
    this.postArray.splice(i,1);
  }
}
