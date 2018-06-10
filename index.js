var katzDeli = [];

function takeANumber(katzDeliLine,name) {katzDeliLine.push (name); return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;}

function nowServing(array) {if (array.length>0) {var output=[]; output=array.shift(1); return `Currently serving ${output}.`} else {return "There is nobody waiting to be served!";}}

