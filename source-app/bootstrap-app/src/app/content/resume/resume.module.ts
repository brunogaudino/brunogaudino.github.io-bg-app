import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MenuModule } from 'src/app/shared/component/menu/menu.module';
import { SocialNetworkModule } from 'src/app/shared/component/social-network/social-network.module';
import { FooterModule } from 'src/app/shared/component/footer/footer.module';
import { LoadSpinnerModule } from 'src/app/shared/component/load-spinner/load-spinner.module';
import { LogoPresentationModule } from 'src/app/shared/component/logo-presentation/logo-presentation.module';
import { ResumeComponent } from './resume.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MenuModule,
    SocialNetworkModule,
    FooterModule,
    LoadSpinnerModule,
    LogoPresentationModule
  ],
  declarations: [
    ResumeComponent
  ],
  exports: [
    ResumeComponent
  ]
})
export class ResumeModule { }
