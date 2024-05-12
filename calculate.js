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
        var gross_wage = basic + allowance;
        var totalepf = (basic + allowance) * 0.09; //the base salary - epf
        var ot = overtime * 14.42; // Assuming an hourly rate, adjust as needed
        var socso = basic * 0.0049; //getting the socso tax
        var eis = basic * 0.002; //getting the eis tax
        var total = gross_wage - totalepf - socso - eis + ot; //salary after all deductions
    
    document.getElementById('gross_wage').textContent = "Gross Wage : RM " + gross_wage.toFixed(2);
    document.getElementById('totalepf').textContent = "EPF Deduction : RM " + totalepf.toFixed(2);
    document.getElementById('socso').textContent = "Socso : RM " + socso.toFixed(2);
    document.getElementById('eis').textContent = "EIS : RM " + eis.toFixed(2);
    document.getElementById('total').textContent = "Net Wage : RM " + total.toFixed(2);
    }

    else if (epf_deduction == 11)
        {
        var gross_wage = basic + allowance;
        var totalepf = (basic + allowance) * 0.11; //the base salary - epf
        var ot = overtime * 14.42; // Assuming an hourly rate, adjust as needed
        var socso = basic * 0.0049; //getting the socso tax
        var eis = basic * 0.002; //getting the eis tax
        var total = gross_wage - totalepf - socso - eis + ot; //salary after all deductions
    
    document.getElementById('gross_wage').textContent = "Gross Wage : RM " + gross_wage.toFixed(2);
    document.getElementById('totalepf').textContent = "EPF Deduction : RM " + totalepf.toFixed(2);
    document.getElementById('socso').textContent = "Socso : RM " + socso.toFixed(2);
    document.getElementById('eis').textContent = "EIS : RM " + eis.toFixed(2);
    document.getElementById('total').textContent = "Net Wage : RM " + total.toFixed(2);
    }
}

(() => {
        'use strict'
    
        const getStoredTheme = () => localStorage.getItem('theme')
        const setStoredTheme = theme => localStorage.setItem('theme', theme)
    
        const getPreferredTheme = () => {
            const storedTheme = getStoredTheme()
            if (storedTheme) {
            return storedTheme
            }
    
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        }
    
        const setTheme = theme => {
            if (theme === 'auto') {
            document.documentElement.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
            } else {
            document.documentElement.setAttribute('data-bs-theme', theme)
            }
        }
    
        setTheme(getPreferredTheme())
    
        const showActiveTheme = (theme, focus = false) => {
            const themeSwitcher = document.querySelector('#bd-theme')
    
            if (!themeSwitcher) {
            return
            }
    
            const themeSwitcherText = document.querySelector('#bd-theme-text')
            const activeThemeIcon = document.querySelector('.theme-icon-active use')
            const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
            const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')
    
            document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
            element.classList.remove('active')
            element.setAttribute('aria-pressed', 'false')
            })
    
            btnToActive.classList.add('active')
            btnToActive.setAttribute('aria-pressed', 'true')
            activeThemeIcon.setAttribute('href', svgOfActiveBtn)
            const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
            themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)
    
            if (focus) {
            themeSwitcher.focus()
            }
        }
    
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
            const storedTheme = getStoredTheme()
            if (storedTheme !== 'light' && storedTheme !== 'dark') {
            setTheme(getPreferredTheme())
            }
        })
    
        window.addEventListener('DOMContentLoaded', () => {
            showActiveTheme(getPreferredTheme())
    
            document.querySelectorAll('[data-bs-theme-value]')
            .forEach(toggle => {
                toggle.addEventListener('click', () => {
                const theme = toggle.getAttribute('data-bs-theme-value')
                setStoredTheme(theme)
                setTheme(theme)
                showActiveTheme(theme, true)
                })
            })
        })
})()
