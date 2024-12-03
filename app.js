        
        function calculateAge(event) {
            event.preventDefault(); // Prevent form submission

            // Get the input values
            const day = parseInt(document.getElementById('day').value);
            const month = parseInt(document.getElementById('month').value);
            const year = parseInt(document.getElementById('year').value);

            // Get the current date
            const today = new Date();
            const currentDay = today.getDate();
            const currentMonth = today.getMonth() + 1; // Months are 0-based
            const currentYear = today.getFullYear();

            // Calculate age
            let ageYears = currentYear - year;
            let ageMonths = currentMonth - month;
            let ageDays = currentDay - day;

            // Adjust for negative months
            if (ageMonths < 0) {
                ageYears--;
                ageMonths += 12;
            }

            // Adjust for negative days
            if (ageDays < 0) {
                ageMonths--;
                const prevMonth = new Date(currentYear, currentMonth - 1, 0);
                ageDays += prevMonth.getDate();

                if (ageMonths < 0) {
                    ageYears--;
                    ageMonths += 12;
                }
            }

            // Display the result
            const resultDiv = document.getElementById('result');
            if (ageYears < 0) {
                resultDiv.textContent = "Invalid date of birth. Please check your input.";
            } else {
                resultDiv.textContent = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
            }
        }
