import { Component, OnInit } from '@angular/core';
import { Ibmnew3Service } from './ibmnew3.service';

@Component({
  selector: 'app-ibmnew3',
  templateUrl: './ibmnew3.component.html',
  styleUrls: ['./ibmnew3.component.scss'],
})

export class Ibmnew3Component implements OnInit {
    public cloud = {
        name: '',
    }

    constructor (
        private ibmnew3Service: Ibmnew3Service,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.ibmnew3Service.GpCreate(this.cloud).subscribe(data => {
            this.cloud.name = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}