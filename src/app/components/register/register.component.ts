import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RegisterService } from 'src/app/service/registerEvt.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


    alert:boolean=false
    register = new FormGroup({
        title:new FormControl(''),
        description:new FormControl(''),
        ticketBal:new FormControl(''),
        dateTime:new FormControl(''),
        location:new FormControl(''),
        image:new FormControl('')

    })
    constructor(private registerService: RegisterService){ }
    ngOnInit(): void {
        
    }

    collection()
    {
        console.warn(this.register.value)
        this.registerService.registerEvent(this.register.value).subscribe(result => {
          console.warn("result: ", result)
        })
    }


  /*
  registerForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder, private registerservice: RegisterService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      title: [''],
      desciption: [''],
      ticketBal: [''],
      price: [''],
      dateTime: [''],
      location: [''],
      image: ['']
    });
  }
  onSubmit(): void {
    
    var formData: any = new FormData();
    formData.append("title", this.registerForm.get('title')?.value)
    formData.append("desciption", this.registerForm.get('desciption')?.value)
    formData.append("ticketBal", this.registerForm.get('ticketBal')?.value)
    formData.append("price", this.registerForm.get('price')?.value)
    formData.append("dateTime", this.registerForm.get('dateTime')?.value)
    formData.append("location", this.registerForm.get('location')?.value)
    formData.append("image", this.registerForm.get('image')?.value)
    console.log(this.registerForm.value)
    this.registerservice.registerEvent(formData)
    .subscribe(
      response => console.log('Success=from component', response) 
      //error => console.log('!!!Error',error)
    )
  }*/
}