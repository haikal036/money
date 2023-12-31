function calculate() {

    // Get value from input fields
    var base = parseFloat(document.getElementById("base").value);
    var overtime = parseFloat(document.getElementById("overtime").value);
    var epf = parseFloat(document.getElementById("epf").value);
    var allowance = parseFloat(document.getElementById("allowance").value); 

    // Check if inputs are valid
    if (isNaN(base) || isNaN(overtime) || isNaN(epf) || isNaN(allowance)) {
        alert("Please enter valid numbers");
        return;
    }

    // Perform the calculation
    else if (epf == 9)
    {
    var salary = base;
    var totalepf = (base + allowance) * 0.009; //the base salary - epf
    var ot = overtime * 14.42; // Assuming an hourly rate, adjust as needed
    var socso = salary * 0.0049; //getting the socso tax
    var eis = salary * 0.002; //getting the eis tax
    var total = salary - totalepf - socso - eis + ot; //salary after all deductions

    // Display the result
     // Construct the URL with parameters
     var redirectURL = '../html/salarycalculation.html' +
                        '?salary=' + salary.toFixed(2) +
                        '&ot=' + ot.toFixed(2) +
                        '&totalepf=' + totalepf.toFixed(2) +
                        '&socso=' + socso.toFixed(2) +
                        '&eis=' + eis.toFixed(2) +
                        '&total=' + total.toFixed(2);
    }

    else
    {
    var salary = base;
    var totalepf = (base + allowance) * 0.011; //the base salary - epf
    var ot = overtime * 14.42 // Assuming an hourly rate, adjust as needed
    var socso = salary * 0.0049; //getting the socso tax
    var eis = salary * 0.002; //getting the eis tax
    var total = salary - totalepf - socso - eis + ot; //salary after all deductions
    var sadaqa = total * 0.5;

    // Display the result
     // Construct the URL with parameters
    var redirectURL = '../html/salarycalculation.html' +
                      '?salary=' + salary.toFixed(2) +
                      '&ot=' + ot.toFixed(2) +
                      '&totalepf=' + totalepf.toFixed(2) +
                      '&socso=' + socso.toFixed(2) +
                      '&eis=' + eis.toFixed(2) +
                      '&total=' + total.toFixed(2);
    }
}
