import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  conversations = [
    {name: "Sabelo Gumede", time: "08:21 AM", laterstMessage: "Good morning!!", laterstMessageRead: true},
    {name: "Lihle", time: "08:21 AM", laterstMessage: "Good morning!!", laterstMessageRead: false},
    {name: "Jabu", time: "08:21 AM", laterstMessage: "Good morning!!", laterstMessageRead: true},
    {name: "Michar", time: "08:21 Am", laterstMessage: "Good morning!!", laterstMessageRead: false},
    {name: "Lulu", time: "08:21 Am", laterstMessage: "Good morning!!", laterstMessageRead: false},
    {name: "Thabo", time: "08:21 AM", laterstMessage: "Good morning!!", laterstMessageRead: false},
    {name: "Darren", time: "08:21 AM", laterstMessage: "Good morning!!", laterstMessageRead: true},
    {name: "Tim", time: "08:21 AM", laterstMessage: "Good morning!!", laterstMessageRead: true},
    {name: "Sabelo Gumede", time: "08:21 AM", laterstMessage: "Good morning!!", laterstMessageRead: false},
    {name: "Lihle", time: "08:21 AM", laterstMessage: "Good morning!!", laterstMessageRead: false},
    {name: "Jabu", time: "08:21 AM", laterstMessage: "Good morning!!", laterstMessageRead: true},
    {name: "Michar", time: "08:21 Am", laterstMessage: "Good morning!!", laterstMessageRead: false},
    {name: "Lulu", time: "08:21 Am", laterstMessage: "Good morning!!", laterstMessageRead: false},
    {name: "Thabo", time: "08:21 AM", laterstMessage: "Good morning!!", laterstMessageRead: true},
    {name: "Darren", time: "08:21 AM", laterstMessage: "Good morning!!", laterstMessageRead: false},
    {name: "Tim", time: "08:21 AM", laterstMessage: "Good morning!!", laterstMessageRead: false}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  laterstMessageRead(){

  }

}
