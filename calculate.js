function calculate() {

    // Get value from input fields
    var basic = parseFloat(document.getElementById("basic").value);
    var overtime = parseFloat(document.getElementById("overtime").value);
    var epf_deduction = parseFloat(document.getElementById("epf_deduction").value);
    var allowance = parseFloat(document.getElementById("allowance").value); 

    // Check if inputs are valid
    if (isNaN(basic) || isNaN(overtime) || isNaN(epf_deduction) || isNaN(allowance)) {
        alert("Please enter valid numbers");
        return;
    }

    // Perform the calculation
    else if (epf_deduction == 9)
    {
    var salary = basic;
    var totalepf = (basic + allowance) * 0.009; //the base salary - epf
    var ot = overtime * 14.42; // Assuming an hourly rate, adjust as needed
    var socso = salary * 0.0049; //getting the socso tax
    var eis = salary * 0.002; //getting the eis tax
    var total = salary - totalepf - socso - eis + ot; //salary after all deductions

    document.getElementById('total').textContent = "Total Salary : RM " + total;
    }
}
