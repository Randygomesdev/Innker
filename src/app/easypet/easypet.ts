import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-easypet',
  templateUrl: './easypet.html',
  styleUrl: './easypet.css',
})
export class Easypet {
  readonly views = ['Visão geral', 'Agendamentos', 'Serviços e pacotes'] as const;
  readonly activeView = signal<string>('Visão geral');
  readonly filter = signal('Todos');
  readonly statuses = ['Todos', 'Pendente', 'Confirmado', 'Finalizado'];
  readonly appointments = [
    {
      time: '09:00',
      pet: 'Luna',
      tutor: 'Marina',
      service: 'Consulta veterinária',
      staff: 'Camila',
      status: 'Finalizado',
    },
    {
      time: '10:00',
      pet: 'Thor',
      tutor: 'Rafael',
      service: 'Banho e tosa',
      staff: 'Lucas',
      status: 'Confirmado',
    },
    {
      time: '11:30',
      pet: 'Mel',
      tutor: 'Beatriz',
      service: 'Vacinação',
      staff: 'Camila',
      status: 'Pendente',
    },
    {
      time: '14:00',
      pet: 'Simba',
      tutor: 'Pedro',
      service: 'Consulta veterinária',
      staff: 'Camila',
      status: 'Confirmado',
    },
  ];
  readonly filteredAppointments = computed(() =>
    this.appointments.filter((item) => this.filter() === 'Todos' || item.status === this.filter()),
  );
  readonly services = [
    {
      name: 'Consulta veterinária',
      description: 'Atendimento clínico com horário reservado.',
      price: 'R$ 150',
      duration: '30 min',
    },
    {
      name: 'Banho e tosa',
      description: 'Cuidados de higiene e bem-estar.',
      price: 'R$ 80',
      duration: '1h',
    },
    {
      name: 'Hotel pet',
      description: 'Hospedagem com cobrança por diária.',
      price: 'R$ 120',
      duration: '1 dia',
    },
  ];
}
