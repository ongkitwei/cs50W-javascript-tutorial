let counter = 0;

function count()
{
   
    // console.log("anjing")
    counter += 1
    document.querySelector('h1').innerHTML = counter

    if(counter % 10 == 0)
    {
        alert("current number is " + counter)

    }


}


function reset()
{
    counter = 0;
    document.querySelector('h1').innerHTML = 0

}

// document.addEventListener('DOMContentLoaded', function(){
//     document.querySelector('button').addEventListener("click", count)
// })

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('form').onsubmit = function(){
    inputvalue = document.querySelector('#name').value ;
    alert(`Hello, ${inputvalue}`) ;
}
})
