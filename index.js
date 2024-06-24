function generateLink(){
    const preFilledMsg = document.getElementById("pre-filled-msg").value;
    const userNum = document.getElementById("user-num").value;

    const encodedMsg = encodeURIComponent(preFilledMsg);

    whatsAppUrl = `https://wa.me/${userNum}?text=${encodedMsg}`;
    
    const linkElement = document.getElementById("whatsapp-link");
    linkElement.href = whatsAppUrl;
        // Show success popup
    alert('Success! Your pre-filled WhatsApp message link has been generated. Preview the link before copying it. ');

}
function copyLink() {
    const linkElement = document.getElementById("whatsapp-link");
    const tempInput = document.createElement('input');
    tempInput.value = linkElement.href;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('WhatsApp URL copied to clipboard!');
}