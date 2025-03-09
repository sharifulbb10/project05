
// click event management
// to control the pop-up calender view
// when clicked on the input box

// to make sure whether inside the text box or outside a click takes place
isClickedInside=false; 
calenderClicked=false;

//to make sure the pop-up calender window has the same width to the input box
document.querySelector('.calender').style.width=`${document.querySelector('.inputBox').offsetWidth}px`;

// when clicked on input box, pop-up calender window will be toggled
document.querySelector('.inputBox').addEventListener('click', ()=>
	{	
		// when clicked, pop-calender view will be vanished
		if (document.querySelector('.calender').style.display=='flex') {
			document.querySelector('.calender').style.display='none';

		// when clicked, pop-calender view will be visible
		} else {
			document.querySelector('.calender').style.display='flex';
			}

			// this click will trigger a body click event as well
			// to prevent the trigger of the body-click, some delay to the next event has given
		isClickedInside=true;
		setTimeout(()=>{isClickedInside=false;}, 200);
	});

// body-click event, to make sure when user clicks outside of the input box, the calender-view vanishes as well
document.querySelector('body').addEventListener('click', ()=>
	{	
		// To make sure- the click is not inside the input-box
		if (isClickedInside==false && calenderClicked==false)	{
			// calender pop-up will vanish away
			if (document.querySelector('.calender').style.display=='flex') {
				document.querySelector('.calender').style.display='none';
			}
		}
	});

// to make sure that when user clicks on the calender, the calender does not vanish
document.querySelector('.calender').addEventListener('click', ()=> {
	document.querySelector('.calender').style.display='flex';

	// to prevent the body-click event
	// the delay will prohibit the body-click event to take place
	calenderClicked=true;
	setTimeout(()=>{
		calenderClicked=false;
	}, 200);
})

//calender body formation
monthString=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// necessary stylings of the calender view
document.querySelector('.calender').style.fontSize = "0.9rem";
document.querySelector('.calender').style.width = `${document.querySelector('.inputBox').offsetWidth}px`;
document.querySelector('.calender').style.backgroundColor = "white";
document.querySelector('.calender').style.boxSizing = "border-box"; 
document.querySelector('.calender').style.padding = "5px";
document.querySelector('.calender').style.display = "none";
document.querySelector('.calender').style.flexDirection = "column";
document.querySelector('.calender').style.justifyContent = "center";
document.querySelector('.calender').style.alignItems = "center";
document.querySelector('.calender').style.position = 'relative';

let monthIndex = new Date().getMonth();  // current month as an index
let currentYear = new Date().getFullYear(); // current year

// the head of the calender body showing the month and the year
// an html tag with two arrows both side, including the month and the year in the middle
// sideways arrow will change the month and the corresponding year
document.querySelector('.calenderHead').innerHTML=
	`<span style="position: absolute; left: 15px; cursor: pointer;" class="left"> < </span>
			${monthString[monthIndex]} ${currentYear}
	<span style="position: absolute; right: 15px; cursor: pointer;" class="right"> > </span>`;

// a function to trigger the click event for the sideways arrows
// triggers change of the month and the corresponding year
function attachEventListener() {

	// event of left arrow click
	document.querySelector('.left').addEventListener("click", ()=>{

		// January month will be changed to December on left arrow click
		// And 2025 (January) will be 2024 (December) for example
		if (monthIndex==0) { 	// monthIndex 0 indicates January month
			monthIndex=11; 			// monthIndex 11 indicates December month
			currentYear--;
			} else {
				monthIndex--;
			}
		updateCalenderHead(monthIndex);
		fillThePreviousMonth();
		styleIt();
	});

	// event of right arrow click
	document.querySelector('.right').addEventListener("click", ()=>{

		// December will be changed to January on right arrow click
		// The year will be changed as well, 2024 (December) will be 2025 (January)
		if (monthIndex==11) {monthIndex=0; currentYear++} else {monthIndex++;}
		updateCalenderHead(monthIndex);
		fillTheNextMonth();
		styleIt();
	});
}

// to trigger changes of month and year on the sideway arrow clicks
attachEventListener();

// To display the changed month and year above the calender
// Parameter i indicates the month as an array index
// 'monthString' is the array containing the months as elements

