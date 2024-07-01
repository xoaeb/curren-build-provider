import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MyMessageService } from '../../my-message.service';

@Component({
  selector: 'current-build-provider',
  templateUrl: './current-build-provider.component.html',
  styleUrls: ['./current-build-provider.component.css'],
})
export class CurrentBuildComponent implements OnInit {
  buildVersion: string = 'Loading...';

  @Input() owner: string = '';
  @Input() repo: string = '';
  @Input() accessToken: string = '';


  constructor(private http: HttpClient, private msgSvc: MyMessageService) {}

  ngOnInit(): void {

    if (this.owner && this.repo && this.accessToken) {
      this.msgSvc.getCurrentBuildVersion(this.owner, this.repo, this.accessToken).then(version => {
        this.buildVersion = version;
      }).catch(error => {
        console.error(error);
        this.buildVersion = 'Error fetching version';
      });
    } else {
      this.buildVersion = 'GitHub configuration not provided';
    }

  }
}
