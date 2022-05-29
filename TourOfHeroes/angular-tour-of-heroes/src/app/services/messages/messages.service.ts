import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  // properties
  messages: string[] = []; // cache of messages

  constructor() { }

  // add message to cache(array)
  add(message: string){
    this.messages.push(message);
  }

  // clear messages from cache(array)
  clear(){
    this.messages = [];
  }
}
