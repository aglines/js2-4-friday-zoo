import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Zoo-Do List</h1>
    <h3>Today is {{month}}/{{day}}</h3>
    <ul>
      <li *ngFor="let currentAnimal of animals">{{currentAnimal.name}}  <button (click)="editAnimal(currentAnimal)">Edit</button></li>
    </ul>
  </div>
  `
})

export class AppComponent {
  // DATE
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();

  animals: Animal[] = [
    new Animal("Arctic Fox", "Moon", 2, "Carnivore", "Northern Trail", 5,"Female", "Cool shade", "Loud noises"),
    new Animal("Ocelot","Prince",4,"Carnivore","Tropical Rain Forest Building",6,"Male","Laying in the sunshine","Toys that are not rope-based"),
    new Animal("Northwest Black Tailed Deer","Tinkerbell",8,"Herbivore","Northern Trail",2,"Female","Delicate roots and leaves","Loud Noises")
  ];

  selectedAnimal: Animal = this.animals[0];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

}

export class Animal {
  constructor(public species: string, public name: string, public age: number, public diet: string, public location: string, public caretakers: number, public sex: string, public likes: string, public dislikes: string) {}
}
