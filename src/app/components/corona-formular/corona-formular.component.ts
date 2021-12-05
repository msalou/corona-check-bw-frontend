import { Component, OnInit } from '@angular/core';
import { Alarmstufe } from 'src/app/models/Alarmstufe';
import { Lebensbereich } from 'src/app/models/Lebensbereich';
import { CoronaFormularService } from 'src/app/services/corona-formular.service';

@Component({
  selector: 'app-corona-formular',
  templateUrl: './corona-formular.component.html',
  styleUrls: ['./corona-formular.component.scss'],
})
export class CoronaFormularComponent implements OnInit {

  alarmstufe: Alarmstufe | undefined;
  lebensbereiche: Lebensbereich[] | undefined;
  selectedLebensbereichId: number | undefined;

  constructor(private coronaFormularService: CoronaFormularService) {}

  ngOnInit(): void {
    this.coronaFormularService.getCurrentAlarmstufe().subscribe((data: any) => {
      this.alarmstufe = data;
    })
    this.coronaFormularService.getLebensbereiche().subscribe((data: any) => {
      this.lebensbereiche = data;
    })
  }

  submit(): void {
    this.alarmstufe = this.alarmstufe;
  }
}
