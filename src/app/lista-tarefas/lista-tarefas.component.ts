import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Tarefa {
  id: number;
  descricao: string;
  concluida: boolean;
}

@Component({
  selector: 'app-lista-tarefas',
  standalone: true,
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css'],
  imports: [CommonModule, FormsModule]
})
export class ListaTarefasComponent {
  tarefas: Tarefa[] = [
    { id: 1, descricao: 'Estudar Angular', concluida: false },
    { id: 2, descricao: 'Fazer exercícios', concluida: true },
    { id: 3, descricao: 'Preparar apresentação', concluida: false }
  ];

  novaTarefa: string = '';
  tarefasPendentes: number = 0 ;
  tarefasConcluidas: number = 0;

  adicionarTarefa() {
    if (this.novaTarefa.trim()) {
      const id = this.tarefas.length > 0 ? Math.max(...this.tarefas.map(t => t.id)) + 1 : 1;
      this.tarefas.push({
        id,
        descricao: this.novaTarefa,
        concluida: false
      });
      this.novaTarefa = '';
      this.calcularQuantidadeTarefasStatus()
    }
  }

  alternarStatus(id: number) {
    const tarefa = this.tarefas.find(t => t.id === id);
    if (tarefa) {
      tarefa.concluida = !tarefa.concluida;
      this.calcularQuantidadeTarefasStatus()
    }
  }

  removerTarefa(id: number) {
    this.tarefas = this.tarefas.filter(t => t.id !== id);
    this.calcularQuantidadeTarefasStatus()
  }

  calcularQuantidadeTarefasStatus(): void {
    this.tarefasPendentes = this.tarefas.filter(t => !t.concluida).length;
    this.tarefasConcluidas = this.tarefas.filter(t => t.concluida).length;
  }

}
