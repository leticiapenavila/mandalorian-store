import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentComponent } from './equipment/equipment.component';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';
import { FilterComponent } from './filter/filter.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';



@NgModule({
  declarations: [
    EquipmentComponent,
    EquipmentListComponent,
    FilterComponent,
    FooterComponent,
    HeaderComponent,

  ],
  imports: [CommonModule, FormsModule, NgbRatingModule, RatingModule, ButtonModule, CardModule],
  exports: [
    EquipmentListComponent,
    FilterComponent,
    FooterComponent,
    HeaderComponent,
  ],
})
export class ComponentsModule {}
