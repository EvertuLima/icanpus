import { Component } from '@angular/core';

@Component({
  selector: 'app-room-summary',
  templateUrl: './room-summary.component.html',
  styleUrls: ['./room-summary.component.css']
})
export class RoomSummaryComponent {
  local: string = 'Sala X'
  descricao:string = 'Laboratório de pesquisa e desenvolvimento'
}