function updateCalenderHead(i) {
	document.querySelector('.calenderHead').innerHTML=`
		<span style="position: absolute; left: 15px; cursor: pointer;" class="left"> < </span>
			${monthString[i]} ${currentYear}
	<span style="position: absolute; right: 15px; cursor: pointer;" class="right"> > </span>`;
	attachEventListener();
}

// grid-calender
// A div section of display-grid property, for previewing the dates
document.querySelector('.gridSection').style.display = "grid";
document.querySelector('.gridSection').style.gridTemplateColumns = "repeat(7, 1fr)"; 	//7 columns for Satureday to Friday
document.querySelector('.gridSection').style.gridTemplateRows = "repeat(6, 1fr)"			//6 rows
document.querySelector('.gridSection').style.justifyItems = "center";
document.querySelector('.gridSection').style.width = '100%';

// grid-calender inner preview
// Creating all the div sections for each number (days of each month)
let allDiv = ``;

for (let row=1; row<=6; row++) {
	for (let col=1; col<=7; col++) {
		allDiv = allDiv + `<div class="eachDate div-${row}-${col}" style="background-color: #d8e6e3">&nbsp;</div>`
	}
}

document.querySelector('.gridSection').innerHTML = allDiv;

// weekly days
// Satureday to Friday
document.querySelector('.div-1-1').textContent = 'S';
document.querySelector('.div-1-2').textContent = 'S';
document.querySelector('.div-1-3').textContent = 'M';
document.querySelector('.div-1-4').textContent = 'T';
document.querySelector('.div-1-5').textContent = 'W';
document.querySelector('.div-1-6').textContent = 'T';
document.querySelector('.div-1-7').textContent = 'F';

// Buiding the calender
// Inside view of the Calender

//current (weekly) day (i.e Sat or Sun and the date (i.e 15-th of January)
let weekDay = new Date().toString().split(' ')[0];
let calenderDay = parseInt(new Date().toString().split(' ')[2]);

weeks = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

// These few lines will put the current calender day on the calender
// For example- Sunday 4 will be put on the div of class 'div-2-2'
if (calenderDay<=7) {document.querySelector(`.div-2-${weeks.indexOf(weekDay)+1}`).textContent = calenderDay;}
else if (calenderDay<=14) {document.querySelector(`.div-3-${weeks.indexOf(weekDay)+1}`).textContent = calenderDay;}
else if (calenderDay<=21) {document.querySelector(`.div-4-${weeks.indexOf(weekDay)+1}`).textContent = calenderDay;}
else if (calenderDay<=28) {document.querySelector(`.div-5-${weeks.indexOf(weekDay)+1}`).textContent = calenderDay;}
else if (calenderDay>28) {document.querySelector(`.div-6-${weeks.indexOf(weekDay)+1}`).textContent = calenderDay;}

let currentGrid = ()=>{
	if (calenderDay<=7) {return `.div-2-${weeks.indexOf(weekDay)+1}`;}
	else if (calenderDay<=14) {return `.div-3-${weeks.indexOf(weekDay)+1}`;}
	else if (calenderDay<=21) {return `.div-4-${weeks.indexOf(weekDay)+1}`;}
	else if (calenderDay<=28) {return `.div-5-${weeks.indexOf(weekDay)+1}`;}
	else if (calenderDay>28) {return `.div-6-${weeks.indexOf(weekDay)+1}`;}
}

// currentGridValue is mainly the class name of the div containing the current calender date
let currentGridValue = currentGrid();

let eachDate=calenderDay;  // calenderDay is the current date

fillTheCalender();
styleIt();

