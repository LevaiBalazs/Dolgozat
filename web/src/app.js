const doc =
{
    bookBody:document.querySelector('#bookBody')
}

const state =
{
    url:'http://localhost:8000/books',
    bookList:[]
}

function getBook()
{
    console.log('getBook check')
    fetch(state.url).then(response=>response.json()).then(result => {state.bookList=result
        renderBook()})
    
}

function renderBook()
{
    console.log('renderBook check')
    state.bookList.forEach(books=>{
        var tr = document.createElement('tr')
        tr.innerHTML=`
        <td>${books.id}</td>
        <td>${books.title}</td>
        <td>${books.author}</td>
        <td>${books.price}</td>`
        
        doc.bookBody.append(tr)
    })
}

getBook()