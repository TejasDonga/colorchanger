const button = document.querySelectorAll('button');
const body = document.querySelector('body');

button.forEach(function (button){
    console.log(button);
    button.addEventListener('click', function(e){
        // console.log(e);
        console.log(e.target);
        // switch (button.id) {
        //     case 'blue':
        //         body.style.backgroundColor = button.id;                
        //         break;
        //     case 'red':
        //         body.style.backgroundColor = button.id;                
        //         break;
        //     case 'black':
        //         body.style.backgroundColor = button.id;                
        //         break;
        //     case 'grey':
        //         body.style.backgroundColor = button.id;                
        //         break;
        //     case 'purple':
        //         body.style.backgroundColor = button.id;                
        //         break;
        //     default:
        //         break;
        // }
        if(e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }else if(e.target.id === 'red') {
            body.style.backgroundColor = e.target.id;
        }else if(e.target.id === 'black') {
            body.style.backgroundColor = e.target.id;
        }else if(e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        }else if(e.target.id === 'purple') {
            body.style.backgroundColor = e.target.id;
        }
    });
});