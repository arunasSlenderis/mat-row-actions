import { Component, OnDestroy, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'arunas-mat-row-actions',
  template: `
    <ng-content></ng-content>
  `,
  styles: [
    `
      :host() {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        display: grid;
        grid-gap: 5px;
        background: white;
        display: none;
      }
    `
  ]
})
export class MatRowActionsComponent implements OnInit, OnDestroy {
  private buttonsContainer: any;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  private _toggleVisibility = (() => {
    const currentDisplayValue = this.buttonsContainer.style.display;
    if (currentDisplayValue === 'none' || !currentDisplayValue) {
      this.renderer.setStyle(this.buttonsContainer, 'display', 'block');
    } else {
      this.renderer.setStyle(this.buttonsContainer, 'display', 'none');
    }
  }).bind(this);

  ngOnInit(): void {
    this.buttonsContainer = this.el.nativeElement;
    const actionButtonsCount = this.buttonsContainer.children.length;

    const cellWithButtons = this.renderer.parentNode(this.buttonsContainer);
    const hoveredRow = this.renderer.parentNode(cellWithButtons);

    this.renderer.setStyle(this.buttonsContainer, 'grid-template-columns', `repeat(${actionButtonsCount}, 1fr)`);

    this.renderer.listen(hoveredRow, 'mouseenter', this._toggleVisibility);
    this.renderer.listen(hoveredRow, 'mouseleave', this._toggleVisibility);
  }

  ngOnDestroy(): void {
    this.renderer.destroy();
  }

}
