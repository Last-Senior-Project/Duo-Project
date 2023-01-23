$("#container-2").hide()
$("#container-3").hide()
var data = [
    {
        userName: 'admin',
        password: 'admin'
    },
    {
        firstName: 'khalil',
        LastName: 'taghlet',
        Absence: 5,
        Email: 'khalil@gmail.com'
    },
    {
        firstName: 'majdi',
        LastName: 'benjmaa',
        Absence: 2,
        Email: 'majdi@gmail.com'
    }
]
function each(data, func) {
    for (var i = 0; i < data.length; i++) {
        func(data[i], i)

    }
}
function users(firstName, LastName,Absence,Email) {
    var obj = {}
    obj.firstName = firstName
    obj.LastName = LastName
    obj.Absence=Absence
    obj.Email = Email
   
    return obj
}
//container-1
$("#form").on('submit', function (e) {
    e.preventDefault();
  
       var str=''
        if (data[0].userName === $("#login").val() && data[0].password === $("#password1").val()) {
            $("#container-1").hide()
         for (var i = 1; i < data.length; i++) {
            str= 'user'+i+':'+ data[i].firstName+' '+data[i].LastName+' \n' + 'absences :'+data[i].Absence+'\n'
            $("#ol").append("<li>"+str+"</li>")
         }
         
           alert("idenfication matched ✅")
           $("#container-3").show()
        }
        else if(!(e.userName === $("#login").val() && e.password === $("#password1").val())) {
            alert("userName or Password are wrong !!!")
            
        }

        $("#login").val("")
        $("#password1").val("")
    return false
})
//container-2
$("#button").click(function () {
    var user1 = users($("#firstName").val(), $("#lastName").val(),0 , $("#email").val())
    data.push(user1)
    $("#firstName").val("")
    $("#lastName").val("")
    $("#email").val("")
})
$("#conx").click(function () {
    var email = prompt()
    var pass = prompt()
    for (var i = 0; i < data.length; i++) {
        if (data[i].Email === email && data[i].Password === pass) {
            alert("welcome")
            return
        }
        else {
            alert("conx failed")
            return
        }
    }
})
//container-3
$("#add").click(function(){
    $("#container-3").hide()
    $("#container-2").show()
})
$("#back").click(function(){
    $("#container-2").hide()
    $("#list").empty()
    var str=''
    for (var i = 1; i < data.length; i++) {
        str= 'user'+i+':'+ data[i].firstName+' '+data[i].LastName+' \n' + 'absences :'+data[i].Absence+'\n'
        $("#list").append("<ol id='ol'></ol>")
        $("#ol").append("<li>"+str+"</li>")
        
    }
    $("#container-3").show()
})
$("#up").click(function(){
    var x=prompt()
    each(data,function(e){
        if(e.firstName===x){
            e.Absence++
        }
    })
    $("#list").empty()
    var str=''
    for (var i = 1; i < data.length; i++) {
        str= 'user'+i+':'+ data[i].firstName+' '+data[i].LastName+' \n' + 'absences :'+data[i].Absence+'\n'
        $("#list").append("<ol id='ol'></ol>")
        $("#ol").append("<li>"+str+"</li>")
        
    }
    $("#container-3").show() 
})
$("#down").click(function(){
    var x=prompt()
    each(data,function(e){
        if(e.firstName===x){
            e.Absence--
        }
    })
    $("#list").empty()
    var str=''
    for (var i = 1; i < data.length; i++) {
        str= 'user'+i+':'+ data[i].firstName+' '+data[i].LastName+' \n' + 'absences :'+data[i].Absence+'\n'
        $("#list").append("<ol id='ol'></ol>")
        $("#ol").append("<li>"+str+"</li>")
        
    }
    $("#container-3").show() 
})
$("#remove").click(function(){
    var removing=prompt('the name')
    each(data,function(e,i){
        if(e.firstName===removing){
           
            if(confirm('do you really want to remove '+removing)){
                data.splice(i,1)
            }
        }
    })
    $("#list").empty()
    var str=''
    for (var i = 1; i < data.length; i++) {
        str= 'user'+i+':'+ data[i].firstName+' '+data[i].LastName+' \n' + 'absences :'+data[i].Absence+'\n'
        $("#list").append("<ol id='ol'></ol>")
        $("#ol").append("<li>"+str+"</li>")
        
    }
    $("#container-3").show() 
})
$("#logout").click(function(){
    if(confirm('are you sure to logout?')){
    $("#container-3").hide()
    $("#container-1").show()}
})$("#container-2").hide()
$("#container-3").hide()
var data = [
    {
        userName: 'admin',
        password: 'admin'
    },
    {
        firstName: 'khalil',
        LastName: 'taghlet',
        Absence: 5,
        Email: 'khalil@gmail.com'
    },
    {
        firstName: 'majdi',
        LastName: 'benjmaa',
        Absence: 2,
        Email: 'majdi@gmail.com'
    }
]
function each(data, func) {
    for (var i = 0; i < data.length; i++) {
        func(data[i], i)

    }
}
function users(firstName, LastName,Absence,Email) {
    var obj = {}
    obj.firstName = firstName
    obj.LastName = LastName
    obj.Absence=Absence
    obj.Email = Email
   
    return obj
}
//container-1
$("#form").on('submit', function (e) {
    e.preventDefault();
  
       var str=''
        if (data[0].userName === $("#login").val() && data[0].password === $("#password1").val()) {
            $("#container-1").hide()
         for (var i = 1; i < data.length; i++) {
            str= 'user'+i+':'+ data[i].firstName+' '+data[i].LastName+' \n' + 'absences :'+data[i].Absence+'\n'
            $("#ol").append("<li>"+str+"</li>")
         }
         
           alert("idenfication matched ✅")
           $("#container-3").show()
        }
        else if(!(e.userName === $("#login").val() && e.password === $("#password1").val())) {
            alert("userName or Password are wrong !!!")
            
        }

        $("#login").val("")
        $("#password1").val("")
    return false
})
//container-2
$("#button").click(function () {
    var user1 = users($("#firstName").val(), $("#lastName").val(),0 , $("#email").val())
    data.push(user1)
    $("#firstName").val("")
    $("#lastName").val("")
    $("#email").val("")
})
$("#conx").click(function () {
    var email = prompt()
    var pass = prompt()
    for (var i = 0; i < data.length; i++) {
        if (data[i].Email === email && data[i].Password === pass) {
            alert("welcome")
            return
        }
        else {
            alert("conx failed")
            return
        }
    }
})
//container-3
$("#add").click(function(){
    $("#container-3").hide()
    $("#container-2").show()
})
$("#back").click(function(){
    $("#container-2").hide()
    $("#list").empty()
    var str=''
    for (var i = 1; i < data.length; i++) {
        str= 'user'+i+':'+ data[i].firstName+' '+data[i].LastName+' \n' + 'absences :'+data[i].Absence+'\n'
        $("#list").append("<ol id='ol'></ol>")
        $("#ol").append("<li>"+str+"</li>")
        
    }
    $("#container-3").show()
})
$("#up").click(function(){
    var x=prompt()
    each(data,function(e){
        if(e.firstName===x){
            e.Absence++
        }
    })
    $("#list").empty()
    var str=''
    for (var i = 1; i < data.length; i++) {
        str= 'user'+i+':'+ data[i].firstName+' '+data[i].LastName+' \n' + 'absences :'+data[i].Absence+'\n'
        $("#list").append("<ol id='ol'></ol>")
        $("#ol").append("<li>"+str+"</li>")
        
    }
    $("#container-3").show() 
})
$("#down").click(function(){
    var x=prompt()
    each(data,function(e){
        if(e.firstName===x){
            e.Absence--
        }
    })
    $("#list").empty()
    var str=''
    for (var i = 1; i < data.length; i++) {
        str= 'user'+i+':'+ data[i].firstName+' '+data[i].LastName+' \n' + 'absences :'+data[i].Absence+'\n'
        $("#list").append("<ol id='ol'></ol>")
        $("#ol").append("<li>"+str+"</li>")
        
    }
    $("#container-3").show() 
})
$("#remove").click(function(){
    var removing=prompt('the name')
    each(data,function(e,i){
        if(e.firstName===removing){
           
            if(confirm('do you really want to remove '+removing)){
                data.splice(i,1)
            }
        }
    })
    $("#list").empty()
    var str=''
    for (var i = 1; i < data.length; i++) {
        str= 'user'+i+':'+ data[i].firstName+' '+data[i].LastName+' \n' + 'absences :'+data[i].Absence+'\n'
        $("#list").append("<ol id='ol'></ol>")
        $("#ol").append("<li>"+str+"</li>")
        
    }
    $("#container-3").show() 
})
$("#logout").click(function(){
    if(confirm('are you sure to logout?')){
    $("#container-3").hide()
    $("#container-1").show()}
})