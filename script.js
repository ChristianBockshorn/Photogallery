let images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'
   , '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg'
   , '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg'
   , '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.jpg'];


function render() {
   for (let i = 1; i <= images.length; i++) {
      let content = document.getElementById('openImage-bg').innerHTML += `
      <div class="imgBoxContainer" >
         <img id="imgBox2" class="imgBox" src ="img/${i}.jpg" onclick="openImage(${i})">
      </div>
      
      `;

   }
}

function openImage(i) {
   document.getElementById("fullimg").innerHTML = "";
   document.getElementById("fullimg").classList.remove("d-none");
   document.getElementById("fullimg").classList.add("openImage-bg");


   openImagehtml(i);

}


function openImagehtml(i) {
   document.getElementById("fullimg").innerHTML = `
      <div>
         <div class="close">
             <img src="icon/close-window.png" onclick="closeImg()">
         </div>

         <div class="content">
             <img class="arrows" src="icon/arrow-left.png" onclick="lastImgLeft(${i} - 1)">    
             <img class="picture" src="img/${i}.jpg">
             <img class="arrows" src="icon/arrow-right.png" onclick="nextImgRight(${i} + 1)">
         </div>
      </div>
      `;
}

//Bild nach rechts blätter
function nextImgRight(i) {
   if (i < images.length){
      
   }else {
      i = 1;
   }

   openImage(i);
}

//Bild nach links blätter
function lastImgLeft(i) {
   if (i >= 1 ) {
      
   }
   else{
      i = 23;
   }
   
   openImage(i);
}



function closeImg() {
   document.getElementById("fullimg").classList.add("d-none");
   document.getElementById('fullimg').classList.remove('openimage-bg');

}



