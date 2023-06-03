import { Injectable } from "@angular/core";
import { Structure } from "./structure.model";
import { Subject, Subscription } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { json } from "body-parser";

@Injectable({providedIn:"root"})
export class StructureDataService{
    constructor(private http: HttpClient){};

    structureSubject = new Subject<Structure[]>();
    subjectSubscription = new Subscription();
    structures: Structure[] = [];   

    getStructureData() {
        this.http.get<{structures: Structure[]}>('http://localhost:3000/api/structure').subscribe((jsonData) => {
            this.structures = jsonData.structures;
            this.structureSubject.next(this.structures); 
        })
    }
}