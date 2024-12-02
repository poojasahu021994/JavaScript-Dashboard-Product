async function fet_data(){
    let res = await fetch("http://localhost:3000/students")
    let data = await res.json();
    console.log(data)
    let final_data=data.map((t)=>`      
      <tr>
         <td> ${t.id} </td>
         <td> ${t.name} </td>
         <td> ${t.Price} </td>
         <td> ${t.Status} </td>
         <td><button onclick="myedit('${t.id}')" style="background-color: #7380ec; hight:50px; width:50px;  font-size: 15px;">Edit </button></td>
         <td><button onclick="mydelete('${t.id}')" style="background-color: #ff7782; hight:50px; width:70px; font-size: 15px;" >Delete </button></td>
      </tr>
    `).join("")

    document.querySelector('#showdata').innerHTML=final_data
}
fet_data()

function mydelete(id){
   fetch(`http://localhost:3000/students/${id}`,{
    method:'DELETE'
   })
   .then(re=>alert("deleted successfully....!!"))
}

// insert data
function insertdata(){
    let data = {
        name:document.querySelector('#name').value,
       Price:document.querySelector('#Price').value,
       Status:document.querySelector('#Status').value
    }
 
    fetch("http://localhost:3000/students",{
       method:'POST',
       headers:{
          'content-type':'application/JSON'
       },
       body:JSON.stringify(data)
    })
    .then(res=>alert("Insreted...!!!"))
 }
 async function myedit(id){
    let myupdatedata = await fetch(`http://localhost:3000/students/${id}`)
    let redata =await myupdatedata.json()
    let senddata =`
    <div style="background-color: #dce1eb; hight:50px; width:100px; font-size: 15px; margin:50px;">
     <input type="text" value="${redata.id}" readonly > <br>
     <input type="text" value="${redata.name}" id="name1"> <br>
     <input type="text" value="${redata.Price}" id="Price1"> <br>
     <input type="text" value="${redata.Status}" id="Status1"> <br>
     <button id="btn_save" onclick="finalupdate('${redata.id}')">Submit</button>
   
     </div>
    `
    document.querySelector('#edittable').innerHTML = senddata
 }

 function finalupdate(id){
    let fdata={
        name:document.querySelector('#name1').value,
        Price:document.querySelector('#Price1').value,
        Status:document.querySelector('#Status1').value,
    }
    fetch(`http://localhost:3000/students/${id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(fdata)
    })
    .then(r=>alert("update....!!!"))
}