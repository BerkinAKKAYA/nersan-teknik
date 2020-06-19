<script>
    let name;
    let email;
    let message;

    const ValidEmail = () => (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));

    const EmailColor = () => {
        if (!email) { return "#999" }
        return ValidEmail(email) ? '#00bb55' : '#cc0000';
    }

    const AllValid = () => {
        return name != "" && ValidEmail(email) && message != "";
    }
</script>

<style>
    form {
        width: 100%;
        margin-top: 20px;
    }

    input[type=text], input[type=email] {
        width: 100%;
        padding: 8px 4px;
        background: none;
        border-bottom: 1px solid #999;
        margin-bottom: 12px;
        transition: border .3s ease;
    }
    input[type=text]:focus, input[type=email]:focus {
        border-bottom: 2px solid #999;
        border-radius: 3px;
    }
    input[type=text]:nth-last-child(1) { margin: 0 }
    input[type=submit] {
        background-color: #999;
        color: #333;
        padding: 10px 25px;
        transition: background-color .2s, color .2s;
        margin-top: 10px;
    }
    input[type=submit]:not(:disabled) {
        background-color: rgb(60, 140, 0);
        color: #eee;
        cursor: pointer;
    }
    input[type=submit]:not(:disabled):hover {
        background-color: rgb(90, 155, 0);
        color: #fff;
        cursor: pointer;
    }
</style>

<form action="https://formspree.io/xeqrzklg" method="POST">
    <input
        required
        name="name"
        type="text"
        bind:value={name}
        placeholder="Ad & Soyad"
        style="border-bottom-color: {name ? '#00bb55' : '#999'}" />
    <input 
        type="tel" bind:value={phone}
        id="phone"
        name="phone"
        style="border-bottom-color: {phone ? '#00bb55' : '#999'}"/>
    <input
        required
        name="_replyto"
        type="email" bind:value={email}
        placeholder="mail@gmail.com"
        style="border-bottom-color: {EmailColor(email)}" />

    <input
        required
        id="message"
        name="message"
        type="text"
        bind:value={message}
        placeholder="Mesaj"
        style="border-bottom-color: {message ? '#00bb55' : '#999'}" />

    <input type="submit" value="Gönder" disabled={!name || !message || !phone || !ValidEmail(email)}>
</form>