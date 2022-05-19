export const settings = {
    life:3,
    nbLigne: 5,
    nbColonne: 4,
    brick:{
        colors:["hsl(0, 100%, 84%)","hsl(33, 100%, 82%)","hsl(217, 100%, 81%)","hsl(249, 100%, 85%)","hsl(110, 100%, 87%)"],
        width: 150,
        height: 40,
        padding: 5,
    },
    ball:{
        speedX: 5,
        speedY: 5,
        origin: {x: 0, y:0},
        radius: 10,
        color: 'black',
    },
    barre:{
        height: 30,
        width: 200,
        positionX: 500,
        color: 'black',
        speedX: 0.1,
    }
}
