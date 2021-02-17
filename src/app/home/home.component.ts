// this is a default statement
// here it importing component and oninit file
import { Component,   OnDestroy,   OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { BlogService } from '../blog.service';

// @decorator
//@component- its enabling the class to be included into angular


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
})
// a simple class which is using oninit class 
export class HomeComponent implements OnInit,OnDestroy {
 
    public  allBlogs:any;
  
  constructor(private blogHttpService:BlogHttpService) {

    console.log("Home component constructor is called");
   }

   ngOnInit() {

    console.log("Home component OnInit is called"); 
    this.allBlogs= this.blogHttpService.getAllBlogs().subscribe(
      (      data: { [x: string]: any; }) =>{
        console.log("logging data")
        console.log(data)
        this.allBlogs =data["data"]

      },
      (      error: { errorMessage: any; }) =>{
        console.log("some error occured")
        console.log(error.errorMessage)
      }
    )
    
   
    console.log(this.allBlogs);

  }
  ngOnDestroy() {
    
    console.log("Home  component On Destroy is called");
  }
  

  

  

}
