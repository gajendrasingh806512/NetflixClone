
let navbar = document.getElementById("navbar")

const toggle =() =>{
    if(navbar.style.display == "none"){
        navbar.style.display = "block"
        navbar.style.display = "left"

    }
    else{
        navbar.style.display = "none"
    }
}

function carousel(){
    let carouselslider = document.querySelector(".carousel-slider")
    let list = document.querySelector(".carousel-list")
    let item = document.querySelector(".carousel-item")
    let list2

    const speed = 1
    const width = list.offsetWidth
    let x =0
    let x2 = width

    function clone(){
        list2 = list.cloneNode(true)
        carouselslider.appendChild(list2)
        list2.style.left = `$(width)px`
    }

    function moveFirst(){
        x-= speed

        if(width >= Math.abs(x)){
            list.style.left = `${x}px`
        } else{
            x = width
        }
    }

    function MoveSecond(){
        x2 -=speed

        if(list.offsetWidth >= Math.abs(x2)){
            list2.style.left = `${x2}px`
        }else{
            x2 = width
        }


    }

    function hover(){
        clearInterval(a)
        clearInterval(b)
    }

    function unhover(){
        a = setInterval(moveFirst,10)
        b = setInterval(MoveSecond,10)
    }

    clone()

   let a = setInterval(moveFirst,10)
    let b = setInterval(MoveSecond,10)

    carouselslider.addEventListener("mouseenter", hover)
    carouselslider.addEventListener("mouseenter", unhover)

  
}

carousel()