import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-profile-add',
  templateUrl: 'profile-add.component.html',
  styleUrls: ['profile-add.component.scss'],
})
export class ProfileAddComponent implements OnInit {

  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;

  firstNameValidated = true;
  lastNameValidated = true;
  genderValidated = true;
  birthDateValidated = true;

  checkBoxMaxCount = 4;
  musicLikeCount = 0;
  videoLikeCount = 0;

  music_moods = [
    {name: 'Passionate', checked: false},
    {name: 'Rowdy', checked: false},
    {name: 'Cheerful', checked: false},
    {name: 'Intense', checked: false},
    {name: 'Energetic', checked: false},
    {name: 'Rock', checked: false},
    {name: 'Country', checked: false},
    {name: 'Soul', checked: false}
  ];

  video_types = [
    {name: 'TV Shows', checked: false},
    {name: 'TV Commercials', checked: false},
    {name: 'Comedy', checked: false},
    {name: 'Drama', checked: false},
    {name: 'Action', checked: false},
    {name: 'Fantasy', checked: false},
    {name: 'Romance', checked: false},
    {name: 'Thriller', checked: false}
  ];

  url = 'https://us-central1-memory-lane-954c7.cloudfunctions.net/createProfile?uid=memorylane';

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.firstForm = this.fb.group({
      // firstName: ['', Validators.required],
      // lastName: ['', Validators.required],
      // gender: ['', Validators.required],
      // birthDate: ['', Validators.required],
    });

    this.secondForm = this.fb.group({
      // secondCtrl: ['', Validators.required],
    });

    this.thirdForm = this.fb.group({
      // thirdCtrl: ['', Validators.required],
    });
  }

  onFirstSubmit() {
    this.firstNameValidated = this.firstForm.controls.firstName.status === 'VALID';
    this.lastNameValidated = this.firstForm.controls.lastName.status === 'VALID';
    this.genderValidated = this.firstForm.controls.gender.status === 'VALID';
    this.birthDateValidated = this.firstForm.controls.birthDate.status === 'VALID';
    this.firstForm.markAsDirty();
    const formValues = this.firstForm.value;
    const payload = {
      first: formValues.firstName,
      last: formValues.lastName,
      gender: formValues.gender,
      birthDate: formValues.birthDate,
    };
    console.log(payload);
    // let first_name = this.firstForm.get('firstName').value
  }

  createProfile() {
    console.log("create profile")
  }

  onSecondSubmit() {
    this.secondForm.markAsDirty();
  }

  onThirdSubmit() {
    this.thirdForm.markAsDirty();
  }

  onCheckChange(event, item, media_type) {
    console.log(media_type)
    console.log(item);
    item.checked = event;
    if (event === true) {
      if (media_type === 'music') {
        this.musicLikeCount++;
      } else if (media_type === 'video') {
        this.videoLikeCount++;
      }
    } else {
      if (media_type === 'music') {
        this.musicLikeCount--;
      } else if (media_type === 'video') {
        this.videoLikeCount--;
      }
    }
  }
}
