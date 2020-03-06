import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient) { }

  getDownloadFileInvoiceById(id): Observable<HttpResponse<Blob>> {
    return this.http.get(`http://localhost:8000/api/pro/invoices/${id}/download-file-invoice`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0eXdpbiIsImF1dGgiOiJST0xFX1BST1ZJREVSIiwiZXhwIjoxNTg2MTE5NTU5fQ.aRcyHl1ivrTBJ477mYl4V18IwzC8g371Bdzzwz3SD5TS1FBxBNAqSNOyGNkLkTLgP1ZJAgxShoYziLp0gr8u5A'
      }),
      responseType: 'blob',
      observe: 'response',
    });
  }
}
