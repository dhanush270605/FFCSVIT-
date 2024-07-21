function display(){
    let dateTime = new Date()
    let hour = dateTime.getHours()
    let min = dateTime.getMinutes()
    let sec = dateTime.getSeconds()
    let date = dateTime.getDate()
    let month = dateTime.getMonth()
    let year = dateTime.getFullYear

    document.querySelector('#Date').innerHTML = date
    document.querySelector('#year').innerHTMl = year

    let m1 = month+1
    if(m1 == 1){
        document.querySelector('#month').innerHTML = 'Jannuary'
    }
    else if(m1 == 2){
        document.querySelector('#month').innerHTML = 'Feburary'
    }
    else if(m1 == 3){
        document.querySelector('#month').innerHTML = 'March'
    }
    else if(m1 == 4){
        document.querySelector('#month').innerHTML = 'April'
    }
    else if(m1 == 5){
        document.querySelector('#month').innerHTML = 'May'
    }
    else if(m1 == 6){
        document.querySelector('#month').innerHTML = 'June'
    }
    else if(m1 == 7){
        document.querySelector('#month').innerHTML = 'July'
    }
    else if(m1 == 8){
        document.querySelector('#month').innerHTML = 'August'
    }
    else if(m1 == 9){
        document.querySelector('#month').innerHTML = 'September'
    }
    else if(m1 == 10){
        document.querySelector('#month').innerHTML = 'October'
    }
    else if(m1 == 11){
        document.querySelector('#month').innerHTML = 'November'
    }
    else if(m1 == 12){
        document.querySelector('#month').innerHTML = 'December'
    }
    if(hour > 12){
        hour -=12
        if(hour<10){
            document.getElementById('hour').innerHTML = '0'+hour
        }
        else{
            document.getElementById('hour').innerHTML = hour
        }
        if(min<10){
            document.getElementById('min').innerHTML = '0'+min
        }
        else{
            document.getElementById('min').innerHTML = min
        }
        if(sec<10){
            document.getElementById('sec').innerHTML = '0'+ sec
        }
        else{
            document.getElementById('sec').innerHTML = sec
        }
        
        document.getElementById('ampm').innerHTML = 'PM'
    }
    else{
        if(hour<10){
            document.getElementById('hour').innerHTML = '0'+hour
        }
        else{
            document.getElementById('hour').innerHTML = hour
        }
        if(min<10){
            document.getElementById('min').innerHTML = '0'+min
        }
        else{
            document.getElementById('min').innerHTML = min
        }
        if(sec<10){
            document.getElementById('sec').innerHTML = '0'+ sec
        }
        else{
            document.getElementById('sec').innerHTML = sec
        }
        
        document.getElementById('ampm').innerHTML = 'AM' 

    }
}

setInterval(() =>display(),1000)

const id = document.getElementById('reg')
const form = document.getElementById('form')

form.addEventListener('submit',function(e){
    e.preventDefault()

    let regNumber = id.value
    localStorage.setItem('regNum',regNumber)
    window.location.href = "page2.html"
})

function myFunction(){
    var x = document.querySelector('#pass')
    if(x.type=="password"){
        x.type = 'text'
    }
    else{
        x.type="password"
    }
}