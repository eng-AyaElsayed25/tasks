function getRandomPrag()
{
   
 var pragList=[
   'You only live once but if you do it right once is enough― Mae West',
     'Be the change that you wish to see in the world― Mahatma Gandhi',
      'Friendship ... is born at the moment when one man says to another What! You too? I thought that no one but myself <br> ― C.S. Lewis The Four Loves'
   ]
   
      var RandomPrag=[Math.floor(Math.random()*pragList.length)];


       var prag=pragList[ RandomPrag];
document.getElementById("randomprag").innerHTML = prag; 



}  
