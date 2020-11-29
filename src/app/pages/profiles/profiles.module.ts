import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbUserModule,
  NbButtonModule,
  NbStepperModule,
  NbRadioModule,
  NbSelectModule,
  NbDatepickerModule,
  NbListModule,
  NbCheckboxModule,
  NbWindowModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { ProfilesRoutingModule, routedComponents } from './profiles-routing.module';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { LikedMusicFormComponent } from './profile-list/liked-music-form/liked-music-form.component';
import { ProfileAddComponent } from './profile-add/profile-add.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NbCardModule,
    NbListModule,
    NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbCheckboxModule,
    NbWindowModule.forChild(),
    NbDatepickerModule,
    NbUserModule,
    NbButtonModule,
    NbStepperModule,
    ThemeModule,
    ProfilesRoutingModule,
  ],
  declarations: [
    ...routedComponents,
    ProfileListComponent,
    ProfileAddComponent,
    LikedMusicFormComponent,
  ],
})
export class ProfilesModule { }
