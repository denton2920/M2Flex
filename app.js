let canvas = document.getElementById("canvas");
let g = canvas.getContext("2d");

const gamesrare_start=0;
const gamesrare_ingame=1;
const gamesrare_gameover=2;

const ingamestate_start=0;
const ingamestate_roll=1;
const ingamestate_end=0;

let boardPositionSize= 50;
let pawPositions= [];
let noerdPositions=[];
let playerAmountButtons = [];



