import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{
  title = 'angular-intro-p1';
  name = 'Elizabeth';

  currentDay: any = new Date().getDay();
  days: Object = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
  };

  languages: Object[] =[
    {
      name:['English', 'Spanish'],
      country: 'America'
    },
    {
      name:'Spanish',
      country:'Spain'
    },
    {
      name: ['French', 'basque'],
      country: 'France'
    },
    {
      name: 'German',
      country: 'Germany'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
renderThisDay(){
  return this.days[this.currentDay];
}
renderSpokenLanguages(){
  return this.languages.join(', ');
}
ignoreLanguage(language): Boolean{
  const languagesToIgnore='English';
  return !language.name.includes(languagesToIgnore);

}

ngOnDestroy(){
  console.log();
  
};

}
