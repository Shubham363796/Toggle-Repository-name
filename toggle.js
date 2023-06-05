window.onload =function(){
    var body = document.getElementById('body');
    var button = document.getElementById('button');
    button.onclick = function (){
        if(body.className=='white'){
            body.className='black';
            button.className='white';
        }else{
            body.className='white';
            button.className='black';
        }
    }
}
