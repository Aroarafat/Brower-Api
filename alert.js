console.log('i am here');

// alert('Ma is coming!!');

const maComing = () => {
    alert('Ammu ashtese taratari vag');
}

const askPicnic = () => {
    const response = confirm('Are you going to picnic?');
    console.log(response);
    if (response === true) {
        alert('amake fee ta bKash kore de bhai');
    }
    else {
        console.log('DGM !!! dur a jaiya mor shala!!!');
    }
}

const askName = () => {
    const name = prompt('What is your name?');
    if (name) {
        console.log(name)
    }
}