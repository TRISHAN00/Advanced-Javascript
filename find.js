let names = ['Trishan', 'Rishan', 'Riya', 'Oushi']

names.find((currentValue , currentIndex, currentArray) => {
   if (currentValue.length >= 5) {  
       console.log(`${names.length} ${currentValue.length}`);
   }
})
