import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent {
  structureQueryForm = new FormGroup({
    structureQueryInput: new FormControl(''),
  });

  onSubmit() {
    console.log("Console.test: " + this.structureQueryForm.value.structureQueryInput)
  }
}