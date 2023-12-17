import { Directive, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCopy]'
})
export class CopyDirective {

  @Input('appCopyToClipboard') textToCopy: string | undefined;

  private notificationTimeout = 2000; // Durée de la notification en millisecondes

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onClick() {
    this.copyToClipboard();
  }

  private copyToClipboard() {
    const el = document.createElement('textarea');
    if (typeof this.textToCopy === "string") {
      el.value = this.textToCopy;
    }
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    this.showNotification('Texte copié dans le presse-papiers');
  }

  private showNotification(message: string): void {
    const notification = this.renderer.createElement('div');
    this.renderer.addClass(notification, 'copy-notification');
    const text = this.renderer.createText(message);
    this.renderer.appendChild(notification, text);

    this.renderer.appendChild(this.el.nativeElement, notification);

    setTimeout(() => {
      this.renderer.removeChild(this.el.nativeElement, notification);
    }, this.notificationTimeout);
  }
}
