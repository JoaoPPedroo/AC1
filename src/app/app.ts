import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  
  noticias: any[] = [
    {
      titulo: 'Clube de Regatas Vasco da Gama',
      autor: 'Fred Caldeira',
      data: '26/08/1998',
      conteudo: 'Porque Loide foi melhor que o Roberto Dinamite, entenda o caso',
      curtidas: 0, 
      comentarios: []  
    },
    {
      titulo: 'São Paulo Futebol Clube: O Maior Clube do Brasil',
      autor: 'Giovane Tarzia',
      data: '11/12/2005',
      conteudo: 'São Paulo conquista o mundial de clubes pela 3ª vez com gol de Mineiro e defesa histórica de Rogério Ceni!',
      curtidas: 0,
      comentarios: []
    },
    {
      titulo: 'Renato Portaluppi tem atuação de gala e garante o 1° título mundial do Tricolor Gaúcho',
      autor: 'Tatiana Mantovani',
      data: '11/12/1983',
      conteudo: 'Renato Gaúcho surpreende no mundial de clubes contra o time de Hamburgo, cravando 2 contra o time alemão, garantindo o título, e se consagrando como o maior jogador do Grêmio.',
      curtidas: 0,
      comentarios: []
    },

    {
      titulo: 'Real Madrid deveria parar de existir para o bem do futebol ',
      autor: 'Giovane Ferrari, o madridista brasileiro',
      data: '15/05/2002',
      conteudo: 'Não faz bem para o futebol moderno ter um clube tão dominante em uma competição de clubes quanto o Real Madrid',
      curtidas: 0,
      comentarios: []
    }
  ];

  novoComentario: string[] = ['', '', '']; 

  curtir(index: number) {
    this.noticias[index].curtidas++;
  }

  
  comentar(index: number) {
    if (this.novoComentario[index].trim() !== '') {
      this.noticias[index].comentarios.push(this.novoComentario[index]);
      this.novoComentario[index] = ''; 
    }
  }
}