function show_me_an_Image(){
    let imgElement = document.createElement('img')
    imgElement.src = 'https://mma.prnewswire.com/media/1002702/Kenzie_Academy_Logo.jpg?p=publish&w=200'
    let KenzieAcademyElement = document.createElement('a')
    KenzieAcademyElement.href = 'https://www.kenzie.academy/'
    KenzieAcademyElement.append('Kenzie')



     let main = document.createElement('main')

    main.append(imgElement)

    main.append(KenzieAcademyElement)


    document.body.append(main)
    
let button = document.createElement('button')

let remove = document.createTextNode('Remove')

document.body.appendChild(button)
button.appendChild(remove)



button.addEventListener('click', function(){
  return main.remove()
})
   
 
}    

show_me_an_Image()


                          


