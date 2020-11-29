import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfilesComponent } from './profiles.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { LikedMusicFormComponent } from './profile-list/liked-music-form/liked-music-form.component';
import { ProfileAddComponent } from './profile-add/profile-add.component';


const routes: Routes = [{
  path: '',
  component: ProfilesComponent,
  children: [
    {
      path: 'profile-list',
      component: ProfileListComponent,
      children: [
        {
          path: 'liked-music-form',
          component: LikedMusicFormComponent,
        },
      ],
    },
    {
      path: 'profile-add',
      component: ProfileAddComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilesRoutingModule { }

export const routedComponents = [
  ProfilesComponent,
  ProfileListComponent,
  ProfileAddComponent,
  LikedMusicFormComponent,
];
