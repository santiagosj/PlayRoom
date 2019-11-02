export const FICHAS = {
    0: {forma:[[0]], color:'0,0,0'},
    I:{
        forma:[
                [0, 'I', 0, 0],
                [0, 'I', 0, 0],
                [0, 'I', 0, 0],
                [0, 'I', 0, 0]
              ],
        color: '0, 255, 255'
     },
     T:{
         forma:[
                [0, 0, 0],
                ['T','T','T'],
                [0,'T',0],
                
         ],
         color:'0, 255, 15'
     },
     J:{
        forma:[
                [0,'J',0],
                [0,'J',0],
                ['J','J',0],
        ],
        color:'255,255,0'
    },
    L:{
         forma:[
                [0,'L',0],
                [0,'L',0],
                [0,'L','L'],
         ],
         color:'255,0,255'
    },
    S:{
        forma:[
                [0,'S','S'],
                ['S','S',0],
                [0, 0, 0]
            
        ],
        color:'0,255,143'
    },
    Z:{
        forma:[
                ['Z','Z',0],
                [0,'Z','Z'],
                [0, 0, 0]
            
        ],
        color:'255,166,0'
    },
    O:{
        forma:[
                ['O','O'],
                ['O','O'],
            
        ],
        color:'220,175,255'
    }
}

export const fichasRandom = () => {

    const fichas = 'IJLOSTZ'

    const randomFichas = fichas[Math.floor(Math.random() * fichas.length)];
        
    return FICHAS[randomFichas]
    
}