import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //template : '<p>Title</p>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

/*------------------------------*/
/*------------------------------*/
    name1 = "Sunil";
    day  = new Date('12 10 1990');
    arr1 : number[] = [4,15,13,1,63,678,88];
;/*------------------------------*/
    items = ["angular 4","React","Underscore"];
    newItem = "";
    pushItem = function(){
        if(this.newItem != ""){
            this.items.push(this.newItem);
            this.newItem = "";
        }
    }
    removeItem = function(index){
        this.items.splice(index,1);
    }
/*------------------------------*/
  title = 'app works!';
  obj = {
    id : "1",
    name : "umair"
    }
    arr = ["abc","def","gh1"];
    isTru = true;
    myName = "Sunil";
}


