import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../../model/post';

@Component({
  selector: 'app-childpost',
  templateUrl: './childpost.component.html',
  styleUrls: ['./childpost.component.css']
})
export class ChildpostComponent implements OnInit {
  divDetails:any = '';
  @Input ("postHTML") postTS;
  @Output ("editHTML") editTS = new EventEmitter;
  @Output ("deleteHTML") deleteTS = new EventEmitter;
  replyArray:Array <Post> = Array <Post>();
  replyObject:Post = new Post();

  constructor() { }

  ngOnInit() { }
  
  edit(p, i){
    let data = { post:p, id:i };
    this.editTS.emit(data);
  }
  delete(i){
    this.deleteTS.emit(i);
  }
  reply(button){
    this.divDetails = button.target.nextSibling;
    this.divDetails.style.display = "block";
    console.log(button.target.nextSibling);
  }
  submit(reply:Post, id){
    this.postTS[id].reply.push(reply);
    this.divDetails.style.display = "none";
    this.replyObject = new Post;
  }
  // editReply(post:Post, id:number){
  //   this.postTS[id].reply.name = post.name;
  //   this.postTS[id].reply.post = post.post;
  //   this.postTS[id].reply.id = id;
  //   this.divDetails.style.display = "block";
  //   console.log(this.postTS[id].reply);
  // }
  // deleteReply(id:number){
  //   this.postTS[id].reply.splice(id,1);
  // }

}

