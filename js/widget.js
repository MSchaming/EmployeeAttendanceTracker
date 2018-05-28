/* 
1. Create new HTML list item

2. Check the JSON data file for the "inOffice" property, 
    - if true, add class of "in" to li tag
    - if false, add class of "out" to li tag

3. Get the value for the "name" property; insert it inside the <li> tag

4. close the li tag

*/



var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function (){
    if(xhr.readyState === 4){
        // console.log(xhr.responseText);
        // console.log(typeof xhr.responseText); //logged as String

        let employees = JSON.parse(xhr.responseText);
        console.log(typeof employees); //now, once parsed, logged as Object
        console.log(employees);

        var statusHTML = '<ul class="bulleted">';
        for(var i=0; i < employees.length; i += 1){
            if(employees[i].inoffice === true){
                statusHTML += '<li class="in">';
            } else {
                statusHTML += '<li class="out">';
            }
            statusHTML += employees[i].name;
            statusHTML += '</li>';
        }
        statusHTML += '</ul>'
        document.getElementById('employeeList').innerHTML = statusHTML;
    }
    console.log(statusHTML);
} // end of callback

xhr.open('GET', 'data/employees.json');

xhr.send();



var xhr1 = new XMLHttpRequest();

xhr1.onreadystatechange = function () {
    if(xhr1.readyState === 4) {
        let rooms = JSON.parse(xhr1.responseText);
        console.log(rooms);

        var roomStatus = '<ul class="rooms">';
        for(var i = 0; i < rooms.length; i += 1){
            if(rooms[i].available === true) {
                roomStatus += '<li class="empty">';
               
                
            } else {
                roomStatus += '<li class="full">';
               
            }
            
            roomStatus += rooms[i].room;
            
            

            roomStatus += '</li>';
        }
            roomStatus += "</ul>";
            document.getElementById('roomList').innerHTML = roomStatus;
            console.log(roomStatus);

    }
} //end of room callback

xhr1.open('GET', 'data/rooms.json');

xhr1.send();
