import { Component, OnInit } from '@angular/core';
import { SearchResponse } from '../../../../core/labor.interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-activities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-activities.component.html',
  styleUrl: './table-activities.component.css'
})
export class TableActivitiesComponent {
  public laborData: SearchResponse = {
    labor: [
      {
        type: "Trabajo docencia",
        activities: [
          {
            activities_name: "Metodología de la investigación",
            source: [
              {
                name_source: "Autoevaluación",
                state: "Pendiente firma",
                evaluator: "Pepito Perez"
              },
              {
                name_source: "Fuente 2",
                state: "Diligenciado",
                rol_evaluator: "Jefe de departamento",
                evaluator: "Alejandro Toledo Tovar",
                evaluated: "Pepito Perez"
              }
            ]
          },
          {
            activities_name: "Inteligencia Artificial",
            source: [
              {
                name_source: "Autoevaluación",
                state: "Pendiente",
                evaluator: "Pepito Perez"
              },
              {
                name_source: "Fuente 2",
                state: "Pendiente firma",
                rol_evaluator: "Jefe de departamento",
                evaluator: "Alejandro Toledo Tovar",
                evaluated: "Pepito Perez"
              }
            ]
          },
          {
            activities_name: "Gestión de proyecto informáticos",
            source: [
              {
                name_source: "Autoevaluación",
                state: "Pendiente firma",
                evaluator: "Pepito Perez"
              },
              {
                name_source: "Fuente 2",
                state: "Diligenciado",
                rol_evaluator: "Jefe de departamento",
                evaluator: "Alejandro Toledo Tovar",
                evaluated: "Pepito Perez"
              }
            ]
          }
        ]
      },
      {
        type: "Dirección de trabajo de grado",
        activities: [
          {
            activities_name:
              "Resolución 8.4.3–90.2 / 288, 04 de noviembre de 22,Consejo de Facultad",
            source: [
              {
                name_source: "Autoevaluación",
                state: "Pendiente firma",
                evaluator: "Pepito Perez"
              },
              {
                name_source: "Fuente 2",
                state: "Diligenciado",
                rol_evaluator: "Estudiante",
                evaluator: "Federico Sánchez",
                evaluated: "Pepito Perez"
              }
            ]
          }
        ]
      },
      {
        type: "Investigación",
        activities: [
          {
            activities_name:
              "Ciência cidadã e cocriação como meios de regeneração de rios e minimização de riscos",
            source: [
              {
                name_source: "Autoevaluación",
                state: "Pendiente firma",
                evaluator: "Pepito Perez"
              },
              {
                name_source: "Fuente 2",
                state: "Diligenciado",
                rol_evaluator: "Coordinador/a",
                evaluator: "Diana Sánchez",
                evaluated: "Pepito Perez"
              }
            ]
          }
        ]
      },
      {
        type: "Administración",
        activities: [
          {
            activities_name:
              "Resolución Superior 005 del 4 de febrero de 2015 - Jefe Departamento",
            source: [
              {
                name_source: "Autoevaluación",
                state: "Pendiente firma",
                evaluator: "Pepito Perez"
              },
              {
                name_source: "Fuente 2",
                state: "Diligenciado",
                rol_evaluator: "Coordinador/a",
                evaluator: "Martín López",
                evaluated: "Pepito Perez"
              }
            ]
          }
        ]
      }
    ]
  };
}
