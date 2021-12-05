import { Component, OnInit } from '@angular/core';
import { Alarmstufe } from 'src/app/models/Alarmstufe';
import { CoronaFormularService } from 'src/app/services/corona-formular.service';

@Component({
  selector: 'app-corona-formular',
  templateUrl: './corona-formular.component.html',
  styleUrls: ['./corona-formular.component.scss'],
})
export class CoronaFormularComponent implements OnInit {

  alarmstufe: Alarmstufe | undefined;

  constructor(private coronaFormularService: CoronaFormularService) {}

  ngOnInit(): void {
    this.coronaFormularService.getCurrentAlarmstufe().subscribe((data: any) => {
      console.log(data);
      this.alarmstufe = data;
    })  
  }

  submit(): void {
    this.alarmstufe = this.alarmstufe;
  }
}
