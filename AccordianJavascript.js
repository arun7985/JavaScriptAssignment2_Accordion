let accordian_array = [{ "head_name": "home", "Information": "Yize a layout and actions and how to modify them later unit" },
                   { "head_name": "Element", "Information": "ponents with the Lightning App Builder (learn more in Trailhead" },
                    { "head_name": "Data", "Information": "What you see when you log in to Salesforce layouts" }];

//here accordion created automatically and dynamically       
var accordian_length = accordian_array.length;
let row = "";

for (let i = 0; i < accordian_length; i++) {
  let accordian_element = accordian_array[i];
  let button = document.createElement('button');
  button.innerText = accordian_element.head_name
  button.setAttribute('class', 'acordian')

  let div = document.createElement('div');
  div.setAttribute('class', 'displayinfo')
  div.innerText = accordian_element.Information

  document.getElementById("accordiandiv").appendChild(button);
  document.getElementById("accordiandiv").appendChild(div)
}

var afterclick = document.getElementsByClassName("acordian");
var afterclick_len = afterclick.length;

for (var i = 0; i < afterclick_len; i++) {
  afterclick[i].onclick = function () {
    this.classList.toggle("active");
    var showin = this.nextSibling;
    if (showin.style.maxHeight) {
      //it is open here required to close th accordian
      showin.style.maxHeight = null;
    }
    else {
      showin.style.maxHeight = showin.scrollHeight + "px";
    }
  }

}


