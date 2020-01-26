import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
// import { UserProfileComponent } from '../../user-profile/user-profile.component';
// import { TableListComponent } from '../../table-list/table-list.component';
// import { TypographyComponent } from '../../typography/typography.component';
// import { IconsComponent } from '../../icons/icons.component';
// import { MapsComponent } from '../../maps/maps.component';
// import { NotificationsComponent } from '../../notifications/notifications.component';
// import { UpgradeComponent } from '../../upgrade/upgrade.component';

import { PatientComponent } from '../../modules/patient/patient.component';
import { StaffComponent } from '../../modules/staff/staff.component';
import { PharmacyComponent } from '../../modules/pharmacy/pharmacy.component';
import { SettingsComponent } from '../../modules/settings/settings.component';
import { AddPatientComponent } from '../../modules/patient/add-patient/add-patient.component';
import { PatientDetailsComponent } from '../../modules/patient/patient-details/patient-details.component';
import { AllPatientsComponent } from '../../modules/patient/all-patients/all-patients.component';
import { ExportPetientsDataComponent } from '../../modules/patient/export-petients-data/export-petients-data.component';
import { ExportComponent } from '../../modules/helpers/export/export.component';

// staff
import { AddStaffComponent } from '../../modules/staff/add-staff/add-staff.component';
import { AllStaffComponent } from '../../modules/staff/all-staff/all-staff.component';
import { StaffDetailsComponent } from '../../modules/staff/staff-details/staff-details.component';
import { ExportStaffDataComponent } from '../../modules/staff/export-staff-data/export-staff-data.component';

//pharmacy
import { AddMedicineComponent } from '../../modules/pharmacy/add-medicine/add-medicine.component';
import { MedicineStatisticsComponent } from '../../modules/pharmacy/medicine-statistics/medicine-statistics.component';
import { ViewExportMedicineComponent } from '../../modules/pharmacy/view-export-medicine/view-export-medicine.component';
import { AddMedicineParentComponent } from '../../modules/pharmacy/add-medicine-parent/add-medicine-parent.component';
                                                                                         
import {
  MatRippleModule,
  MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatPaginatorModule,
  MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatNativeDateModule,
  MatDialogModule, MatGridListModule, MatIconModule, MatInputModule, NativeDateAdapter,
  MatListModule, MatMenuModule, MatProgressBarModule, MatProgressSpinnerModule,
  MatRadioModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSortModule,
  MatSlideToggleModule, MatSnackBarModule, MatTableModule, MatTabsModule, MatToolbarModule,
  MatTooltipModule, MatFormFieldModule, MatExpansionModule, MatStepperModule, DateAdapter
} from '@angular/material';

// import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatButtonModule,
		MatButtonToggleModule,
		MatCardModule,
		MatCheckboxModule,
		MatChipsModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatDialogModule,
		MatExpansionModule,
		MatFormFieldModule,
		MatGridListModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatMenuModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		MatRadioModule,
		MatSelectModule,
		MatSlideToggleModule,
		MatSliderModule,
		MatSidenavModule,
		MatSnackBarModule,
		MatStepperModule,
		MatTabsModule,
		MatToolbarModule,
		MatTooltipModule,
		MatPaginatorModule,
    MatSortModule,
    // Angular5Csv
    // Angular2CsvModule
  ],
  declarations: [
    DashboardComponent,
    // UserProfileComponent,
    // TableListComponent,
    // TypographyComponent,
    // IconsComponent,
    // MapsComponent,
    // NotificationsComponent,
    // UpgradeComponent,
    PatientComponent,
    StaffComponent,
    PharmacyComponent,
    AddPatientComponent,
    PatientDetailsComponent,
    AllPatientsComponent,
    ExportPetientsDataComponent,
    ExportComponent,
    SettingsComponent,
    AddStaffComponent,
    AllStaffComponent,
    StaffDetailsComponent,
    ExportStaffDataComponent,
    AddMedicineComponent,
    MedicineStatisticsComponent,
    ViewExportMedicineComponent,
    AddMedicineParentComponent
  ],
	entryComponents: [ExportComponent,AddMedicineComponent]
})

export class AdminLayoutModule {}
