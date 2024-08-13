import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'debug-guide';
  steps = [
    { 
      subtitle: 'Se houver um erro', 
      tasks: [
        { name: 'Você leu a mensagem?', time: '~30s', checked: false },
        { name: 'Você perguntou para seus amigos?', time: '~2m', checked: false },
        { name: 'Você procurou na base de código?', time: '~1m', checked: false },
        { name: 'Você acessou a documentação?', time: '~15m', checked: false },
        { name: 'Você pesquisou o erro? ChatGPT, Google, StackOverflow', time: '~15m', checked: false }
      ]
    },
    { 
      subtitle: 'As coisas pararam de funcionar do nada', 
      tasks: [
        { name: 'Você salvou o arquivo?', time: '~5s', checked: false },
        { name: 'Está retornando algo?', time: '~1m', checked: false },
        { name: 'Você está na URL correta?', time: '~5s', checked: false },
        { name: 'Você está conectado à VPN?', time: '~10s', checked: false },
        { name: 'O arquivo .env foi configurado?', time: '~10s', checked: false },
        { name: 'Você reiniciou o servidor local?', time: '~30s', checked: false },
        { name: 'Você reiniciou o Servidor do FastAPI?', time: '~10s', checked: false },
        { name: 'Você reinstalou os requirements?', time: '~1m', checked: false }
      ]
    },
    { 
      subtitle: 'Erros comuns', 
      tasks: [
        { name: 'Você limpou o cache?', time: '~10s', checked: false },
        { name: 'Você está sincronizado com a branch correta?', time: '~1m', checked: false },
        { name: 'Seus imports estão corretos?', time: '~30s', checked: false },
        { name: 'Já tentou com sudo?', time: '~10s', checked: false },
        { name: 'Está conectado na internet?', time: '~10s', checked: false }
      ]
    }
  ];

  allChecked = false;
  showFireworks = false;
  isDarkTheme = true;

  checkAllSteps() {
    this.allChecked = this.steps.every(group => group.tasks.every(task => task.checked));
  }

  onReady() {
    this.showFireworks = true;
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }

  resetAllSteps() {
    this.steps.forEach(group => group.tasks.forEach(task => task.checked = false));
    this.allChecked = false;
    this.showFireworks = false;
  }
}
