import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {BlogHttpService}from "../blog-http.service";

import {ActivatedRoute, Router} from "@angular/router";
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {
  
  public blogTitle:any='this is a tiger';
  public blogBodyHtml:any;
  public blogDescription:any;
  public blogCategory:any;
  public possibleCategories=["comedy","Drama","Action","Technology"];




  constructor(private _route:ActivatedRoute , private router:Router,private blogHttpService:BlogHttpService,public toastr: ToastrManager) {
   
   }

  ngOnInit(): void {
    }

  public createBlog(): any {
    let blogData = {
      title:this.blogTitle,
      description:this.blogDescription,
      blogBody:this.blogBodyHtml,
      category:this.blogCategory,
    }
  console.log(blogData);
  this.blogHttpService.createBlog(blogData).subscribe(
   
    (      data: { [x: string]: any; })=>{
      console.log("Blog created")
      console.log(data)
      
      this.toastr.successToastr('Blog posted successfully!', 'Success!');
      // redirecting the route this is very useful for redirection in big applications to move betn components
      setTimeout(()=>{
        this.router.navigate(['/blog', data.data.blogId])
      },3000)
    },

    error => {
      
      console.log('some error occured')
      console.log(error.errorMessage);
      this.toastr.errorToastr('Some Error Occured!', 'Oops!');
    }

  )



  }


}
