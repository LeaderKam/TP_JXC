import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  //url = 'C:\Users\kousa\esir3\jxc\fish_bike.jpg';
  url = '/assets/fish_bike.jpg';

  constructor() { }
  onFileSelected(e) {
    //console.log(event);
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0])
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }
    }
  }

  ngOnInit(): void {
  }

}
