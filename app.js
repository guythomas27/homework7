console.log('Hello World!');

const name = 'Guy Cordell';
let hasDownloadedResume = false;

function showGreeting(personName)
{
    return 'Hello, my name is ' + personName + '! Welcome to my portfolio!';
}

function daysUntilDeadline(deadlineDate)
{
    const currentDate = new Date();
    const futureDate = new Date(deadlineDate);
    
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const timeDifference = futureDate - currentDate;

    return Math.ceil(timeDifference / millisecondsPerDay);
}

document.addEventListener('DOMContentLoaded', function ()
{
    const greetingElement = document.getElementById('greetingMessage');
    const resumeButtons = document.querySelectorAll('.resumeButton');
    const deadlineText = document.getElementById('deadlineDays');
    const projectDeadline = '2026-12-09';
    const remainingDays = daysUntilDeadline(projectDeadline);

    if (greetingElement)
    {
        greetingElement.textContent = showGreeting(name);
    }

    if (deadlineText)
    {
        deadlineText.textContent = remainingDays;
    }

    console.log('Days until deadline:', remainingDays);

    resumeButtons.forEach(function (button)
    {
        button.addEventListener('click', function ()
        {
            if (!hasDownloadedResume)
            {
                alert('Your resume is downloaded successfully!');
                hasDownloadedResume = true;
            }
        });
    });
});
