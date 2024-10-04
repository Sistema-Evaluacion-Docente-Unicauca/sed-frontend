import { Component } from '@angular/core';
import { TableActivitiesComponent } from "../../components/table-activities/table-activities.component";
import { FiltersComponent } from "../../components/filters/filters.component";

@Component({
  selector: 'pages-support-mangement',
  standalone: true,
  imports: [TableActivitiesComponent, FiltersComponent],
  templateUrl: './support-mangement.component.html',
  styleUrl: './support-mangement.component.css'
})
export class SupportMangementComponent {
  
}
