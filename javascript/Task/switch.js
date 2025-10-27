let date = document.getElementById("date");
        for (let date = 1; date <= 31; date++) {
            day.innerHTML += `<option value=${date}>${date}</option>`
        }

        let arr = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let month = document.getElementById("month");
        for (let i = 0; i < arr.length; i++) {
            month.innerHTML += `<option value=${arr[i]}> ${arr[i]}</option>`
        }

        let year = document.getElementById("year");
        for (let i = 2025; i >= 1905; i--) {
            year.innerHTML += `<option value=${i}>${i}</option>`;
        }