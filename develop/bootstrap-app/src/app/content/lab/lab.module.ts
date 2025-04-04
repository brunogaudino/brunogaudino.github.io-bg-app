import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabComponent } from './lab.component';
import { LabCardComponent } from 'src/app/shared/component/lab-card/lab-card.component';
import { MenuModule } from 'src/app/shared/component/menu/menu.module';
import { SocialNetworkModule } from 'src/app/shared/component/social-network/social-network.module';
import { FooterModule } from 'src/app/shared/component/footer/footer.module';
import { LogoPresentationModule } from 'src/app/shared/component/logo-presentation/logo-presentation.module';

@NgModule({
  imports: [
    CommonModule,
    MenuModule,
    SocialNetworkModule,
    FooterModule,
    LogoPresentationModule
  ],
  declarations: [
    LabComponent,
    LabCardComponent
  ],
  exports: [
    LabComponent
  ]
})
export class LabModule { }
