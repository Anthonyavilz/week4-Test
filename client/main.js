const complimentBtn = document.getElementById("complimentButton")
const internetBtn = document.getElementById('internetCom')
const userForm = document.getElementById('complimentForm')

const baseUrl = 'http://localhost:4000/api/'
 
const getCompliment = () => {
    axios.get(`${baseUrl}compliment/`)
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getInternet = () => {
    axios.get('https://complimentr.com/api')
    .then(res => {
        alert(res.data.compliment)
    })
}



const postUserCompliment = (body) => {
    axios.post(baseUrl, body)
    .then(res => {
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    })
} 

const submitHandler = (e) => {
    e.preventDefault()

    let userInputted = document.getElementById('textInput')

    let userObj = {
        message: userInputted.value
    }
    // console.log(userObj)

    postUserCompliment(userObj)

    userInputted.value = ''
}

const deleteUserCompliment = (id) => {
    axios.delete(`${baseUrl}:${id}`)
    .then(res => {
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}

const editCompliment = (id) => {
    axios.put(`${baseUrl}:${id}`)
    .then(res => {
        console.log(res.data)
    })
    .catch(err => {
        console.log
    })
}



complimentBtn.addEventListener('click', getCompliment)
internetBtn.addEventListener('click', getInternet)
userForm.addEventListener('submit', submitHandler)