var birthMonth = 5
var birthDay = 15
magic = function () {
    var d = new Date()
    if (d.getMonth() == birthMonth && d.getDate() == birthDay) {
        console.log("hi")
        document.getElementById("big-text").innerHTML = "YES!"
        document.getElementById("sub-text").innerHTML = "Happy Birthday Eugene!"
        confettiParty()
        var audio = document.getElementById("music")
        audio.style.visibility = "visible"
        // var img = document.getElementById("img")
        // img.style.visibility = "visible";
    }
    else {
        document.getElementById("big-text").innerHTML = "NO!"

        var bday = new Date(d.getFullYear(), birthMonth, birthDay);
        if (d.getMonth() == birthMonth && d.getDate() > birthDay || d.getMonth() > birthMonth) {
            bday.setFullYear(bday.getFullYear() + 1);
        }

        var days_left = Math.ceil((bday.getTime() - d.getTime()) / (1000 * 60 * 60 * 24))
        document.getElementById("sub-text").innerHTML = `${days_left} ${days_left == '1' ? 'day' : 'days'} until Eugene's Birthday!`
    }
}

async function confettiParty() {
    const confetti = new JSConfetti()

    while (true) {
        await confetti.addConfetti({})
        await confetti.addConfetti({
            emojis: ['🪳', '👀', '🤔'],
            emojiSize: 40,
            confettiNumber: 80,
        })
        await confetti.addConfetti({
            confettiNumber: 200,
            confettiRadius: 10,
            confettiColors: ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',]
        })

        await confetti.addConfetti({
            emojis: ['🎂', '🍚', '🍰', '🥂'],
            emojiSize: 40,
            confettiNumber: 80,
        })
        await confetti.addConfetti({
            confettiColors: ['#ff71ce', '#01cdfe', '#05ffa1', '#b967ff', '#fffb96',]
        })
        await confetti.addConfetti({
            emojis: ['🎉', '🥳'],
            emojiSize: 45,
            confettiNumber: 80,
        })
    }
}

forceBday = function () {
    console.log("hi")
    document.getElementById("big-text").innerHTML = "YES!"
    document.getElementById("sub-text").innerHTML = "Happy Birthday Eugene!"
    confettiParty()
    var audio = document.getElementById("music")
    audio.style.visibility = "visible"
}