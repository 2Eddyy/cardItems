const products=[
{
    id:1,
    name:'trackpant',
    prize:1000,
    qty:0
},
{
    id:2,
    name:'trackpant',
    prize:1000,
    qty:0
},
{
    id:3,
    name:'trackpant',
    prize:1000,
    qty:0
},
{
    id:4,
    name:'trackpant',
    prize:1000,
    qty:0
},
{
    id:5,
    name:'trackpant',
    prize:1000,
    qty:0
},
];


function addTocard(){
    var Items=document.getElementById('textvalue').value;
  var result= products.find((proId)=>proId.id==Items).qty++;
  console.log(result); 
}
function cardItems(){
 card=[];
    products.filter((proId)=>proId.qty>0).forEach((proId1)=>card.push(proId1));
    console.log(card);
    }
function removeCard(){
    var Items=document.getElementById('textvalue').value;
    products.find((proId)=>proId.id==Items).qty=0;
    cardItems(); 
}
