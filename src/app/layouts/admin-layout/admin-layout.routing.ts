import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
// import { UserProfileComponent } from '../../user-profile/user-profile.component';
// import { TableListComponent } from '../../table-list/table-list.component';
// import { TypographyComponent } from '../../typography/typography.component';
// import { IconsComponent } from '../../icons/icons.component';
// import { MapsComponent } from '../../maps/maps.component';
// import { NotificationsComponent } from '../../notifications/notifications.component';
// import { UpgradeComponent } from '../../upgrade/upgrade.component';


// new mudules

// patient
import { PatientComponent } from '../../modules/patient/patient.component';
import { AddPatientComponent } from '../../modules/patient/add-patient/add-patient.component';
import { AllPatientsComponent } from '../../modules/patient/all-patients/all-patients.component';
import { ExportPetientsDataComponent } from '../../modules/patient/export-petients-data/export-petients-data.component';

// staff
import { AddStaffComponent } from '../../modules/staff/add-staff/add-staff.component';
import { AllStaffComponent } from '../../modules/staff/all-staff/all-staff.component';
import { StaffDetailsComponent } from '../../modules/staff/staff-details/staff-details.component';
import { ExportStaffDataComponent } from '../../modules/staff/export-staff-data/export-staff-data.component';

// pharmacy
import { AddMedicineComponent } from '../../modules/pharmacy/add-medicine/add-medicine.component';
import { MedicineStatisticsComponent } from '../../modules/pharmacy/medicine-statistics/medicine-statistics.component';
import { ViewExportMedicineComponent } from '../../modules/pharmacy/view-export-medicine/view-export-medicine.component';
import { AddMedicineParentComponent } from '../../modules/pharmacy/add-medicine-parent/add-medicine-parent.component';
     

// parent modules
import { StaffComponent } from '../../modules/staff/staff.component';
import { PharmacyComponent } from '../../modules/pharmacy/pharmacy.component';
import { SettingsComponent } from '../../modules/settings/settings.component';


export const AdminLayoutRoutes: Routes = [

    {
      path: '',
      children: [
                    { path: 'dashboard',      component: DashboardComponent },
                    { path: 'staff',     component: StaffComponent },
                    { path: 'pharmacy',     component: PharmacyComponent },
                    { path: 'settings',          component: SettingsComponent },
                    // { path: 'maps',           component: MapsComponent },
                    // { path: 'notifications',  component: NotificationsComponent },
                    // { path: 'upgrade',        component: UpgradeComponent }
               ]
    },
    {
            path: 'patient',
            component: PatientComponent,
            children: [
                {path: 'add-patient', component: AddPatientComponent},
                {path: 'patient-details', component: AddPatientComponent},
                {path: 'all-patient-details', component: AllPatientsComponent},
                {path: 'export-patient-details', component: ExportPetientsDataComponent}
            ]
    },
    {
        path: 'staff',
        component: StaffComponent,
        children: [
            {path: 'add-staff', component: AddPatientComponent},
            {path: 'staff-details', component: AddPatientComponent},
            {path: 'all-staff-details', component: AllPatientsComponent},
            {path: 'export-staff-details', component: ExportPetientsDataComponent}
        ]
    },
    {
        path: 'pharmacy',
        component: PharmacyComponent,
        children: [
            {path: 'add-medicine', component: AddMedicineComponent},
            {path: 'add-medicine-parent', component: AddMedicineParentComponent},
            {path: 'view-export-medicine', component: ViewExportMedicineComponent},
            {path: 'medicine-statistics', component: MedicineStatisticsComponent}
        ]
    }


];



    // , {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }


