const microfone = {
    color: 'black',
    isOn: true,
    toggleOnOff: function() {  
        if (microfone.isOn) {
            console.log('desligar');
        } else {
            console.log('ligar');
        } 
        microfone.isOn = !microfone.isOn                
    }
};

console.log(microfone.color);
microfone.toggleOnOff();
microfone.toggleOnOff();

// toggleOnOff: function() {} ou toggleOnOff() {};