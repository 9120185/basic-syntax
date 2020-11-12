function load () {

   //write I LOVE YOU in page
   document.getElementById('div').innerHTML = "I LOVE YOU"
   //Find a ID from Div HTML Tag
   var createElementInDiv = document.getElementById('div')
   // create H1 into the DIV Tag in HTML
   var newEle = document.createElement('h1')
   // make a text in H1
   newEle.innerText = "Hello Guys"
   //put the H1 with text in DIV HTML Tag using this method
   createElementInDiv.appendChild(newEle)
   // show the result
   console.log(createElementInDiv)

   //Remove P tage from DIV
   var parent = document.getElementById('div')
   var child = document.getElementById('div').getElementsByTagName('p')[0]
   parent.removeChild(child)

   
}


