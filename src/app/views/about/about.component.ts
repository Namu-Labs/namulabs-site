import { Component, OnInit } from '@angular/core';

interface Skill {
  title: string;
  star: string;
  countProject: number;
  img: string;
}

@Component({
  selector: 'view-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  imagePath: string = '/assets/images/';
  skillTable: Skill[] = [
    { title: 'C#', star: '★★★★☆', countProject: 2, img: this.imagePath + 'ic_skill_csharp.png' },
    { title: 'JAVA', star: '★★★★☆', countProject: 6, img: this.imagePath + 'ic_skill_java.png' },
    { title: 'HTML/CSS', star: '★★★★☆', countProject: 3, img: this.imagePath + 'ic_skill_htmlcss.png' },
    { title: 'Javascript', star: '★★★★☆', countProject: 3, img: this.imagePath + 'ic_skill_js.png' },
    { title: 'JQuery', star: '★★★☆☆', countProject: 3, img: this.imagePath + 'ic_skill_jquery.png' },
    { title: 'MySQL', star: '★★☆☆☆', countProject: 4, img: this.imagePath + 'ic_skill_mysql.png' },
    { title: 'Android', star: '★★★☆☆', countProject: 3, img: this.imagePath + 'ic_skill_android.png' },
    { title: 'JSP', star: '★★★☆☆', countProject: 2, img: this.imagePath + 'ic_skill_jsp.png' },
    { title: 'ASP.NET Core', star: '★★★☆☆', countProject: 1, img: this.imagePath + 'ic_skill_aspnetcore.png' },
    { title: 'Angular', star: '★★☆☆☆', countProject: 1, img: this.imagePath + 'ic_skill_angular.png' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
