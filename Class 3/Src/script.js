console.log('class 2')

let today = new Date()

let date = today.toDateString().split(' ')
let time = today.toLocaleTimeString()

// DOM - Document Object Model

let dateElement = document.getElementById('date_text')
let timeElement = document.getElementById('time_text')


dateElement.textContent = `${date[0]} ${date[2]}`
timeElement.textContent = time

const apiUrl = 'https://uptight-teal-walrus.cyclic.app/task'

// Post a task
const createTask = (task) => {

    let taskJson = JSON.stringify(task)

    const requestOptions = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: taskJson
    }

    fetch(apiUrl, requestOptions)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))



}

let task_form = document.getElementById('task_form')

task_form.addEventListener('submit', (event) => {
    event.preventDefault()

    let newTask = {
        name: event.target.task.value,
        date: today.toDateString(),
        isCompleted: false
    }

    createTask(newTask)

    location.reload()


    getTask()

    event.target.task.value = ''
})




const callUpdateApi = (isChecked, id) => {

    let newtask = {
        isCompleted: isChecked
    }

    let taskJson = JSON.stringify(newtask)

    const requestOptions = {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: taskJson
    }

    fetch(`${apiUrl}/${id}`, requestOptions)
        .then(res => res.json())
        .then(data => getTask())
        .catch(err => console.error(err))
}

const callDeleteAPI = (id) => {
    const requestOptions = {
        method: 'DELETE'
    }

    fetch(`${apiUrl}/${id}`, requestOptions)
        .then(res => res.json())
        .then(data => location.reload())
        .catch(err => console.error(err))



}


// Get a task

const getTask = () => {
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let task_container = document.getElementById('task_container')

            data.map((item) => {

                let taskHTML = `<div id="task_div">
            <div>
                <h3 class="task_heading">${item.name}</h3>
                <p class="task_date">${item.date}</p>
            </div>
            <div id="task_btn_div">
                <input type="checkbox">
                <img id="del_btn" src="../Assets//akar-icons_trash-can.png" alt="">
            </div>

        </div> `


                let task_div = document.createElement("div")

                task_div.id = 'task_div'

                let div1 = document.createElement("div")

                let h3 = document.createElement("h3")
                h3.textContent = item.name ? item.name : 'no data'
                div1.append(h3)
                let p = document.createElement("p")
                p.textContent = item.date ? item.date : 'no data'
                div1.append(p)


                let div2 = document.createElement("div")
                div2.id = 'task_btn_div'

                let input = document.createElement("input")
                input.setAttribute("type", "checkbox");
                input.setAttribute("dataId", item._id);
                input.setAttribute("isCompleted", item.isCompleted);
                input.setAttribute("name", item.name);
                input.setAttribute("date", item.date);
                input.checked = item.isCompleted

                let id = item._id

                input.addEventListener('change', (e) => {
                    callUpdateApi(e.target.checked, id)
                })


                input.id = 'taskCheckbox'

                div2.append(input)

                let img = document.createElement("img")
                img.setAttribute("src", "../Assets//akar-icons_trash-can.png");
                img.addEventListener('click', () => {
                    callDeleteAPI(id)
                    getTask()

                })

                div2.append(img)

                task_div.append(div1)
                task_div.append(div2)


                task_container.append(task_div)

            })



        })
        .catch(err => console.log(err))

}

getTask()



// const getAPI = async() =>{
//     let x  = await fetch('https://jsonplaceholder.typicode.com/posts')
//     let res = await x.json()

//     console.log(res)
// }

// getAPI()

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((res)=>res.json())
// .then((data)=>console.log(data))



