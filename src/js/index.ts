//Write your Typescript code here
let myElement:HTMLLIElement = <HTMLLIElement> document.getElementById("0");
console.log(myElement);

let myList:HTMLCollectionOf<HTMLLIElement> = <HTMLCollectionOf<HTMLLIElement>> document.getElementsByTagName("li");
for(let x:number = 0; x< myList.length; x++)
{
    console.log(myList[x]);
}

let item:HTMLLIElement = <HTMLLIElement> document.getElementById("3");
item.setAttribute("visibility","visible");

let myList2:HTMLCollectionOf<HTMLLIElement> = <HTMLCollectionOf<HTMLLIElement>> document.getElementsByClassName("unhealthy");
for(let x:number = 0; x< myList2.length; x++)
{
    myList2[x].setAttribute("background-color","#fff");
}