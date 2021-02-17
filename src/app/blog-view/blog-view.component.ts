import { Component, OnDestroy, OnInit } from '@angular/core';
// importing route related code 
import { ActivatedRoute, Router } from "@angular/router";

import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { ToastrManager } from 'ng6-toastr-notifications';
// to know the previous address of page
import { Location } from '@angular/common';
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers:[Location]
})
export class BlogViewComponent implements OnInit, OnDestroy {

public currentBlog:any;
  constructor(private _route: ActivatedRoute, private router: Router, private blogHttpService:BlogHttpService,public toastr: ToastrManager, private location:Location) {
    console.log("blog-view constructor is called");
  }

  // it is called when a class is created
  ngOnInit(): void {

    console.log(" blog-view ngOnInit is called");
    //getting blog id from route
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    //invoking the function to get the Blog
    
     this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      (      data: { [x: string]: any; }) =>{
        console.log("logging data")
        console.log(data)
       this.currentBlog =data["data"]

      },
      ( error: { errorMessage: any; }) =>{
        console.log("some error occured")
        console.log(error.errorMessage)
      }
    )
  }

      public deleteThisBlog(){
        this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(
          data=>{
            console.log(data);
            this.toastr.successToastr('Blog deleted successfully!', 'Success!');
            setTimeout(()=>{
              this.router.navigate(['/home']);
            },1000)
          },
          error=>{
             console.log("some error occured")
             console.log(error.errorMessage)
             this.toastr.errorToastr('Some Error Occured while deleting!', 'Oops!');
          }
        )
      
      }
// it will automatically guess the route based on browser history
      public goBackToPreviouspage ():any{
        this.location.back();
      }
public home(){
  setTimeout(()=>{
    this.router.navigate(['/home']);
  },1000)
}

  ngOnDestroy(): void {

    console.log(" blog-view Destroyed ");


  }



}
