import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  text = "I am a text defined inside the AppComponent";
  buttonDisabled = false;
  object = {
    description: "I am a random object from the AppComponent",
    name: "Random Object",
    age: 10,
    img: "https://source.unsplash.com/random",
    colors: ["yellow", "blue", "red"]
  }
  newColor = "";

  increaseAge(){
    this.object.age +=1;
  }

  decreaseAge(){
    this.object.age -=1;
  }

  toggleButton(){
    this.buttonDisabled = !this.buttonDisabled;
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.object.name = element.value;
  }

  eventAlert(event: Event){
    alert("You just made a '" + event.type + "'");
  }

  addColor(){
    this.object.colors.push(this.newColor);
    this.newColor = "";
  }

  removeColor(index: number){
    this.object.colors.splice(index, 1);
  }
}
