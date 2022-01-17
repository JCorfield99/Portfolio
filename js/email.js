function sendEmail() {
    const userName = document.getElementById('name').value;
    const userMessage = document.getElementById('message').value;

    if (!(userName === "" || userMessage === "")) {
        window.open(`mailto:jcorfield.1999@gmail.com?subject=${userName}&body=${userMessage}`);
    }
}
