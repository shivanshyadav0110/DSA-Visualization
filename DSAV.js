function createBoxes(){
  let user_input = document.getElementById("user_input").value;
  let container = document.getElementById("boxContainer");

  container.innerHTML = "";

  let j = 400;
  for(let i = 0; i < user_input.length; i++){
      
    let box = document.createElement("box");
    box.className = "box";
    box.innerHTML = user_input[i];
    
    box.id = i;
    box.style.position = "absolute";
    box.style.left = j.toString() + "px";
    container.appendChild(box);
    j += 150;
  
  }
}


function print(value){
  console.log(value);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function moveBox(a, b, time) {
  let box1 = document.getElementById(a);
  let box2 = document.getElementById(b);

  box1.style.backgroundColor = "#DDFFBC";
  box2.style.backgroundColor = "#EA5455";

  let x1 = box1.style.left;
  let y1 = box1.style.top;

  let x2 = box2.style.left;
  let y2 = box2.style.top;

  let tempY1 = y1 + 150;
  let tempY2 = y2 - 150;

  await(sleep(1000));

  box1.style.transform = `translate(${0}px,${tempY1}px)`;
  box2.style.transform = `translate(${0}px,${tempY2}px)`;

  await(sleep(time));

  let tempLeft = box1.style.left;
  box1.style.left = box2.style.left;
  box2.style.left = tempLeft;

  await(sleep(time));

  box1.style.transform = `translate(${0}px,${tempY1-150}px)`;
  box2.style.transform = `translate(${0}px,${tempY2+150}px)`;


  // Swap the ids of the boxes
  let id = box1.id;
  box1.id = box2.id;
  box2.id = id;

  box1.style.backgroundColor = "";
  box2.style.backgroundColor = "";

  await(sleep(1000));
}


function isDigit(character) {
    return /^\d$/.test(character);
}


function makeArray(str){
    let arr = [];

    for(let i = 0; i < str.length; i++){
        if(isDigit(str[i])){
            arr.push(str[i]);
        }
    }

    return arr;
}

async function selectionSort(){
  let arr = makeArray(document.getElementById("user_input").value);
  let boxes = document.getElementsByClassName("box");
  let size = arr.length;

  for(let i = 0; i < size; i++){
    await(sleep(1000));
    let min_idx = i;
    for(let j = i; j < size; j++){
      await(sleep(500));
      if(arr[min_idx] > arr[j]){
        min_idx = j;
      }
    }

    if(min_idx != i){
      moveBox(min_idx,i,500);
      let temp = arr[i];
      arr[i] = arr[min_idx];
      arr[min_idx] = temp;
    }
  }
}

async function insertionSort(){
  let arr = makeArray(document.getElementById("user_input").value);
  let boxes = document.getElementsByClassName("box");
  let size = arr.length;

  for(let i = 0; i < size; i++){
    let j = i - 1;
    let currIdx = i;
    await(sleep(2000));
    while(j >= 0 && arr[j] > arr[currIdx]){
      await(sleep(2000));
      moveBox(currIdx,j,400);
      let temp = arr[currIdx];
      arr[currIdx] = arr[j];
      arr[j] = temp;
      currIdx = j;
      j--;
    }
  }
}

async function bubbleSort(){
  let arr = makeArray(document.getElementById("user_input").value);
  let boxes = document.getElementsByClassName("box");
  let size = arr.length;
  for(let i = 0; i < size; i++){
    await(sleep(1000));
    for(let j = 0; j < size; j++){
      await(sleep(1000));
      if(j + 1 < size && arr[j] > arr[j+1]){
        moveBox(j,j+1,500);
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  print(arr);
}




