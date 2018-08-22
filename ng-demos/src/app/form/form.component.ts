import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  user = "Nicolas"

  backedField = "";

  checked = false;

  options = [2, 50, 56, 75];

  formData = {
    age: 12,
    email: "jo@patate.com"
  }

  selectedOptions = 50;

  ingredients = [
    {name: 'flour', good: false},
    {name: 'milk', good: false},
    {name: 'eggs', good: false},
    {name: 'sugar', good: false},
    {name: 'salt', good: false},
    {name: 'rum', good: false},
    {name: 'butter', good: false}
  ];

  selectedIngredient = undefined;


  isNicolas() {
    return this.user == "Nicolas" ? "checked" : ""
  }

  constructor() {
  }

  ngOnInit() {
  }

  onChange() {
    alert("You have change the ingredient: "
      + this.selectedIngredient.name)
  }

  onSubmmit() {
    console.log(this.formData);
    console.log("Sending super rest request");
  }

  isValid() {
    return this.formData.age > 0
      && this.formData.age <= 18
      && this.formData.email.includes("@")

  }

}
