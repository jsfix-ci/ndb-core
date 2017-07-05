/*
 *     This file is part of ndb-core.
 *
 *     ndb-core is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     ndb-core is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with ndb-core.  If not, see <http://www.gnu.org/licenses/>.
 */

import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { DatabaseManagerService } from '../../database/database-manager.service';
import { SessionService } from '../../session/session.service';
import { DatabaseSyncStatus } from '../../database/database-sync-status.enum';

@Component({
  selector: 'app-sync-status',
  templateUrl: './sync-status.component.html',
  styleUrls: ['./sync-status.component.css']
})
export class SyncStatusComponent implements OnInit {

  @ViewChild('lgModal') modal: ModalDirective;
  syncInProgress: boolean;

  constructor(private _dbManager: DatabaseManagerService,
              private _sessionService: SessionService) {
    this._dbManager.onSyncStatusChanged.subscribe((status: any) => this.handleSyncStatus(status));
  }

  ngOnInit(): void {
  }

  private handleSyncStatus(status: DatabaseSyncStatus) {
    switch (status) {
      case DatabaseSyncStatus.started:
        this.syncInProgress = true;
        if (!this._sessionService.isLoggedIn()) {
          this.modal.show();
        }
        break;
      case DatabaseSyncStatus.completed:
      case DatabaseSyncStatus.failed:
        this.syncInProgress = false;
        this.modal.hide();
        break;
    }
  }
}