import { Component, OnInit } from '@angular/core';
// import { HttpClient } from "@angular/common/http";
import { Subscription } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { StructureDataService } from 'src/app/shared/structure-component';
import { Structure } from 'src/app/shared/structure.model';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent implements OnInit {
  structure: Structure[];
  structureSubscription = new Subscription();

  constructor(private structureDataService: StructureDataService) {}

  structureQueryForm = new FormGroup({
    structureQueryInput: new FormControl(''),
  });

  ngOnInit(): void {
    this.structureDataService.getStructureData();
    this.structureSubscription = this.structureDataService.structureSubject.subscribe(structures => {
      this.structure = structures;
    });
    this.structure = this.structureDataService.structures;
  }

  // onSubmit() {
  //   console.log("form input: " + this.structureQueryForm.value.structureQueryInput)
  // }
}