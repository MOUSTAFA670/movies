let res = ''
let final = ''
let finalRes = ''
let link = document.querySelectorAll(".link")
let inputName = document.getElementById("name")
let namealert = document.getElementById("namealert")
let emailalert = document.getElementById("emailalert")
let phonealert = document.getElementById("phonealert")
let agealert = document.getElementById("agealert")
let passwordalert = document.getElementById("passwordalert")
let repasswordalert = document.getElementById("repasswordalert")
let email = document.getElementById("email")
let phone = document.getElementById("phone")
let age = document.getElementById("age")
let password = document.getElementById("password")
let rePassword = document.getElementById("rePassword")
let submitBtn = document.getElementById("submitBtn")
let message = document.getElementById("message")

let searched = document.querySelector("#search")
let searcheList = []
console.log(searched);

async function getapi(get) {
    res = await fetch(`https://api.themoviedb.org/3/movie/${get}?api_key=6250ccd506d7d19547dda4fd96d5c869&language=en-US&page=1`)
    final = await res.json()
    finalRes = final.results
    console.log(finalRes);
    display(finalRes)
}


getapi("upcoming")




function display(list) {

    let cartona = "";
    for (let i = 0; i < list.length; i++) {
        cartona += `   <div class="col-md-4">
<div class="content">
<img class="w-100" src="https://image.tmdb.org/t/p/w185/${list[i].poster_path}" alt="">
<div class="layer">
<h2>${list[i].original_title}</h2>
<p>${list[i].overview}</p>
<p>rate:${list[i].vote_average}</p>
<p>${list[i].release_date}</p>
</div>


</div>


</div>`
    }


    document.getElementById("row").innerHTML = cartona;


}

$("#open-close").click(function(e) {


    let offsetElemnt = $(e.target).offset().left
    console.log(offsetElemnt);
    let recWidth = $("#rect").innerWidth()
    if (offsetElemnt == 0) {
        $("#rec").animate({ left: `0px` }, 1000, function() {



        })
        $(".item1").animate({ opacity: "1", paddingTop: "25px" }, 1000)
        $(" .item2").animate({ opacity: "1", paddingTop: "25px" },
                1200
            ),
            $(".item3").animate({ opacity: "1", paddingTop: "25px" },
                1300
            ),
            $(".item4").animate({ opacity: "1", paddingTop: "25px" },
                1400
            ),
            $(" .item5").animate({ opacity: "1", paddingTop: "25px" },
                1500
            ),
            $(".item6").animate({ opacity: "1", paddingTop: "25px" },
                1600
            ),
            $("#close").addClass('fa-xmark', 1000).removeClass('fa-grip-lines')


    } else {

        $("#rec").animate({ left: `-${recWidth}px` }, 1000)
        $(".link").animate({ opacity: "0", paddingTop: "500px" }, 1000)

        $("#close").addClass('fa-grip-lines', 1000).removeClass('fa-xmark', 1000)

    }
})





//nav bar click

for (let i = 0; i < link.length; i++) {

    link[i].addEventListener('click', function(e) {

        let linkName = e.target.id
        console.log(linkName);
        getapi(linkName)
    })


}

//search item
searched.addEventListener('keyup', function() {
        for (let l = 0; l < finalRes.length; l++) {

            if (finalRes[l].original_title.toLowerCase().includes(searched.value.toLowerCase())) {
                if (searched.value != '') {

                    searcheList.push(finalRes[l])









                }




                // searcheList=[]
            }
            console.log(finalRes[l]);

        }

        display(searcheList)



        console.log(searcheList);
    })
    // function search(){

function clear() {


    searcheList = ""


}



// }




// }



// search()



// validation
function validationName() {
    var regx = /^[A-Z][a-z]{1,8}$/
    if (regx.test(inputName.value)) {


        namealert.style.display = "none";
        return true
    } else {

        namealert.style.display = "block";
    }

}

function validationEmail() {
    var regx = /^\w+@[a-zA-Z_]+.[a-zA-Z]{2,3}$/
    if (regx.test(email.value)) {


        emailalert.style.display = "none";
        return true
    } else {

        emailalert.style.display = "block";
    }

}

function validationphone() {
    var regx = /^01[0125][0-9]{8}$/
    if (regx.test(phone.value)) {


        phonealert.style.display = "none";
        return true
    } else {

        phonealert.style.display = "block";
    }

}

function validationage() {
    var regx = /^[0-9][0-9]$/
    if (regx.test(age.value)) {


        agealert.style.display = "none";
        return true
    } else {

        agealert.style.display = "block";
    }

}

function validationpassword() {
    var regx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if (regx.test(password.value)) {


        passwordalert.style.display = "none";
        return true
    } else {

        passwordalert.style.display = "block";
    }

}

function validationrepassword() {

    if (password.value == rePassword.value) {


        repasswordalert.style.display = "none";
        return true
    } else {

        repasswordalert.style.display = "block";
    }

}




inputName.addEventListener('keyup', validationName)
email.addEventListener('keyup', validationEmail)
phone.addEventListener('keyup', validationphone)
age.addEventListener('keyup', validationage)
password.addEventListener('keyup', validationpassword)
rePassword.addEventListener('keyup', validationrepassword)




submitBtn.addEventListener('click', function() {
    if (validationName() && validationEmail() && validationphone() && validationrepassword() && validationpassword() && validationage()) {

        message.style.opacity = "1"

        console.log("hi");


    } else {

        // console.log("hi");

    }




})