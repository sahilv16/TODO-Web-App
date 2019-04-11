// var h = document.createElement('h1')
// var myvalue = document.createTextNode('hello world')
// h.appendChild(myvalue)

// document.querySelector('h1').appendChild(h)

// var val = 5
// while (val > 0) {
//     console.log(val)
//     val--
// }

var ul = document.getElementById('list');
var li;






var addbutton = document.getElementById('add');
addbutton.addEventListener('click',additem)

var removebutton = document.getElementById('remove');
removebutton.addEventListener('click',removeitem);

var erasebutton = document.getElementById('erase');
erasebutton.addEventListener('click',eraseitem);






function eraseitem(){
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0]) {
            ul.removeChild(li[index])
        }
         
         
     }

}
function additem(){
    var input = document.getElementById('input')
    var item = input.value;
    ul = document.getElementById('list');
    var textnode = document.createTextNode(item)

    if(item === " ") {
        // return false;
        // var para  = document.createElement('input');
        // var node = document.createTextNode('enter your todo');
        // para.appendChild(node);

        // var element = document.getElementById('list')
        // var child = document.getElementById('#add')
        // element.insertBefore(para,child)

        // const mynewpara = document.createElement('p')
        // mynewpara.textContent('enter your todo')
        // document.querySelector('body').appendChild(mynewpara)
        
    }else{
        //create li 
        li = document.createElement('li')
        //create checkbox
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id','check')
        //create label
        var label = document.createElement('label');
        label.setAttribute('for','item')
        
        //add these elements on web page
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li,ul.childNodes[0]);
      
        // setTimeout(() => {
        //       li.className = 'visual'
        // }, 6);



        // input.value = '';

    }

}
function removeitem(){
  li = ul.children
  console.log(li);
  for (let index = 0; index < li.length; index++) {
     while (li[index] && li[index].children[0].checked) {
         ul.removeChild(li[index])
     }
      
      
  }
  
}
