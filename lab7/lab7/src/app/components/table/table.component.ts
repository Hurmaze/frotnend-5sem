import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  const variant = 2;
  const body = document.querySelector('body');

  constructor() { }

  ngOnInit(): void {
  }
  
  

for (let r = 0; r < 6; r++) {
    const rowElement = document.createElement('tr');
    for (let c = 0; c < 6; c++) {
        const index = String(c + 1 + (r * 6));
        const dataElement = document.createElement('td');
        dataElement.innerHTML = index;
        dataElement.id = index;
        rowElement.appendChild(dataElement);
        body.appendChild(rowElement);
    }
}

const cell = document.getElementById(variant);

cell.onmouseover = () => {
    cell.style.background = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255)
        + ',' + Math.floor(Math.random() * 255) + ')';
};

cell.onmouseup = () => {
    e.style.background = document.getElementById('color').value;
}

cell.ondblclick = () => {
    var column = variant % 6;
    for (let i = 0; i < 6; i++) {
        const currentElement = document.getElementById(String(column + i * 6));
        currentElement.style.background = document.getElementById('color').value;
    }
    const current_ceil = document.getElementById(String(v));
    current_ceil.style.background = 'white';
  }
}
