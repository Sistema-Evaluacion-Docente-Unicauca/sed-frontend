import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import { immediateProvider } from 'rxjs/internal/scheduler/immediateProvider';

@Component({
  selector: 'supportMangement-upload-file',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload-file.component.html',
  styleUrl: './upload-file.component.css'
})
export class UploadFileComponent {
  private myModal:HTMLElement|null=null;


  public openModal():void{
    console.log("jajaj")
    this.myModal=document.getElementById("myModal");
    if(this.myModal){
      this.myModal.style.display="flex";
    }
  }

  closeModal(){
  window.onclick = (event)=>{
    if(event.target && this.myModal){
      
      this.myModal.style.display="none";
    }
  }
}

}

// export class UploadFileComponent implements AfterViewInit {
//   @Output()
//   public modal:EventEmitter<HTMLElement> = new EventEmitter<HTMLElement>();
  
//   public myModal: HTMLElement | null = new HTMLElement; 
//   ngAfterViewInit(): void {
//     this.myModal=document.getElementById("myModal")
//     if(this.myModal){
//       this.modal.emit(this.myModal)
//     }
//   }


// }