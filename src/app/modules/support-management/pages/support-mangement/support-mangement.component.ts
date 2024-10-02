import { Component } from '@angular/core';
import { TableActivitiesComponent } from "../../components/table-activities/table-activities.component";

@Component({
  selector: 'pages-support-mangement',
  standalone: true,
  imports: [TableActivitiesComponent],
  templateUrl: './support-mangement.component.html',
  styleUrl: './support-mangement.component.css'
})
export class SupportMangementComponent {
  
}
