import { LinksCardComponent } from './links-card/links-card.component';
import { MatInputModule } from '@angular/material/input';
import { QuizComponent } from './quiz/quiz.component';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { ComponentsComponent } from './components.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NouisliderModule } from 'ng2-nouislider';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module,
        MatInputModule,
        MatButtonModule
      ],
    declarations: [
        ComponentsComponent,
        QuizComponent,
        LinksCardComponent
    ],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }