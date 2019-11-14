import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'filereader';
  csvContent: string;

  constructor(){}
  ngOnInit(){
  }
  onFileLoad(fileLoadedEvent) {
    const textFromFileLoaded = fileLoadedEvent.target.result;              
    this.csvContent = textFromFileLoaded;   
    console.log(this.csvContent)  
     console.log(typeof(this.csvContent));
 
  
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
