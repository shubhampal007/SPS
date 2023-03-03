const base_api='http://localhost:2707/registerUser';

const form=document.querySelector('#final-s');
console.log(form);
// console.log(document.querySelector('form'));
form.addEventListener('submit',onSubmit);
async function onSubmit(event){

  event.preventDefault();
const url=new URL(base_api);
// async function main(){
//   const body={
//     name:'shubham'};
const body=new FormData(form);

    const header=new Headers();
    header.append('Content-Type','application/json');


const options={
    method:'POST',
    body: JSON.stringify(body),
    headers:header
};

try{
    const response =await  fetch(url,options);
    const text=  await response.text();
    console.log(text);
}
catch(error)
{
    console.error("Oops: "+error);
}
// fetch(base_api).then(res => res.text()).then(console.log);
}
