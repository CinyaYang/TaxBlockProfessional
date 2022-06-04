import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() options:any;
  @Input() url:any;

  choices:any = ["Canada", "US"];
  routePath:any = "/serviceName"

  constructor() { }

  ngOnInit(): void {
  }

  // updateQuestionStatus(question:any){
  //   question.Answered = true;
  //   this.service.updateQuestionStatus(question).subscribe(res=>{
  //     // alert(res.toString());
  //   });
  // }

  // $('#myModal').on('shown.bs.modal', function () {
  //   $('#myInput').trigger('focus')
  // })

}