// Current grid value has two numbers, the first is the row no starting from 2, and the second is the column no from 1 to 7. If column number decreases, the date will be decreased up to 1. If column number increases, date will be increased up to either 28, 29, 30 or 31, depending on the corresponding month. If column number becomes 1 to 7, row will be same. If column number becomes 7 from 1 during decreading, row number will be decreased by 1. If column number becomes 1 from 7 during incresing, row number will be increased by 1. Hence, the challenge is to fill the whole calender with dates from 1 to either 28, 29, 30 or 31. 
// notice the current column number, current row number, current date and the current month. The current column number will be something from 1 to 7. 
// -- start decresing the current column number, and start decresing corresponding date, until the date be 1. If column number becomes 1, next column number will be 7, and then the row number will decrease.
// -- on the other part, start increasing the column number and the corresponding date will increase as well. If the column number will be 1 from 7, row number will increase by 1. The increment will continue untill it becomes either 28, 29, 30 or 31. It depends on the corresponding month. So set the final value based on the month.   
function fillTheCalender()	{
	// decresing part
	let currentColNum = currentGridValue.split('-')[2];
	let currentRowNum = currentGridValue.split('-')[1];
	let currentDate = calenderDay;
	for (let i = currentColNum; currentDate>=1; i--) {
		currentDate--;
		if (currentDate!=1 && i==0 && currentRowNum>=2) {
			i=7;
			currentRowNum--;
		}
		document.querySelector(`.div-${currentRowNum}-${i}`).textContent=currentDate+1;
	}

	// increasing part
	let toIncreaseCurrentColNum = currentGridValue.split('-')[2];
	let toIncreaseCurrentRowNum = currentGridValue.split('-')[1];
	let toIncreaseCurrentDate = calenderDay;
	let toIncreaseCurrentMonth = monthIndex;
	let lastDateValue;

	if (toIncreaseCurrentMonth==0 || toIncreaseCurrentMonth==2 || toIncreaseCurrentMonth==4 || toIncreaseCurrentMonth==6 || toIncreaseCurrentMonth==7 || toIncreaseCurrentMonth==9 || toIncreaseCurrentMonth==11) {
		lastDateValue = 31;
	} else if (toIncreaseCurrentMonth==1 || toIncreaseCurrentMonth==3 || toIncreaseCurrentMonth==5 || toIncreaseCurrentMonth==7 || toIncreaseCurrentMonth==8 || toIncreaseCurrentMonth==10 || toIncreaseCurrentMonth==12) {
		lastDateValue = 30;
	} else if (toIncreaseCurrentMonth==1 && (currentYear%4==0 || currentYear%400==0)) {
		lastDateValue = 29;
	} else {
		lastDateValue = 28;
	}

	while (toIncreaseCurrentDate<lastDateValue) {
		toIncreaseCurrentColNum++;
		toIncreaseCurrentDate++;
		if (toIncreaseCurrentColNum==8 && toIncreaseCurrentRowNum!=6 && toIncreaseCurrentDate!=lastDateValue) {
			toIncreaseCurrentColNum=1;
			toIncreaseCurrentRowNum++;
		}
		document.querySelector(`.div-${toIncreaseCurrentRowNum}-${toIncreaseCurrentColNum}`).textContent=toIncreaseCurrentDate;
	}
}

// So, the previous function defined will fill up the calender for the running month perfectly. Now, we have to show the calender when previous months and next months will be navigated.
// Let's break this part into small. First, calender for the previous months will be discussed, then the next months.
// Calender for the previous months:
// --> first, we have to record the most current month's first day's row and column, and its weekly day as well. But weekly days are connected with the column numbers. Column number from 1 to 7 corresponds to weekly day from Saturday to Friday. So it's traceable. Now, when the previous month will be navigated, current month's first day will come from previous month's last day. Hence, current's months row number-x and column number-y will be the previous month's row number-6 and column number- x-1. But if x-1 be zero(0), next column number will be 7. 
// --> Now, we know the previous month's last date. Now, consider this month as our current month. And the last date will be our current date. And we can follow the exact way did previously, to fill the rest calender decrementing dates.

// --> When navigating the next month, current month's last date's row and column will the next month's first row and next column. Then, now we have the first entry of the month, the next values can be calculated as we did that before.


