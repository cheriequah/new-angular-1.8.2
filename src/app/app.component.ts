import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'new-angular-1.8.2';

  /*
  constructor() { }  
    ngOnInit() {  
        this.loadJsFile("app.js");  
      }  
      public loadJsFile(url: string) {  
        let node = document.createElement('script');  
        node.src = url;  
        node.type = 'text/javascript';  
        document.getElementsByTagName('head')[0].appendChild(node);  
      }  */
}
