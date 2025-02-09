import { Routes } from '@angular/router';
import { EditEventComponent } from './edit-event/edit-event.component'; // Pas het pad aan als nodig

export const routes: Routes = [
  {
    path: 'edit-event/:id', // Dynamisch ID in het pad
    component: EditEventComponent, // Verwijst naar de EditEventComponent
  },
];
