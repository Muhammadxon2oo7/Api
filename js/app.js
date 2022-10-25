const loading=document.querySelector('.load')
fetch("https://jsonplaceholder.typicode.com/photos")
    .then(api=>api.json())
    .then(date=>{
        date.forEach(person=>{
            const img=document.createElement('img')
            img.src=person.url
            loading.classList.remove='load'
            loading.className='none'
            img.className='img'
            document.body.appendChild(img)
        })
    })
