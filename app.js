$(document).ready(function(){
  console.log('jQuery loaded');

  // write to local storage from input when button save clicked
//   $('.btn-submit').on('click', function(){
//     localStorage.setItem('inputFieldValue', $('.text-entry').val());
//     var myItemInStorage = localStorage.getItem('inputFieldValue');
//     console.log('myItemInStorage', myItemInStorage);

//     // display the value here
//     $('.list-display-field').text(myItemInStorage); // ??

//   });

//   // delete from local storage when delete button clicked
//   $('.btn-delete').on('click', function(){
//     localStorage.removeItem('inputFieldValue');
//   });
   var selectedItems = [];
  $('.addcart').click(function(){
   console.log('clicked');


   $('.selectionform input:checked').each(function(){
     var inputvalue = $(this).val();
     selectedItems.push([inputvalue]);
   });
  console.log(selectedItems);
  });
  
  $('.checkout').click(function(){
    localStorage.setItem(ol ,JSON.stringify(selectedItems));
    alert("Thank you for shopping with us!");
  });

 var orderkey = function(){
      if(localStorage.length === 0){
      return 'order1';
    }
   else {
    var keysObj = Object.keys(localStorage);
    var lastk = keysObj[keysObj.length-1];
    var partkey = lastk.slice(-1);
    var numk = Number(partkey)+1;

    return 'order'.concat(numk.toString());
  }
}
var ol = orderkey(); 

 $('.delete').click(function(){
  localStorage.clear();
 });
 });

