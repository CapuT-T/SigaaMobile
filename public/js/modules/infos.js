export default function InitInfosAdd(){

}

const infos = {
    nome: 'Rodrigo da Silva Brito',
    anoLetivo: 1, 
    turma: 'A',
    numeroMatricula: 0000,
    curso: 'dasd',
    img: '#'
}

function inserirInfos(user){
    const infosUser = document.querySelector('[data-info-user]')
    const imgUser = infosUser.querySelector('[data-info-user="img"]')
    const desUser = infosUser.querySelectorAll('[data-info-user="infos"] p')

    imgUser.style.background = `url("${user.img}") #ccc`

    desUser.forEach((item, index) => {
        console.log(user)
    })
}

//const rodrigo = new InfosUser('Rodrigo da Silva Brito', 1, "A", 2020302266, "TÉCNICO EM INFORMÁTICA PARA INTERNET - MATUTINO (MT) (TIPI) - Integrado", "#")
inserirInfos(infos)