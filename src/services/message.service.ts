import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BroadcasterService} from './broadcaster.service';

@Injectable()
export class MessageService {
  constructor(private broadcaster: BroadcasterService) {}

  fire(data: string): void {
    this.broadcaster.broadcast(MessageEvent, data);
  }

  on(): Observable<string> {
    return this.broadcaster.on<string>(MessageEvent);
  }
}
