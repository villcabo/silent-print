import { Component, ViewChild } from '@angular/core';
import { InvoiceService } from "./invoice.service";

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

          // const blobUrl = window.URL.createObjectURL((value.body));
          // const iframe = document.createElement('iframe');
          // iframe.style.display = 'none';
          // iframe.src = blobUrl;
          // document.body.appendChild(iframe);
          // iframe.contentWindow.print();

          // const fl = URL.createObjectURL(value.body);
          // window.open(fl).print();

          this.pdfViewer.pdfSrc = value.body;
          // this.winRef.open(this.pdfViewer).print();
          this.pdfViewer.refresh();
          const iframeDoc = document.getElementsByTagName("iframe")[0].contentWindow;
          setTimeout(() => {
            iframeDoc.print();
          }, 1000);

          // window.open(this.pdfViewer.pdfSrc).print();

          // this.pdfViewer.refresh().then(value1 => {
          //   console.info(value1);
          // });
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
