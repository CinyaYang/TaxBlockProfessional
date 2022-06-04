import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import './../../assets/smtp.js'; //file path may change → 
declare let Email: any;




@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})


export class ContactComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  phoneNumber: string = '';
  email: string = '';
  comments: string = '';
  subject: string = '';

  
  

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(data:any) {
    // this.http.post("https://formsubmit.co/6bb64567d0f54eaac2a8c7ac0f744696",data).subscribe((result) => {
      
    // })

    // this.contactService.sendMessage(data).subscribe(
    //   data => console.log(data)
    // );

    Email.send({
      Host : 'smtp.elasticemail.com',
      Username : 'hello@taxblockprofessional.com',
      Password : 'E3E6C2E75C922CB7AAA0B32FD9CBF1528086',
      To : 'hello@taxblockprofessional.com',
      From : 'cinyayang@gmail.com',
      Subject : data.subject,
      Body : '<i>This is sent as a feedback from my resume page.</i> <br/> <b>Name: </b>'+data.firstName + ' ' +data.lastName+'<br /> <b>Mail: </b>'+data.email+'<br /> <b>Subject: </b>'+data.subject+'<br /> <b>Message:</b> <br /> '+data.comments+' <br><br> <b>~End of Message.~</b> '
      }).then( (message:any) => {
        // alert(message); 
        // data.resetForm(); 
      } );
        
      

    setTimeout(() => {
      // this.sending = false;
      this.cancelForm();
    }, 1000);

    // this.firstName = "";
    // this.lastName = "";
    // this.email = "";
    // this.phoneNumber = "";
    // this.subject = "";
    // this.comments = "";
  }

  cancelForm() {
    this.router.navigate(['/thank-you'] );
  }

  

}
