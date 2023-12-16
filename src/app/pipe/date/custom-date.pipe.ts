import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDatePipe'
})
export class CustomDatePipe implements PipeTransform {

  transform(timestamp: number | string): string {
    const currentDate = new Date();
    const targetDate = new Date(timestamp);
    const timeDifference = currentDate.getTime() - targetDate.getTime();

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (seconds < 60) {
      return "Il y a moins d'une minute";
    } else if (minutes < 60) {
      return `Il y a ${minutes} minute${minutes > 1 ? 's' : ''}`;
    } else if (hours < 24) {
      return `Il y a ${hours} heure${hours > 1 ? 's' : ''}`;
    } else if (days < 30) {
      return `Il y a ${days} jour${days > 1 ? 's' : ''}`;
    } else if (months < 12) {
      return `Il y a ${months} mois`;
    } else {
      return `Il y a plus de ${years} an`;
    }
  }

}
