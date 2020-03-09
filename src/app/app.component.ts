import { Component, ViewChild } from '@angular/core';
import { InvoiceService } from "./invoice.service";
import { convertBlobToBase64 } from "./blob-to-base64-util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private invoiceService: InvoiceService) {}

  @ViewChild('pdfViewer') public pdfViewer;

  onPrint() {
    this.invoiceService.getDownloadFileInvoiceById(951)
      .subscribe(
        value => {
          const blobUrl = window.URL.createObjectURL(new Blob ([value.body], { type: "application/pdf" }));
          const iframe = document.createElement('iframe');
          iframe.style.display = 'none';
          iframe.src = blobUrl;
          document.body.appendChild(iframe);
          iframe.contentWindow.onafterprint = () => {console.info("onafterprint")};
          iframe.contentWindow.onbeforeprint = () => {console.info("onbeforeprint")};
          iframe.contentWindow.print();
        },
        error => {
          console.error(error);
        }
      )
  }

  onAfterPrint() {
    console.info("aca se imprimio");
  }
}
