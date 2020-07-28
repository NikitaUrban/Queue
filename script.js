let queue = []

pushElementOnQueue = () => {// добавление элементов в начало очереди
    let addElements = document.querySelector('#btn1')
    addElements.addEventListener('click',function () {
        try{
            let N = prompt('Сколько элементов хотите ввести:','')
            if ( ! ( Number(N) ) ) { throw new Error('Ошибка ввода') }
            for (let i = 0 ; i < N ; i++){
                let elem = parseFloat(prompt('Элемент ' + (i+1) + ':',''))
                if ( ! ( Number(elem) ) ) { throw new Error('Ошибка ввода') }
                else {
                    queue.push(elem)
                }
            }
        }catch (e) {
            alert(e)
        }
    })

}//конец функции pushElementOnQueue()

pushElementOnQueue()



