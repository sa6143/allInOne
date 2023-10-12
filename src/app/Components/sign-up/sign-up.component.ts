import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SharedServiceService } from 'src/app/Services/shared-service.service';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  SignUpFG: FormGroup
  Obj: any
  obj1: any
  constructor(private http: HttpClient, frmbuilder: FormBuilder, public sharedservice: SharedServiceService) {
    this.SignUpFG = frmbuilder.group({
      UserName: [''], UserEmail: [''], UserPassword: ['']
    })
  }

 ngOnInit(): void {
       app()
  }
async harry() {
  let delhiwheather=new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve("27 degree")
    },);
  })

  return(delhiwheather)
}



  onSubmit() {


    //   var headers=new Headers();
    //   headers.append('Authorization','Bearer'+"sonamawasthi")
    //   headers.append('Content-Type','application/json')
    //   let options={headers:headers}
    //   this.http.post<article>
    //     ('http://localhost:61459/Api/Posts', 
    //     { title: 'Angular POST Request Example',options }).subscribe(data => {
    //       console.log(data)
    //     })
    // }

    // this.Obj = this.SignUpFG.value
    // let body=this.Obj
    // return this.sharedservice.SharedHttpPost('http://localhost:61459/Api/PostData', body).
    // subscribe(
    //   res => {       
    //     console.log(res)
    //   })
  this.chainAPICALL().subscribe(s=>{
    this.Obj=s
    console.log(this.Obj)
  })

 

  }

  chainAPICALL()
  {

   // this.Obj = this.SignUpFG.value
   // let body = this.Obj
    return this.http.get('https://reqres.in/api/users').pipe(mergeMap((data) => {
      this.Obj = data;
      console.log(data)
      return this.http.get('https://reqres.in/api/users?id=1').pipe(map((p) => {
        this.obj1 = p
        console.log(p)
        return p;
      }))

    }))

}
}

interface article {
  id: number;
  title: string
}

async function wait(timetowait:number) {
  return new Promise(a=>{
    setTimeout(() => {
      a=a
    }, timetowait);
  })
}

async function wait1(timetowait:number) {
  return new Promise(a=>{
    setTimeout(() => {
      a=a
    }, timetowait);
  })
}
async function app() {
  await wait(400)
  console.log("i wait for 400")
  await wait1(300)
  console.log("i wait for 300")
  await wait(200)
  console.log("i wait for 200")
  await wait1(200)
  console.log("i wait for 100")
}