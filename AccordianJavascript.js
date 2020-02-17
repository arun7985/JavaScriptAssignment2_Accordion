        

let accordian_array = [{"head_name":"home" , "Information":"Yize a layout and actions and how to modify them    later unit"},
{"head_name":"Element", "Information":"ponents with the Lightning App Builder (learn more in Trailhead"},
{"head_name": "Data", "Information":"What you see when you log in to Salesforce layouts"}];

//here accordion created automatically and dynamically       
  var accordian_length=accordian_array.length;
  let row="";
  let row2="";
  
  for(let i=0;i<accordian_length;i++)
  {
      let accordian_element=accordian_array[i];
      let   element_accordian="<div>"
      element_accordian+="<button class='acordian'>";
      element_accordian+=accordian_element.head_name;
      element_accordian+="</buttton>";
      element_accordian+="<div class='displayinfo'>";
      element_accordian+="<p>";
      element_accordian+=accordian_element.Information;
      element_accordian+="</p>";
      element_accordian+="</div>";
      element_accordian+="</div>";
      row=row+element_accordian;
  }
   document.getElementById("accordiandiv").innerHTML=row;
  
          var afterclick = document.getElementsByClassName("acordian");
          var afterclick_len=afterclick.length;
          
          for (var i = 0; i < afterclick_len; i++)
           {
               afterclick[i].onclick= function ()
             {
              this.classList.toggle("active");
              var showin = this.firstElementChild;
              if (showin.style.maxHeight)
               {
                   //it is open here required to close th accordian
                showin.style.maxHeight = null;
              } 
              else 
              {
                showin.style.maxHeight =showin.scrollHeight+"px";
              }
             }
            
          }

