const URL = "https://cat-fact.herokuapp.com/facts";
let factpara = document.querySelector(".factss");
let btn = document.querySelector("#button");



let getfacts=async()=>{
        let response = await(fetch(URL));
    console.log(response);
  let data = await(response.json())

  factpara.innerText =data[1].text;
  
};
btn.addEventListener("click",getfacts);