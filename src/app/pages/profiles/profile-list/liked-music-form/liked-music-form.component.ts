import { Component } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';

@Component({
  selector: 'ngx-liked-music-form',
  template: `
    <nb-card size="medium">
      <nb-list>
        <nb-list-item *ngFor="let music of liked_music">
          <div class="col">
            {{ music }}
          </div>
          <div class = "col action-button">
            <button nbButton outline status="success">
              <nb-icon icon="heart" status="danger"></nb-icon>
            </button>
            <button nbButton outline status="success">
              <nb-icon icon="close-outline" status="basic"></nb-icon>
            </button>
          </div>
          </nb-list-item>
      </nb-list>
    </nb-card>
    <div class="button-group">
      <button nbButton outline status="success" (click)=close()>
        Close
      </button>
      <button nbButton status="success" (click)=close()>
        Save
      </button>
    </div>
  `,
  styleUrls: ['liked-music-form.component.scss'],
})

export class LikedMusicFormComponent {
  constructor(public windowRef: NbWindowRef) {}

  liked_music = [
    '0Qwsdsdsxax',
    'Piano Man',
    'llllllllllllllloooooooooooooooooonnnnnnnnnnnnnnnggggg',
  ];

  close() {
    this.windowRef.close();
  }
}
