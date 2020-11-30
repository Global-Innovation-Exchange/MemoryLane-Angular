import { Component, OnInit } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { ProfileListService } from './profile-list-service';
import { LikedMusicFormComponent } from './liked-music-form/liked-music-form.component';

@Component({
  selector: 'ngx-profile-list',
  templateUrl: 'profile-list.component.html',
  styleUrls: ['profile-list.component.scss'],
})
export class ProfileListComponent implements OnInit {

  alive = true;

  url = 'https://us-central1-memory-lane-954c7.cloudfunctions.net/showProfiles?id=memorylane';
  profileNumberLimit = 5;

  constructor(
    private api: ProfileListService,
    private windowService: NbWindowService,
  ) {}

  users: {
    id: string,
    name: string,
    age: string,
    location: string,
    occupation: string,
    music_preference_like: [string],
    music_preference_dislike: [string],
    video_preference_like: [string],
    video_preference_dislike: [string],

  }[] = [
    // { name: 'Carla Espinosa', age: '92 years old'},
    // { name: 'Bob Kelso', age: '85 years old'},
    // { name: 'Janitor', title: 'Janitor' },
    // { name: 'Perry Cox', title: 'Doctor of Medicine' },
    // { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
  ];

  ngOnInit() {
    this.api
      .getAllProfiles(this.url)
      .subscribe(
        data => {
          // tslint:disable-next-line: no-console
          // console.log(data);
          for (const profileInfo of data.profiles) {
            const p = profileInfo.profile;
            this.users.push({
              id: profileInfo.user_id,
              name: p.name,
              age: p.age + ' years old',
              location: p.location,
              occupation: p.occupation,
              music_preference_like: p.prefered_genre,
              music_preference_dislike: p.disliked_genre,
              video_preference_like: p.prefered_video,
              video_preference_dislike: p.disliked_genre,
            });
          }
        },
        err => {
          // tslint:disable-next-line: no-console
          console.log(err);
        },
      );
  }

  openWindowForm(profile_id) {
    this.windowService.open(
      LikedMusicFormComponent,
      {
        title: `Liked Music`,
        context: { profile_id: profile_id },
      },
      );
  }


}
