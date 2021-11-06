import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit  {

  username : any;
  nome : any;
  name: "Nome";
  questions: any;
  currentIndex: number;
  notAttempted: any;
  correct: any;
  currentQuestionSet: any;
  start = false;
  gameover = false;
  buttonname = "Iniciar Quiz";

  constructor() {
    //Creating summy questions Json dta
    this.questions = [
      {
        id: 1,
        question: 'Quantos anos eu tenho?',
        option: [
          { optionid: 1, name: ' 20' },
          { optionid: 2, name: ' 9' },
          { optionid: 3, name: ' 18' },
          { optionid: 4, name: ' 14' }
        ],
        answer: 1,
        selected: 0
      },
      {
        id: 2,
        question: 'Meu nome completo.',
        option: [
          { optionid: 1, name: ' Débora Ferreira da Silva' },
          { optionid: 2, name: ' Débora Letícia Ferreira da Costa' },
          { optionid: 3, name: ' Débora Ferreira Maciel' },
          { optionid: 4, name: ' Débora Letícia Ferreira Maciel' }
        ],
        answer: 4,
        selected: 0
      },
      {
        id: 3,
        question: 'Quantos gatos eu tenho?',
        option: [
          { optionid: 1, name: ' Um gato' },
          { optionid: 2, name: ' Dois gatos' },
          { optionid: 3, name: ' Três gatos' },
          { optionid: 4, name: ' Quatro gatos' }
        ],
        answer: 3,
        selected: 0
      },
      {
        id: 4,
        question: 'Estilo musical favorito',
        option: [
          { optionid: 1, name: ' Rock' },
          { optionid: 2, name: ' Dark Wave' },
          { optionid: 3, name: ' Trap' },
          { optionid: 4, name: ' Classica' }
        ],
        answer: 2,
        selected: 0
      },
      {
        id: 5,
        question: 'Minha sexualidade',
        option: [
          { optionid: 1, name: ' Heterossexual' },
          { optionid: 2, name: ' Homossexual' },
          { optionid: 3, name: ' Bissexual' },
          { optionid: 4, name: ' Assexual' }
        ],
        answer: 4,
        selected: 0
      }
    ];
    
    this.currentIndex = 0;
    this.currentQuestionSet = this.questions[this.currentIndex];
  }

  ngOnInit() {
  }
  
  onSubmit(nome: string) {
    this.nome = localStorage.setItem('username', this.nome);
  }

  next() {
    this.currentIndex = this.currentIndex + 1;
    this.currentQuestionSet = this.questions[this.currentIndex];
  }
  
  submit() {
    this.buttonname = "Replay";
    if (this.currentIndex + 1 == this.questions.length) {
      this.gameover = true;
      this.start = false;
      this.correct = 0;
      this.notAttempted = 0;
      this.questions.map(x => {
        if (x.selected != 0) {
          if (x.selected == x.answer)
          this.correct = this.correct + 1;
        }
        else {
          this.notAttempted = this.notAttempted + 1;
        }
        x.selected = 0;
      });
    }
    
  }
  startQuiz() {
    this.gameover = false;
    this.currentIndex = 0;
    this.currentQuestionSet = this.questions[this.currentIndex];
    this.start = true;
  }  
}
