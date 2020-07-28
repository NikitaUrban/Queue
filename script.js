let queue = []

pushElementsOnQueue = () => {// добавление элементов в начало очереди

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


}//конец функции pushElementOnQueue()

deleteElementFromQueue = () => { // удаляем первый элемент из очереди (первым зашел, первым вышел - принцип очереди)
        queue.shift()
}//конец функции deleteElementFromQueue()

saveQueueInLocalStorage = () => { // можем сохранить нашу очередь в local storage браузера
        let json = JSON.stringify(queue)
        localStorage.setItem('queue',json)

}//конец функции saveQueueInLocalStorage()

let addElements = document.querySelector('#btn1')
addElements.addEventListener('click',pushElementsOnQueue)//при нажатии на кнопку Добавиить элемент добавим элементы в очередь

let deleteLastElement = document.querySelector('#btn2')
deleteLastElement.addEventListener('click',deleteElementFromQueue)//при нажатии на кнопку Удалить элемент
// удалим первый элемент из очереди (первым зашел, первым вышел - принцип очереди)

let saveQueue = document.querySelector('#btn3')
saveQueue.addEventListener('click',saveQueueInLocalStorage)//при нажатии на кнопку Сохранить сохраним очередь
// в local storage



