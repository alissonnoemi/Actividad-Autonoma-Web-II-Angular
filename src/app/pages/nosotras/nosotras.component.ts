import { Component } from '@angular/core';
import { HistoriaComponent } from '../../components/historia/historia.component';
import { EquipoComponent } from '../../components/equipo/equipo.component';
import { MVComponent } from '../../components/m-v/m-v.component';

@Component({
  selector: 'app-nosotras',
  standalone: true,
  imports: [HistoriaComponent, EquipoComponent, MVComponent],
  templateUrl: './nosotras.component.html',
  styleUrl: './nosotras.component.css'
})
export class NosotrasComponent {

}
