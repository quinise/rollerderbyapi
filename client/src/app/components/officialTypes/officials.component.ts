import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OfficialTypeInterface } from 'src/app/types/officialType.interface';
import { OfficialTypeService } from 'src/app/services/official-type.service';

@Component({
  selector: 'app-officials',
  templateUrl: './officials.component.html',
  styleUrls: ['./officials.component.css']
})
export class OfficialsComponent implements OnInit {
  officialTypes: OfficialTypeInterface[] = [];

  constructor(private http: HttpClient, private officialTypesService: OfficialTypeService) {}  

  ngOnInit(): void {
    this.officialTypesService.getOfficialTypes().subscribe(data => this.officialTypes = data);
  }
}
