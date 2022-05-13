function showfriend() { //saque la variable y se la puse en el nombre de la funcion

    $.get("http://localhost:5000/amigos", function (amigos) {
        $(`#lista`).empty()
        amigos.forEach(e => {
            $(`#lista`).append(`<li id"${e.id}"> ${e.name} X </li>`)
        });

    });

};
$(`#boton`).click(showfriend()) //al boton le pase por parametro la funcion

$(`#search`).click(function () {
    var id = $(`#input`).val()
    if (id) {

        $.get(`http://localhost:5000/amigos/${id}`, function (amigo) {
            $(`#amigo`).text(`El nombre es: ${amigo.name}`)
            $(`#input`).val("")
        })

    } else {

        $(`#amigo`).text(`Debe ingresar un ID`)

    }
})


$(`#delete`).click(function () {
    var id = $(`#inputDelete`).val()
    let deletefriend;
    if (id) {
        $.get(`http://localhost:5000/amigos/${id}`, function (friend) {

            deletefriend = friend

        })
        $.ajax({

            url: `http://localhost:5000/amigos/${id}`,
            type: "DELETE",
            success: function () {
                $(`#success`).text(`El amigo ${deletefriend.name} fue eliminado`)
                $(`#inputDelete`).val("")
                showfriend() //llame a la funcion para que me muestre en tiempo real
            }

        })
    } else{
        $(`#success`).text(`Debe ingresar un ID`)
    }

})