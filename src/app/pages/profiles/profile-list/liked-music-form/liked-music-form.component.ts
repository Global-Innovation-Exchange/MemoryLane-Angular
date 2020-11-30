import { Component, OnInit } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';
import { LikedMusicFormService } from './liked-music-form-service'

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
            <button nbButton outline status="basic">
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

export class LikedMusicFormComponent implements OnInit {
  constructor(
    private api: LikedMusicFormService,
    public windowRef: NbWindowRef,
  ) {}

  profile_id: String;
  url = 'https://us-central1-memory-lane-954c7.cloudfunctions.net/likedMusic?id=';
  liked_music = [];

  ngOnInit() {
    this.api
      .getLikedMusic(this.url+this.profile_id)
      .subscribe(
        data => {
          // tslint:disable-next-line: no-console
          console.log(data);
          for (const track of data.tracks) {
            console.log(track);
            this.liked_music.push(track.track_name + ' - ' + track.artist);
          }
        },
        err => {
          // tslint:disable-next-line: no-console
          console.log(err);
        },
      );
  }


  close() {
    this.windowRef.close();
  }
}
