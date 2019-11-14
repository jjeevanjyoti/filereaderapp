import { Component, OnInit } from '@angular/core';
import { Papa } from 'ngx-papaparse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'filereader';
  csvContent: string;
  colData:any=[];
  headerNames:any;
  constructor(private papa : Papa){}
  ngOnInit(){
  }

  onFileLoad(fileLoadedEvent) {
    const textFromFileLoaded = fileLoadedEvent.target.result;              
    this.csvContent = textFromFileLoaded;   
    var data = this.csvContent.split("\n")
    this.headerNames=data[0];
   for(let i=1;i<data.length;i++){
      var csvArr= data[i].split(",");
      console.log(typeof(csvArr))
      this.colData.push(data[i]);
      
   }

   console.log(this.headerNames);
  //  console.log(this.colData);

  
}

onFileSelect(input: HTMLInputElement) {

const files = input.files;
var content = this.csvContent;    
if (files && files.length) {
  console.log(files)
  const fileToRead = files[0];

  const fileReader = new FileReader();
  fileReader.onload = this.onFileLoad;

 fileReader.readAsText(fileToRead, "UTF-8");
 
 }

 }
}
