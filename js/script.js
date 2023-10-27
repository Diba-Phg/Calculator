let resultDisplay = document.getElementById("display");
//conncts to the display with a variable named "resultDisplay"
//با متغیر به المانی که دارای ایدی دیسپلی هست متصل میشود

function calculate(num) {
  resultDisplay.value += num;
}
//a function that gets the input num from the number buttons an adds each input in the result div
// یک فانکشن که مقدار درون نمایشگر را جایگذاری میکند با چیزی که از قبل نوشته شده + عددی که جدید وارد شده

function clearNum() {
  resultDisplay.value = ` `;
}
//a function that clears everything written in the result div
//یک فانکشن که تمام موارد نوشته شده درون نمایشگر را حذف میکند

function result() {
  resultDisplay.value = eval(resultDisplay.value);
}
//a function that calculates (evaluates) the values of the resultisplay
//یک فانکشن که مقداری که درون نمایشگر اعداد وجود دارد را محاسبه میکند و جایگذاری میکند