function fillThePreviousMonth() {

	// currentStatus();

let indexFirstDay = document.querySelector('.gridSection').innerText.split('\n').indexOf('1');
let firstDaysColumn = indexFirstDay%7==0? 1:indexFirstDay%7+1;
let firstDaysRow = 2;
let setDate;

//current month's last day's row and column
let indexLastDay;
	if (monthIndex==0 || monthIndex==2 || monthIndex==4 || monthIndex==6 || monthIndex==7 || monthIndex==9 || monthIndex==11) {
		indexLastDay = document.querySelector('.gridSection').innerText.split('\n').indexOf('31');
		 setDate = 31;
	} else if (monthIndex==1 || monthIndex==3 || monthIndex==5 || monthIndex==7 || monthIndex==8 || monthIndex==10) {
		indexLastDay = document.querySelector('.gridSection').innerText.split('\n').indexOf('30');
		 setDate = 30;
	} else if (monthIndex==1 && (currentYear%4==0 || currentYear%400==0)) {
		indexLastDay = document.querySelector('.gridSection').innerText.split('\n').indexOf('29');
		 setDate = 29;
	} else {
		indexLastDay = document.querySelector('.gridSection').innerText.split('\n').indexOf('28');
		 setDate = 28;
	}

	let lastDaysColumn = indexLastDay%7==0? 1:indexLastDay%7+1;
	let lastDaysRow = 6;

	let rowNo = 6;
	let colNo = firstDaysColumn-1 == 0 ? 7:firstDaysColumn-1;

	

	if (monthIndex==0 || monthIndex==2 || monthIndex==4 || monthIndex==6 || monthIndex==7 || monthIndex==9 || monthIndex==11) {
		setDate=31;
	} else if (monthIndex==3 || monthIndex==5 || monthIndex==7 || monthIndex==8 || monthIndex==10) {
		setDate=30;
	} else if (monthIndex==1 && (currentYear%4==0 || currentYear%400==0)) {
		setDate=29;
	} else {
		setDate=28;
	}

	//Emptying the calender for avoiding repeated date
	let allDiv = ``;
	for (let row=1; row<=6; row++) {
		for (let col=1; col<=7; col++) {
			allDiv = allDiv + `<div class="eachDate div-${row}-${col}" style="background-color: #d8e6e3">&nbsp;</div>`
		}
	}
	document.querySelector('.gridSection').innerHTML = allDiv;
	// weekly days
	// Satureday to Friday
	document.querySelector('.div-1-1').textContent = 'S';
	document.querySelector('.div-1-2').textContent = 'S';
	document.querySelector('.div-1-3').textContent = 'M';
	document.querySelector('.div-1-4').textContent = 'T';
	document.querySelector('.div-1-5').textContent = 'W';
	document.querySelector('.div-1-6').textContent = 'T';
	document.querySelector('.div-1-7').textContent = 'F';
	// end of emptying operation

	// document.querySelector(`.div-${rowNo}-${colNo}`).textContent=setDate;

	while(setDate>=1 && rowNo>=2 && colNo>=1) {
		document.querySelector(`.div-${rowNo}-${colNo}`).textContent=setDate;

		setDate--;
		colNo--;
		if (colNo==0) {
			colNo=7;
			rowNo--;
		}
	}

	// If the first entry of the calender becomes a date bigger than 1
	if (parseInt(document.querySelector('.div-2-1').textContent)>1) {
		let date_first = parseInt(document.querySelector('.div-2-1').textContent);
		let row=6, column=7;
		while(date_first>1) {
			date_first--;
			document.querySelector(`.div-${row}-${column}`).innerHTML=date_first;
			column--;
		}
	}

}

//Now, let's resolve the task of next months in the calender, when a right arrow click may take place
//STEPS: <--see the inside comments-->

