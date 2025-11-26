import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-sidebar-menu-item',
  imports: [
    RouterModule],
  template: `
    <a
      [routerLink]="path"
    >

    </a>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMenuItem { 

  @Input({required: true}) icon!: string;
  @Input({required: true}) title!: string;
  @Input({required: true}) descripcion!: string;
  @Input({required: true}) path!: string;
}
