import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'timezones';
  thetime= new Date();
  newdate = function(thetime){
    this.thetime= new Date();
    if(thetime === "mst"){
      this.thetime.setHours(this.thetime.getHours()+1);
    }
    else if(thetime === 'cst'){
      this.thetime.setHours(this.thetime.getHours()+2);
    }
    else if(thetime === 'est'){
      this.thetime.setHours(this.thetime.getHours()+3);
    }
    else if(thetime === 'clear'){
      this.thetime = null;
    }
    console.log(this.thetime);
    }
   
}
