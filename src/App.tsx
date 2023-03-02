import React from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";
import {CarsComponent} from "./CarsComponet";

const studets = [
    {id:1, name:'James', age:8},
    {id:2, name:'Michael', age:15},
    {id:3, name:'Daria', age:21},
    {id:4, name:'Svetlana', age:75},
    {id:5, name:'Pavel', age:18},
]
const topCars = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'},
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}
]

function App() {
    return (
       <>
           <NewComponent studets = {studets} />
           <CarsComponent cars = {topCars} />
       </>
    );
}

export default App;
