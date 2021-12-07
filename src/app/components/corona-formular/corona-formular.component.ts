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
  selectedLebensbereichId!: number;
  regelung: string | undefined;

  private readonly BASISSTUFE = 1;
  private readonly WARNSTUFE = 2;
  private readonly ALARMSTUFE_I = 3;
  private readonly ALARMSTUFE_II = 4;

  constructor(private coronaFormularService: CoronaFormularService) {}

  ngOnInit(): void {
    this.coronaFormularService.getCurrentAlarmstufe().subscribe((data: any) => {
      this.alarmstufe = data;
    })
    this.coronaFormularService.getLebensbereiche().subscribe((data: any) => {
      this.lebensbereiche = data;
    })
  }

  onChangeRadio(): void {
    const lebensbereich = this.lebensbereiche?.filter(lebensbereich => lebensbereich.id == this.selectedLebensbereichId)[0];
    switch (this.alarmstufe?.id) {
      case this.BASISSTUFE:
        this.regelung = lebensbereich?.stepBasisstufe;
        break;
      case this.WARNSTUFE:
        this.regelung = lebensbereich?.stepWarnstufe;
        break;
      case this.ALARMSTUFE_I:
        this.regelung = lebensbereich?.stepAlarmstufeI;
        break;
      case this.ALARMSTUFE_II:
        this.regelung = lebensbereich?.stepAlarmstufeII;
        break;
      default:
        this.regelung = '';
        break;
    }
  }

}
