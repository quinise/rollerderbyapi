import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StructureInterface } from 'src/app/types/structure.interface';
import { StructureService } from 'src/app/services/structure.service';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent implements OnInit {
  structures: StructureInterface[] = [];

  constructor(private http: HttpClient, private structureService: StructureService) {}  

  ngOnInit(): void {
    this.structures = this.structureService.getStructureData();
  }
}