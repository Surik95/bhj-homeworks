class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timeElement = container.querySelector('.status__time')
  
    
    this.reset();
    this.setNewWord(); 
    this.registerEvents();
  }

  reset() {
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0; 
  }

  registerEvents() {
    let exceptions = ['Shift', 'Alt']
      
    
    window.addEventListener('keyup', (e) => {
      if (!exceptions.includes(e.key)) {
        if (e.key.toUpperCase() === this.currentSymbol.textContent.toUpperCase()){
        this.success() 
        }  else {
          this.fail()
        }
    }})
    
    
    
    /*
      TODO:
      Написать обработчик события, который откликается
      на каждый введённый символ.
      В случае правильного ввода слова вызываем this.success()
      При неправильном вводе символа - this.fail();
     */
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      setTimeout(()=> {
        alert('Победа!')
        this.reset();
      }, 200)
    }
    this.clearCounter()
    this.setNewWord();
  }

  fail() {
    this.clearCounter()
    if (++this.lossElement.textContent === 5) {
      setTimeout(()=> {
        alert('Вы проиграли!')
        this.reset();
      }, 200)
    }
    this.setNewWord();
    
  }

  setNewWord() {
    const word = this.getWord();

    
    let wordLength = word.length
    this.timeElement.textContent = this.timeElement.textContent = `${wordLength} секунд`
    this.timeInterval = setInterval(() => {
        if (--wordLength === 1) {
          this.timeElement.textContent = `${wordLength} секунда`
        } else if  ((wordLength === 2) || (wordLength === 3)|| (wordLength === 4)) {
          this.timeElement.textContent = `${wordLength} секунды`
        } else {
          this.timeElement.textContent = `${wordLength} секунд`
        }
      }, 1000);

    let time = Number(`${word.length}000`)
    this.timeout = setTimeout( (() => {
      console.log(time,this.timeout);
      this.fail()
    }),time)
    
    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'я люблю netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'я люблю popcorn',
        'cinema',
        'love',
        'я люблю javascript',
        'я люблю kitkat',

      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }

  clearCounter(){
    this.timeElement.textContent = ''
    clearInterval(this.timeInterval)
    clearTimeout(this.timeout)
  }

}


new Game(document.getElementById('game'))