function fillTheNextMonth() {


	// let's see where the current month ends up
	// first, determine the last date of the corresponding month
	let lastEntry;
	if (monthIndex==0 || monthIndex==2-1 || monthIndex==4-1 || monthIndex==6-1 || monthIndex==8-1 || monthIndex==9-1 || monthIndex==11-1) {
		lastEntry=31;
	} else if (monthIndex==5-1 || monthIndex==7-1 || monthIndex==10-1 || monthIndex==11) {
		lastEntry=30;
	} else if (monthIndex==3-1 && (currentYear%4==0 || currentYear%400==0)) {
		lastEntry=29;
	} else {
		lastEntry=28;
	} // 1 is minused, as we need the current month's last entry, but the event gets triggered for the next month;


	let lastEntryIndex = document.querySelector('.gridSection').innerText.split('\n').indexOf(lastEntry.toString()); // !!!--------
	let lastEntryRow = 6;
	let lastEntryColumn = lastEntryIndex%7==0? 1:lastEntryIndex%7+1;
	// Now we know the row and the column of where the current month ends

	// Next month will start off from the next week, meaning the next column, and the row will be 2
	let nextMonthsFirstEntryColumn=lastEntryColumn==7? 1:lastEntryColumn+1; // if the last entry be Friday, next month will kick off from Satureday, otherwise, from the next day
	let nextMonthsFirstEntryRow=2;


	//Okay, first, we have to erase current month's all dates, for a clean calender first.
	let allDiv = ``;
	for (let row=1; row<=6; row++) {
		for (let col=1; col<=7; col++) {
			allDiv = allDiv + `<div class="eachDate div-${row}-${col}" style="background-color: #d8e6e3">&nbsp;</div>`
		}
	}
	document.querySelector('.gridSection').innerHTML = allDiv;
	// weekly days
	// Satureday to Friday
	document.querySelector('.div-1-1').textContent = 'S';
	document.querySelector('.div-1-2').textContent = 'S';
	document.querySelector('.div-1-3').textContent = 'M';
	document.querySelector('.div-1-4').textContent = 'T';
	document.querySelector('.div-1-5').textContent = 'W';
	document.querySelector('.div-1-6').textContent = 'T';
	document.querySelector('.div-1-7').textContent = 'F';
	// end of emptying operation

	if (monthIndex==0 || monthIndex==2 || monthIndex==4 || monthIndex==6 || monthIndex==7 || monthIndex==9 || monthIndex==11) {
		lastEntryofNextMonth=31;
	} else if (monthIndex==3 || monthIndex==5 || monthIndex==8 || monthIndex==10) {
		lastEntryofNextMonth=30;
	} else if (monthIndex==1 && (currentYear%4==0 || currentYear%400==0)) {
		lastEntryofNextMonth=29;
	} else {
		lastEntryofNextMonth=28;
	}


	// Now we know where the next month will start
	// Then, we can start filling the calender, starting from date 1 to date either 31, 30, 29 or 28, depending on which month it is
	// 'lastEntryOfNextMonth' is the last date of the month
	// Now, let's increse the date from 1 to 'lastEntry', increse the column sequencially (from 1 to 7), increase the row if column be 1, and cotinue it until the date be 'last entry'
	let firstEntry = 1;
	let column = nextMonthsFirstEntryColumn;
	let row = nextMonthsFirstEntryRow;
	while(firstEntry<=lastEntryofNextMonth) { 
		document.querySelector(`.div-${row}-${column}`).textContent = firstEntry;
		
		column++;
		row = column==8? row+1:row/1;
		column = column==8? 1: column/1;

		if (firstEntry<lastEntryofNextMonth && row==7) {
			row=2;
		}
		firstEntry++;
	}

 }

//Styling each dates and necessary js events
function styleIt() {
	document.querySelectorAll('.eachDate').forEach((element)=> {
 	if (element.innerText===" ") element.innerHTML='&nbsp;';
 	if (!(element.innerText==='S' || element.innerText==='M' || element.innerText==='T' || element.innerText==='W' || element.innerText==='T' || element.innerText==='F' || element.innerHTML=='&nbsp;' || element.innerHTML==" ")) {
 		element.style.padding = "1px";
 		element.style.width = "80%";
 		element.style.textAlign = "center";
 		element.style.cursor = "pointer";
 
 	if (!(element.innerHTML=='&nbsp;' || element.innerHTML==" "))
 		element.addEventListener('mouseenter', ()=> {	
 			element.style.fontWeight = "bold";
 			element.style.backgroundColor = "lightblue";
 			document.querySelector('.inputBox').placeholder= `${element.innerText.length==1? "0"+element.innerText:element.innerText}/${monthIndex.length=1? '0'+(monthIndex+1).toString(): monthString+1}/${currentYear}`;
 		})
 
 		element.addEventListener('mouseleave', ()=> {
 			element.style.fontWeight = "normal";
 			element.style.backgroundColor = "";
 			document.querySelector('.inputBox').placeholder = 'dd/mm/yyyy';
 		})
 
 		element.addEventListener('click', () => {
 			document.querySelector('.inputBox').value=`${element.innerText.length==1? "0"+element.innerText:element.innerText}/${monthIndex.length=1? '0'+(monthIndex+1).toString(): monthString+1}/${currentYear}`;
 		})
 	}
 	
 })  
} 