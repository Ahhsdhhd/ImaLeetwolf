import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Placement as PopperPlacement, Options } from '@popperjs/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/auth/course.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { response } from 'express';

@Component({
  selector: 'app-add-courses',
  templateUrl: './add-courses.component.html',
  styleUrls: ['./add-courses.component.css']
})

export class AddCoursesComponent implements OnInit {
addCourses:any;
viewCourses:any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    p:number=1;


    constructor(
      private breakpointObserver: BreakpointObserver ,
      private modalService: NgbModal,
      private routes:Router,
      private courseServices:CourseService,
      private fb:FormBuilder

      ) {
        this.addCourses = fb.group({
          courseName: ['',Validators.required],
          dateOfCourseCommencement: ['',Validators.required],
          dateOfCoursePassout:['',Validators.required]
        })
      }


  ngOnInit(): void {
    this.loadCourses();
  }

loadCourses(){
  this.courseServices.listCourses().subscribe((data:any)=>{
    this.viewCourses = data;
  })
}


  displayStyle = "none";
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  closeResult = '';
  open(content:any){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSubmit(){

   // console.log(this.addCourses.get("courseName"));
    this.courseServices.addCourses(this.addCourses.value).subscribe((data:any)=>{

      alert("ADDED SUCCESSFULLY");
      //this.routes.navigate(['/'])


    })
      }
get courseName():FormControl{
  return this.addCourses.get("courseName") as FormControl;
}
get dateOfCourseCommencement():FormControl{
  return this.addCourses.get("dateOfCourseCommencement") as FormControl;
}
get dateOfCoursePassout():FormControl{
  return this.addCourses.get("dateOfCoursePassout") as FormControl;
}

 onclick(){

  this.routes.navigate(['/gc'])


}



}


