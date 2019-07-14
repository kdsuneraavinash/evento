import { Component, ViewChild, Input } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';

@Component({
    selector: 'app-details-modal',
    templateUrl: './details-modal.component.html',
    styleUrls: ['./details-modal.component.scss']
})
export class DetailsModalComponent {
    @ViewChild('dataModal', { static: true }) dataModal: ModalDirective;
    @Input('title') title: string;
    @Input('content') content: string;

    show() {
        this.dataModal.show();
    }
}