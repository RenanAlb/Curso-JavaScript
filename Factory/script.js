function createMicrofone(color = 'black') {
    let isOn = true

    return {
            color,
            isOn,
        
            toggleOnOff: function() {  
            if (isOn) {
            console.log('desligar');
            } else {
            console.log('ligar');
            } 
            isOn = !isOn                
        }
    }
}

const microfoneBlack = createMicrofone();
const microfoneWhite = createMicrofone('white');
console.log(microfone.color);