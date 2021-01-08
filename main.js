'use strict';

const urlInput = document.getElementById('URL');
const badgeDivided = document.getElementById('badge');
const resultDivided = document.getElementById('result');


function removeAllChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

document.onchange = () => {
  removeAllChildren(badgeDivided);
  removeAllChildren(resultDivided);

  const url = urlInput.value.split('/');
  console.dir(url);
  const name = url[3];
  const project = url[4];
   const hrefURL = `https://circleci.com/gh/${name}/${project}`
  const imgURL = `https://circleci.com/gh/${name}/${project}.svg?style=svg`
 

  // コードを表示
  const div = document.createElement('div');
  const code = document.createElement('code');
  const paragraph = document.createElement('p');
  paragraph.innerText = '　　　バッジのコード（マークダウン形式）';
  resultDivided.appendChild(paragraph);
  div.setAttribute('id', 'box');
  code.innerText = `[![CircleCI](${imgURL})](${hrefURL})`;
  div.appendChild(code);
  resultDivided.appendChild(div);
  

  // バッジを表示
 const annotation = document.createElement('p');
  annotation.innerText = '見本';
  badgeDivided.appendChild(annotation);
  const anchor = document.createElement('a');
 anchor.setAttribute('href', hrefURL);
  const image = document.createElement('img');
  image.setAttribute('src', imgURL);
  anchor.appendChild(image);
  badgeDivided.appendChild(anchor);
}
