//😺😺😺
const catBtn = document.getElementById('catBtn');
const cathomeBtn = document.getElementById('cathomeBtn');
const catStage = document.getElementById('catStage');

function clearStage(stageName){
  while (stageName.firstChild) {
    stageName.removeChild(stageName.firstChild);
  }
}

catBtn.addEventListener('click', () => {
  const catDIV = document.createElement('div');
  catDIV.textContent = '😺😺😺';

  catDIV.addEventListener('dblclick', () => {
    const isFlipped = catDIV.classList.toggle('flipped');
    catDIV.textContent = isFlipped ? '💤💤💤' : '😺😺😺';
  });

  catStage.appendChild(catDIV);
});

cathomeBtn.addEventListener('click', () => {
  [...catStage.children].forEach(c => c.classList.add('fade-out'));

  setTimeout(() => {
    [...catStage.children].forEach(ca => ca.textContent = '🏡🏡🏡');
  }, 700);

  setTimeout(() => {
    clearStage(catStage);
  }, 2000);
});


//単語カード

const createBtn = document.getElementById('createBtn');
const wordsStage = document.getElementById('wordsStage');
const langStatus = document.getElementById('langStatus');
const delBtn = document.getElementById('delBtn');
const showAllBtn = document.getElementById('showAllBtn');


let shuffledArray = [];
let currentIndex = 0;
langStatus.textContent = 'English';




function ShuffleArr(array){
  const arr = [...array];

  for(let L = array.length - 1; L > 0; L--){
    let R = Math.floor(Math.random() * (L + 1));
    [arr[L], arr[R]] = [arr[R], arr[L]];
  }
  return arr;
}

createBtn.addEventListener('click', () => {
  currentIndex++;
  
  if(shuffledArray.length === 0 || currentIndex === shuffledArray.length){
    shuffledArray = ShuffleArr(English);
    currentIndex = 0;
  }

  const OBJset = shuffledArray[currentIndex];
  const li = document.createElement('li');
  li.textContent = OBJset.front;
  li.classList.add('firstSight');

  li.addEventListener('click', () => {
    const isFlipped = li.classList.toggle('flipped');
    li.textContent = isFlipped ? OBJset.back : OBJset.front;
    li.style.backgroundColor = isFlipped ? '#300' : '#300';
  });

  wordsStage.appendChild(li);
});

delBtn.addEventListener('click', () => {
  clearStage(wordsStage);
});

showAllBtn.addEventListener('click', () => {
  clearStage(wordsStage);
  shuffledArray = ShuffleArr(English);

  shuffledArray.forEach(OBJset => {
    const li = document.createElement('li');
    li.textContent = OBJset.front;
    li.classList.add('firstSight');

    li.addEventListener('click', () => {
      const isFlipped = li.classList.toggle('flipped');
      li.textContent = isFlipped ? OBJset.back : OBJset.front;
      li.style.backgroundColor = isFlipped ? '#300' : '#300';
    });
    
    wordsStage.appendChild(li);
  });
});
