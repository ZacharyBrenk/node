import React from 'react'

function FormToSheet() {
  // headers: ( "Content-Type": "application/x-www-form-urlencoded" ),

  //"https://script.google.com/macros/s/AKfycbyk0K9es9VTZGb8kAiQupm_QV3E6PBBkdNHkU5hN44zujUPEAy2O7UC67_txI1HpJMr/exec"
  const handleSubmit =(e)=>{
        e.preventDefault()
        const url = "https://script.google.com/macros/s/AKfycbyk0K9es9VTZGb8kAiQupm_QV3E6PBBkdNHkU5hN44zujUPEAy2O7UC67_txI1HpJMr/exec"
        fetch(url,{
        method:"POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: (`Name= ${e.terget.name.value}&Email=${e.terget.email.value}`)
   }).then(res=>res.text()).then(data=>{
    alert(data)
   }).catch(error=>console.log(error))
}

return(
<div>
        <h1>React to sheet</h1>
        <form onSubmit={handleSubmit}>
        <input name='name' placeholder='Name' /> <br/>
        <input name='email' placeholder='Email'/> <br/>
        <button>Add</button>
    </form>
</div>
    )
}
export default FormToSheet