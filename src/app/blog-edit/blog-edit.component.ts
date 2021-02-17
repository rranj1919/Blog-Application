import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from "../blog-http.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
  public currentBlog: any;
  public possibleCategories = ["comedy", "Drama", "Action", "Technology"];
  constructor(private _route: ActivatedRoute, private router: Router, private blogHttpService: BlogHttpService,public toastr: ToastrManager) { }

  ngOnInit(): void {

    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    //invoking the function to get the Blog

    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      (data: { [x: string]: any; }) => {
        console.log("logging data")
        console.log(data)
        this.currentBlog = data["data"]

      },
      (error: { errorMessage: any; }) => {
        console.log("some error occured")
        console.log(error.errorMessage)
      }
    )
  }

  public editThisBlog() {
    this.blogHttpService.editBlog(this.currentBlog.blogId, this.currentBlog).subscribe(
      data => {
        console.log(data);
        this.toastr.successToastr('Blog Edited Successfully', 'Success!');
        setTimeout(() => {
          this.router.navigate(['/blog', this.currentBlog.blogId])
          //this.router.navigate(['/home'])
        }, 2000)
        
        
      },
    error=>{
      console.log("some error occured");
      console.log("error.errorMessage");
      this.toastr.errorToastr('could not edit the blog', 'Oops!');
    }

      )

      

      }

  }


