var totalamount=0;
function addElements(){
    var name=document.getElementById("name").value;
    var amount=document.getElementById("amount").value;
    var category=document.getElementById("category").value;
    var date=document.getElementById("date").value;
    var tableBody=document.getElementById("additems");

    totalamount=Number(totalamount)+Number(amount);

    document.getElementById("total").innerText=totalamount;
    
    const row1=document.createElement('tr');
    row1.innerHTML=`<td>${name}</td><td>${amount}</td><td>${category}</td><td>${date}</td><td><button id='btn1'>Edit</button><button id='btn2'>Delete</button></td>`
    tableBody.appendChild(row1);

    row1.querySelector("#btn2").addEventListener('click',()=>{
        row1.remove();
    }); 
}