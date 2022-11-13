const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
}

const msg1 = async () => {
    const msg1 = 'Olá, meu nome é Jonas, tenho 23 anos, atuo como desenvolvedor web produtivo e UI Design a 8 anos'
    const msg1Arr = msg1.split('')

    let msg1HTML = document.querySelector('.js-msg-1')
    
    for(i=0;i<=msg1Arr.length-1;i++){
        await delay(50)
        msg1HTML.innerHTML += msg1Arr[i]
    }
    msg1HTML.innerHTML = msg1HTML.innerHTML.replace('desenvolvedor web produtivo', '<strong style="box-shadow: rgba(255, 255, 255, 0.15) 0px 48px 100px 0px;">desenvolvedor web produtivo</strong>')
    await delay(1000)
    await msg2()
}

const msg2 = async () => {
    const msg2 = 'Tenho conhecimentos sólidos em HTML, CSS, JAVASCRIPT e JQUERY.'
    const msg2Arr = msg2.split('')

    let msg2HTML = document.querySelector('.js-msg-2')
    
    for(i=0;i<=msg2Arr.length-1;i++){
        await delay(50)
        msg2HTML.innerHTML += msg2Arr[i]
    }
}

$('.js-menu-mobile').hide()

$('.js-menu-hamburguer').click(() => {
    $('.js-menu-mobile').show()
})

$('.js-btn-close').click(() => {
    $('.js-menu-mobile').hide()
})

msg1()