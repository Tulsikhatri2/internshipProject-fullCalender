
  // var resources= [
  //   {
  //     id: 'a',
  //     title: 'Dr. A'
  //   },
  //   {
  //     id: 'b',
  //     title: 'Dr. B'
  //   },
  //   {
  //     id: 'c',
  //     title: 'Dr. C'
  //   },
  //   {
  //     id: 'd',
  //     title: 'Dr. D'
  //   }
  // ]

  
  // events1= [
  //   {
  //     title: 'First Appointment', 
  //     start: '2023-12-29T13:00:00', 
  //     end: '2023-12-29T14:00:00',
  //     description:'Lecture',
  //     resourceId:"d",
      
  //   },
  //   {
  //     title: 'second Appointment', 
  //     start: '2023-12-29T15:00:00', 
  //     end: '2023-12-29T16:00:00',
  //     description:'Lecture',
  //     resourceId:"d"
  //   },
  //   {
  //     title: 'First Appointment', 
  //     start: '2023-12-29T13:00:00', 
  //     end: '2023-12-29T14:00:00',
  //     description:'Lecture',
  //     resourceId:"a",
      
  //   },
  //   {
  //     title: 'second Appointment', 
  //     start: '2023-12-29T15:00:00', 
  //     end: '2023-12-29T16:00:00',
  //     description:'Lecture',
  //     resourceId:"a"
  //   }
  // ]
var calendarEl = document.getElementById("calendar");

var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'resourceTimeGridDay',
    // resources:resources,
    allDaySlot: false,
    // events:events1,
    eventColor: '#378006',
    editable:true,
    nowIndicator:true,
  });
  
  calendar.render();
  $("#drBtn").click(a=>{
     drId=$("#drId").val();
     var drName=$("#drName").val();

     var drObj={
      id:drId,
      title:drName
     }
     console.log(drObj);
     clrfield1();
     drId==""||drName==""?error():calendar.addResource(drObj);
     
  });
  
var patient=[];
  $("#pBtn").click(b=>{
    var pName=$("#pName").val();
    var pNumber=$("#pNumber").val();
    // var pId=$("#pId").val();
    var st=$("#start").val();
    var e=$("#end").val();
    // var selectDr=$("#drId").val();

    var appoint={
      title: pName, 
      start: st, 
      end: e,
      description:pNumber,
      resourceId:drId
    }

    // pName==""||pNumber==""||st==""||e==""||selectDr==""?error():calendar.addEvent(appoint);
    console.log(appoint);
    calendar.addEvent(appoint);
    
  });
  function error(){
    Swal.fire({
      icon: "error",
      title: "Oops...Something went wrong!!",
      text: "ALL FIELDS ARE MANDATORY",
      footer: '<a href="#">Why do I have this issue?</a>'
    });
  }

  // function doctorID(){
  //   var drString="";
  //       patient.forEach(a=>{
  //         drString += `<option>${a.drId}</option>`
  //       })
  //       $("#appoint").html(drString);
  // }

  // function patientAppointment(){
  //   patient.push(appoint);
  //   console.log(patient);
  //   clrfield();
  //   doctorID();
  // }
  
  function clrfield(){
    $("#pName").val("");
    $("#pNumber").val("");
    $("#pId").val("");
    $("#start").val("");
    $("#end").val("");
}

function clrfield1(){
  $("#drId").val("");
  $("#drName").val("");
}

