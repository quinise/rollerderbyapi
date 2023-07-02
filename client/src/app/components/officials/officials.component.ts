import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OfficialsInterface } from 'src/app/types/officials.interface';
import { OfficialsService } from 'src/app/services/officials.service';

@Component({
  selector: 'app-officials',
  templateUrl: './officials.component.html',
  styleUrls: ['./officials.component.css']
})
export class OfficialsComponent implements OnInit {
  officials: OfficialsInterface[] = [];

  constructor(private http: HttpClient, private officialsService: OfficialsService) {}  

  ngOnInit(): void {
    this.officials = this.officialsService.getOfficialsData();
  }
}
