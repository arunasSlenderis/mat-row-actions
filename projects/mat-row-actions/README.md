#mat-row-actions

ability to add row controls in every row of material table.

##install
npm install --save mat-row-action

in app.module.ts:
```import { MatRowActionsModule } from 'mat-row-actions';```

and add this module to imports

##usage

add arunas-mat-row-actions componant to the td you want to have controls and add control buttons inside.

Also you need to make sure the td would be positioned relatively. You can simply create some class with position: relative and add it to respected td.

##example
```
<td mat-cell *matCellDef="let row" class="action-cell">
  {{row.name}}
  <arunas-mat-row-actions>
    <button mat-icon-button>
      <mat-icon>autorenew</mat-icon>
    </button>
    <button mat-icon-button>
      <mat-icon>home</mat-icon>
    </button>
    <button *ngIf="row.id === 1" mat-icon-button>
      <mat-icon>all_out</mat-icon>
    </button>
  </arunas-mat-row-actions>
</td>
```

class action-cell has style position: relative
