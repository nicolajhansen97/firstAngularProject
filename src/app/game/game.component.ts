import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  public numberToGuess = Math.floor((Math.random() * 100) + 1);
  public highOrLowerNumber = "Input a number and press play to start. The rules are simple. Guess on a number from 1-100 and the game will tell you if its higher or lower.";
  public highscoreCount = 0; 
  public currentHighscore = 0;
  public gameDone = false;
  

  constructor() { }

  calculateNumber(){
    var inputValue = (<HTMLInputElement>document.getElementById("number")).value;

    if(Number(inputValue) > this.numberToGuess)
    {
    this.highOrLowerNumber = "Number is lower"
    this.highscoreCount++;
    }
    else if(Number(inputValue) < this.numberToGuess)
    {
    this.highOrLowerNumber = "Number is higher"
    this.highscoreCount++;
    }
    else if(Number(inputValue) == this.numberToGuess)
    {
    this.highOrLowerNumber = "You did guess the number!"
    this.gameDone = true;

      if(this.highscoreCount < this.currentHighscore)
      {
      alert("You beated the highscore!")
      localStorage.setItem('highscoreKey', String(this.highscoreCount))
      }
    }
  }

  resetGame()
  {
    this.gameDone = false;
    this.numberToGuess = Math.floor((Math.random() * 100) + 1);
    this.highOrLowerNumber = "Input a number and press play to start. The rules are simple. Guess on a number from 1-100 and the game will tell you if its higher or lower.";
    this.highscoreCount = 0; 
  }
  

  ngOnInit(): void {

    if(localStorage.getItem('highscoreKey') !== null)
    {
      this.currentHighscore = Number(localStorage.getItem('highscoreKey'));
    }
    else
    {
      this.currentHighscore = 99999;
    }
}

}
