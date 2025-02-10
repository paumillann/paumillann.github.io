document.getElementById('loadBtn').onclick = function() {
   document.getElementById('dataContainer').innerHTML = 
       '<p>Contingut carregat correctament!</p>';
};

document.getElementById('fileInput').onchange = function(e) {
   const reader = new FileReader();
   reader.onload = function() {
       document.getElementById('imagePreview').src = reader.result;
   };
   reader.readAsDataURL(e.target.files[0]);
};
document.getElementById('contactForm').onsubmit = function(e) {
   e.preventDefault();
   alert('Missatge enviat amb èxit!');
   this.reset();
};


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.onclick = function(e) {
       e.preventDefault();
       document.querySelector(this.getAttribute('href')).scrollIntoView({
           behavior: 'smooth'
       });
   };
});