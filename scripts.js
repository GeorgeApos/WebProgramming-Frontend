

document.getElementById('button').addEventListener('click', function (ev) {
    const configuration = document.getElementsByName('Configuration').value;
    const factory = document.getElementsByName('Factory').value;
    const dealer = document.getElementsByName('Dealer').value;


    let message = 0;

    if(configuration = 'gtmanual'){
        message += 17790;
    }else if(configuration = 'gtauto'){
        message += 18590;
    }else if(configuration = 'gtsmanual'){
        message += 22455;
    }else if(configuration = 'gtsmgtssportanual'){
        message += 23155;
    }

    if(factory = 'option1'){
        message += 1235;
    }else if(factory = 'option2'){
        message += 3354;
    }else if(factory = 'option3'){
        message += 0;
    }

    document.querySelector('span').innerHTML = message;
});
