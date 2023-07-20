import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OfficialService } from 'src/app/services/official.service';
import { Official } from 'src/app/types/officials';

@Component({
  selector: 'app-official-instances',
  templateUrl: './official-instances.component.html',
  styleUrls: ['./official-instances.component.css']
})

export class OfficialInstancesComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'level', 'experience'];
  officials: Official[] = [];
  searchValue = "";

  constructor(private http: HttpClient, private officialService: OfficialService) {}  
  
  ngOnInit(): void {
    this.search();
  }

  formatAsYears(dateString: number): number {
    return new Date(dateString * 1000).getFullYear();
  }

  search() {
    this.officialService.getOfficials(this.searchValue).subscribe(data => this.officials = data);
  }
}
