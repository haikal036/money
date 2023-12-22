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
    else if (epf== 9)
    {
    var salary = base;
    var totalepf = base * (9 / 100) + allowance; //the base salary - epf
    var ot = overtime * 14.42; // Assuming an hourly rate, adjust as needed
    var socso = salary * 0.0049; //getting the socso tax
    var eis = salary * 0.002; //getting the eis tax
    var total = salary - totalepf - socso - eis + ot; //salary after all deductions
    var sadaqa = total * 0.5;

    // Display the result
    document.getElementById("salary").textContent = "Base (RM): " + salary.toFixed(2);
    document.getElementById("ot").textContent = "Overtime (hrs): " + ot.toFixed(2);
    document.getElementById("totalepf").textContent = "EPF Deduction: " + totalepf.toFixed(2);
    document.getElementById("socso").textContent = "SOCSO: " + socso.toFixed(2);
    document.getElementById("eis").textContent = "EIS: " + eis.toFixed(2);
    document.getElementById("total").textContent = "Banked In (RM): " + total.toFixed(2);
    document.getElementById("sadaqa").textContent = "Sadaqa to Amirul Amri (RM): " + sadaqa.toFixed(2);
    }

    else
    {
    var salary = base;
    var totalepf = base * (11 / 100) + allowance; //the base salary - epf
    var ot = overtime * 14.42 // Assuming an hourly rate, adjust as needed
    var socso = salary * 0.0049; //getting the socso tax
    var eis = salary * 0.002; //getting the eis tax
    var total = salary - totalepf - socso - eis + ot; //salary after all deductions
    var sadaqa = total * 0.5;

    // Display the result
    document.getElementById("salary").textContent = "Base (RM): " + salary.toFixed(2);
    document.getElementById("ot").textContent = "Overtime (hrs): " + ot.toFixed(2);
    document.getElementById("totalepf").textContent = "EPF Deduction: " + totalepf.toFixed(2);
    document.getElementById("socso").textContent = "SOCSO: " + socso.toFixed(2);
    document.getElementById("eis").textContent = "EIS: " + eis.toFixed(2);
    document.getElementById("total").textContent = "Banked In (RM): " + total.toFixed(2);
    document.getElementById("sadaqa").textContent = "Sadaqa to Amirul Amri (RM): " + sadaqa.toFixed(2);
    }
}
