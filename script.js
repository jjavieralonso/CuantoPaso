let intervalId;

function calculateAge() {
    clearInterval(intervalId);

    const selectedDate = new Date(document.getElementById('date').value);
    const unit = document.getElementById('unit').value;

    intervalId = setInterval(() => {
        const currentDate = new Date();
        const timeDifference = currentDate - selectedDate;
        
        if (selectedDate > currentDate) {
            document.getElementById('result').textContent = 'Esa fecha todavia no pasó.';
            return;
        }

        let remainingTime = timeDifference;
        const timeUnits = [];

        if (unit === 'years') {
            const years = Math.floor(remainingTime / (365 * 24 * 60 * 60 * 1000));
            remainingTime -= years * (365 * 24 * 60 * 60 * 1000);
            const months = Math.floor(remainingTime / (30 * 24 * 60 * 60 * 1000));
            remainingTime -= months * (30 * 24 * 60 * 60 * 1000);
            const weeks = Math.floor(remainingTime / (7 * 24 * 60 * 60 * 1000));
            remainingTime -= weeks * (7 * 24 * 60 * 60 * 1000);
            const days = Math.floor(remainingTime / (24 * 60 * 60 * 1000));
            remainingTime -= days * (24 * 60 * 60 * 1000);
            const hours = Math.floor(remainingTime / (60 * 60 * 1000));
            remainingTime -= hours * (60 * 60 * 1000);
            const minutes = Math.floor(remainingTime / (60 * 1000));
            remainingTime -= minutes * (60 * 1000);
            const seconds = Math.floor(remainingTime / 1000);
            timeUnits.push(`${years} año${years !== 1 ? 's' : ''}`);
            timeUnits.push(`${months} mes${months !== 1 ? 'es' : ''}`);
            timeUnits.push(`${weeks} semana${weeks !== 1 ? 's' : ''}`);
            timeUnits.push(`${days} dia${days !== 1 ? 's' : ''}`);
            timeUnits.push(`${hours} hora${hours !== 1 ? 's' : ''}`);
            timeUnits.push(`${minutes} minuto${minutes !== 1 ? 's' : ''}`);
            timeUnits.push(`${seconds} segundo${seconds !== 1 ? 's' : ''}`);
        }
        if (unit === 'months') {
            const months = Math.floor(remainingTime / (30 * 24 * 60 * 60 * 1000));
            remainingTime -= months * (30 * 24 * 60 * 60 * 1000);
            const weeks = Math.floor(remainingTime / (7 * 24 * 60 * 60 * 1000));
            remainingTime -= weeks * (7 * 24 * 60 * 60 * 1000);
            const days = Math.floor(remainingTime / (24 * 60 * 60 * 1000));
            remainingTime -= days * (24 * 60 * 60 * 1000);
            const hours = Math.floor(remainingTime / (60 * 60 * 1000));
            remainingTime -= hours * (60 * 60 * 1000);
            const minutes = Math.floor(remainingTime / (60 * 1000));
            remainingTime -= minutes * (60 * 1000);
            const seconds = Math.floor(remainingTime / 1000);
            timeUnits.push(`${months} mes${months !== 1 ? 'es' : ''}`);
            timeUnits.push(`${weeks} semana${weeks !== 1 ? 's' : ''}`);
            timeUnits.push(`${days} dia${days !== 1 ? 's' : ''}`);
            timeUnits.push(`${hours} hora${hours !== 1 ? 's' : ''}`);
            timeUnits.push(`${minutes} minuto${minutes !== 1 ? 's' : ''}`);
            timeUnits.push(`${seconds} segundo${seconds !== 1 ? 's' : ''}`);
        }
        if (unit === 'weeks') {
            const weeks = Math.floor(remainingTime / (7 * 24 * 60 * 60 * 1000));
            remainingTime -= weeks * (7 * 24 * 60 * 60 * 1000);
            const days = Math.floor(remainingTime / (24 * 60 * 60 * 1000));
            remainingTime -= days * (24 * 60 * 60 * 1000);
            const hours = Math.floor(remainingTime / (60 * 60 * 1000));
            remainingTime -= hours * (60 * 60 * 1000);
            const minutes = Math.floor(remainingTime / (60 * 1000));
            remainingTime -= minutes * (60 * 1000);
            const seconds = Math.floor(remainingTime / 1000);
            timeUnits.push(`${weeks} semana${weeks !== 1 ? 's' : ''}`);
            timeUnits.push(`${days} dia${days !== 1 ? 's' : ''}`);
            timeUnits.push(`${hours} hora${hours !== 1 ? 's' : ''}`);
            timeUnits.push(`${minutes} minuto${minutes !== 1 ? 's' : ''}`);
            timeUnits.push(`${seconds} segundo${seconds !== 1 ? 's' : ''}`);
        }
        if (unit === 'days') {
            const days = Math.floor(remainingTime / (24 * 60 * 60 * 1000));
            remainingTime -= days * (24 * 60 * 60 * 1000);
            const hours = Math.floor(remainingTime / (60 * 60 * 1000));
            remainingTime -= hours * (60 * 60 * 1000);
            const minutes = Math.floor(remainingTime / (60 * 1000));
            remainingTime -= minutes * (60 * 1000);
            const seconds = Math.floor(remainingTime / 1000);
            timeUnits.push(`${days} dia${days !== 1 ? 's' : ''}`);
            timeUnits.push(`${hours} hora${hours !== 1 ? 's' : ''}`);
            timeUnits.push(`${minutes} minuto${minutes !== 1 ? 's' : ''}`);
            timeUnits.push(`${seconds} segundo${seconds !== 1 ? 's' : ''}`);
        }
        if (unit === 'hours') {
            const hours = Math.floor(remainingTime / (60 * 60 * 1000));
            remainingTime -= hours * (60 * 60 * 1000);
            const minutes = Math.floor(remainingTime / (60 * 1000));
            remainingTime -= minutes * (60 * 1000);
            const seconds = Math.floor(remainingTime / 1000);
            timeUnits.push(`${hours} hora${hours !== 1 ? 's' : ''}`);
            timeUnits.push(`${minutes} minuto${minutes !== 1 ? 's' : ''}`);
            timeUnits.push(`${seconds} segundo${seconds !== 1 ? 's' : ''}`);
        }
        if (unit === 'minutes') {
            const minutes = Math.floor(remainingTime / (60 * 1000));
            remainingTime -= minutes * (60 * 1000);
            const seconds = Math.floor(remainingTime / 1000);
            timeUnits.push(`${minutes} minuto${minutes !== 1 ? 's' : ''}`);
            timeUnits.push(`${seconds} segundo${seconds !== 1 ? 's' : ''}`);
        }
        if (unit === 'seconds') {
            const seconds = Math.floor(remainingTime / 1000);
            timeUnits.push(`${seconds} segundo${seconds !== 1 ? 's' : ''}`);
        }

        const resultElement = document.getElementById('result');
        if (timeDifference) {
            resultElement.innerHTML = `Pasaron: <br>${formatTimeUnits(timeUnits)}.`
        } else {
            resultElement.textContent = 'Por favor, pone una fecha válida';
        }
    }, 1000);
}

function formatTimeUnits(timeUnits) {
    const formattedUnits = [];

    if (timeUnits.length === 1) {
        return timeUnits[0];
    }

    for (let i = 0; i < timeUnits.length; i++) {
        formattedUnits.push(timeUnits[i]);
    }

    return formattedUnits.join('<br>');
}

