import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button
      [attr.variant]="variant"
      [attr.size]="size"
      [attr.color]="color"
      [attr.startIcon]="startIcon.length > 0 ? startIcon : undefined"
      [attr.endIcon]="endIcon.length > 0 ? endIcon : undefined"
      [attr.disabled]="disabled ? 'disabled' : undefined"
      [attr.disableShadow]="disableShadow ? 'disabledShadow' : undefined"
    >
      <i *ngIf="startIcon.length > 0" class="material-icons">
        {{ startIcon }}
      </i>
      {{ label }}
      <i *ngIf="endIcon.length > 0" class="material-icons">
        {{ endIcon }}
      </i>
    </button>
  `,
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements OnInit {
  @Input() label = 'Default';

  @Input() startIcon: string = '';
  @Input() endIcon: string = '';
  @Input() variant: 'default' | 'outline' | 'text' = 'default';
  @Input() color: 'default' | 'primary' | 'secondary' | 'danger' = 'default';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  @Input() disabled: boolean = false;
  @Input() disableShadow: boolean = false;
  constructor() {}

  ngOnInit(): void {
    if (this.startIcon != '' || (this.endIcon != '' && this.color == 'default'))
      this.color = 'primary';
    if (
      this.disableShadow == true &&
      this.color == 'default' &&
      this.variant == 'default' &&
      this.startIcon == '' &&
      this.endIcon == ''
    )
      this.color = 'primary';
  }
}
