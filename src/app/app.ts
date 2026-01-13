import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Potrzebne do obsługi pól tekstowych (inputów)

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  // Model nowego pacjenta (puste pola na start)
  nowyPacjent = { nazwisko: '', data: '', godzina: '' };

  // Lista zaplanowanych wizyt
  wizyty: any[] = [
    { nazwisko: 'Jan Kowalski', data: '2024-06-12', godzina: '10:00' }
  ];

  dodajWizyte() {
    if (this.nowyPacjent.nazwisko && this.nowyPacjent.data && this.nowyPacjent.godzina) {
      // Dodajemy kopię obiektu do listy
      this.wizyty.push({ ...this.nowyPacjent });
      
      // Czyścimy pola formularza
      this.nowyPacjent = { nazwisko: '', data: '', godzina: '' };
    } else {
      alert('Proszę wypełnić wszystkie pola!');
    }
  }

  usunWizyte(indeks: number) {
    this.wizyty.splice(indeks, 1);
  }
}