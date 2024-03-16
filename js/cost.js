function cost() {

    // Get value from input fields
    var current_plan = parseFloat(document.getElementById("current_plan").value);
    var bal_current_day = parseFloat(document.getElementById("bal_current_day").value);
    var next_plan = parseFloat(document.getElementById("next_plan").value);
    var bal_upgrade_day = parseFloat(document.getElementById("bal_upgrade_day").value); 
    var redirectURL;

    // Check if inputs are valid
    if (isNaN(current_plan) || isNaN(bal_current_day) || isNaN(next_plan) || isNaN(bal_upgrade_day)) 
    {
        alert("Please enter valid data");
        return;
    }

    // Perform the calculation
    var upgrade_price;
    if (current_plan === 1.00 || current_plan === 1.69 || current_plan === 3.33 || current_plan === 4.97) 
    {
        upgrade_price = (bal_upgrade_day * next_plan) - (bal_current_day * current_plan);
    }

    // Display the result
    // Construct the URL with parameters
    redirectURL = '../html/salarycalculation.html' +
                      '?upgrade_price=' + upgrade_price.toFixed(2);

    // Redirect to the calculated URL
    window.location.href = redirectURL;
}
