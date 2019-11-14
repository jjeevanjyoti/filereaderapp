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
  headerNames:any;
  colData:any;
  constructor(private papa : Papa){
    this.headerNames=[];
  }
  ngOnInit(){
  }

  onFileLoad(fileLoadedEvent) {
    const textFromFileLoaded = fileLoadedEvent.target.result;              
    this.csvContent = textFromFileLoaded;   
    var data = this.csvContent.split("\n")
    this.headerNames=data[0];
    var tempData = [];
   for(let i=1;i<data.length;i++){
      var csvArr= data[i].split(",");
      console.log(typeof(csvArr))
      tempData.push( csvArr ); 
   }
   this.colData= tempData
   this.headerNames=this.headerNames.split(",")
   console.log(this.colData);
   console.log(this.headerNames);

  
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
