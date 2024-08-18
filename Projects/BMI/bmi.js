const form = document.querySelector('form');

form.addEventListener('submit',function (e){
 e.preventDefault();

 const height = parseInt(document.querySelector('#height').value);
 const weight = parseInt(document.querySelector('#weight').value);
 const results = document.querySelector('#results');

if(height === '' || height<0  || isNaN(height)){
    results.innerHTML=`Please give vaild height ${height}`;
}
else if(height === '' || weight<0  || isNaN(weight)){
    results.innerHTML=`Please give vaild height ${weight}`;
}
else{
    const bmi=(weight/((height*height)/10000)).toFixed(2);
    const range=results.innerHTML=`<span>${bmi}</span>`;
}

});