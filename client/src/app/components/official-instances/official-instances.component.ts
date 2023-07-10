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
  displayedColumns: string[] = ['firstName', 'lastName', 'level', 'experience']
  officials: Official[];

  constructor(private http: HttpClient, private officialService: OfficialService) {}  
  
  ngOnInit(): void {
    this.officialService.getOfficials().subscribe(data => this.officials = data);
  }

}
