
let cl = console.log;

let array = [
    {
	   tname : "Big brother Esports",
	   pname : "BB1 BB2 BB3 BB4",
	   btn : "BB"
    },
	{
	   tname : "Godlike ",
	   pname : "Jonathan Zgod Neyo Clutchgog",
	   btn : "GODl"
    },
	{
	   tname : "Soul",
	   pname : "S8UL",
	   btn : "soul"
    },
	{
	   tname : "Team Xspark",
	   pname : "Scout Dreams Sarang Pukar",
	   btn : "TX"
    },
	{
	   tname : "Blind Esports",
	   pname : "Spower Manya Rony Nakul",
	   btn : "Blind"
    },
	{
	   tname : "Team Xspark",
	   pname : "Scout Dreams Sarang Pukar",
	   btn : "TX"
    },
	{
	   tname : "Team Xspark",
	   pname : "Scout Dreams Sarang Pukar",
	   btn : "TX"
    },
	{
	   tname : "Team Xspark",
	   pname : "Scout Dreams Sarang Pukar",
	   btn : "TX"
    },
	
]; 

cl(array)

let result = ``;

array.forEach((num)=>{
    cl(num)
	result += `  <div class="col-md-6" >			 
	                 <div class="card mb-4">
				         <div class="card-header">
		                     <div class="title">${num.tname}</div>
		                 </div>
		                 <div class="card-body">
		                     <div class="info">${num.pname}</div>
		                 </div>
		                 <div class="card-footer">
		                         <a href="#" class="btn btn-primary">${num.btn}</a>
		                 </div>
		             </div>
			     </div>       `
})

const cardsbyforeach = document.getElementById("cardsbyforeach");

cardsbyforeach.innerHTML = result;


