class Dados {

    constructor() {
        this.dados = {
            dado1: [],
            dado2: [],
            dado3: [],
        }

        this.faces = {}

        this.soma = {
            3: [],
            4: [],
            5: [],
            6: [],
            7: [],
            8: [],
            9: [],
            10: [],
            11: [],
            12: [],
            13: [],
            14: [],
            15: [],
            16: [],
            17: [],
            18: [],
            // error:'No errors found'
        }
    }

    aleatory(jogadas) { //gera valores aleatórios para cada dado

        for (let i = 1; i <= jogadas; i++) {

            let dado1 = (Math.floor((Math.random() * 6) + 1))
            this.dados.dado1.push(dado1)

            let dado2 = (Math.floor((Math.random() * 6) + 1))
            this.dados.dado2.push(dado2)

            let dado3 = (Math.floor((Math.random() * 6) + 1))
            this.dados.dado3.push(dado3)


        }
        this.face()

    }

    somaFaces() { //função está executando antes de ter os valores nos arrays
        var soma = 0
        for (let i = 0; i < this.dados.dado1.length; i++) {
            soma = this.dados.dado1[i] + this.dados.dado2[i] + this.dados.dado3[i]

            switch (soma) {

                case 3:
                    this.soma[3].push(1)
                    break

                case 4:
                    this.soma[4].push(1)
                    break

                case 5:
                    this.soma[5].push(1)
                    break

                case 6:
                    this.soma[6].push(1)
                    break

                case 7:
                    this.soma[7].push(1)
                    break

                case 8:
                    this.soma[8].push(1)
                    break

                case 9:
                    this.soma[9].push(1)
                    break

                case 10:
                    this.soma[10].push(1)
                    break

                case 11:
                    this.soma[11].push(1)
                    break

                case 12:
                    this.soma[12].push(1)
                    break

                case 13:
                    this.soma[13].push(1)
                    break

                case 14:
                    this.soma[14].push(1)
                    break

                case 15:
                    this.soma[15].push(1)
                    break

                case 16:
                    this.soma[16].push(1)
                    break

                case 17:
                    this.soma[17].push(1)
                    break

                case 18:
                    this.soma[18].push(1)
                    break

                default:
                    this.soma.error = 'An error was encountered'
            }
        }
    }

    showSomas() {
        for (let i = 3; i <= 18; i++) {
            console.log(`Total de ocorrencia da soma ${i}: ${this.soma[i].length}`)
        }
        console.log(this.soma[3])
    }

    face() {
        let face1 = this.dados.dado1.filter(function (item) {
                return item === 1
            }).length +
            this.dados.dado2.filter(function (item) {
                return item === 1
            }).length +
            this.dados.dado3.filter(function (item) {
                return item === 1
            }).length

        let face2 = this.dados.dado1.filter(function (item) {
                return item === 2
            }).length +
            this.dados.dado2.filter(function (item) {
                return item === 2
            }).length +
            this.dados.dado3.filter(function (item) {
                return item === 2
            }).length

        let face3 = this.dados.dado1.filter(function (item) {
                return item === 3
            }).length +
            this.dados.dado2.filter(function (item) {
                return item === 3
            }).length +
            this.dados.dado3.filter(function (item) {
                return item === 3
            }).length

        let face4 = this.dados.dado1.filter(function (item) {
                return item === 4
            }).length +
            this.dados.dado2.filter(function (item) {
                return item === 4
            }).length +
            this.dados.dado3.filter(function (item) {
                return item === 4
            }).length

        let face5 = this.dados.dado1.filter(function (item) {
                return item === 5
            }).length +
            this.dados.dado2.filter(function (item) {
                return item === 5
            }).length +
            this.dados.dado3.filter(function (item) {
                return item === 5
            }).length

        let face6 = this.dados.dado1.filter(function (item) {
                return item === 6
            }).length +
            this.dados.dado2.filter(function (item) {
                return item === 6
            }).length +
            this.dados.dado3.filter(function (item) {
                return item === 6
            }).length

        this.faces.face_1 = face1
        this.faces.face_2 = face2
        this.faces.face_3 = face3
        this.faces.face_4 = face4
        this.faces.face_5 = face5
        this.faces.face_6 = face6

        this.somaFaces()
    }
}
var dados = new Dados

function calcula() {



    var val = document.getElementById('jogadas').value
    console.log(`valor do input ${val}`)
    dados.aleatory(val)

    dados.showSomas()
    console.log(dados.soma[3])
    var ctx = document.getElementsByClassName('line-chart')

    var chartGraph = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
            datasets: [{
                    label: "Total de Ocorrência",
                    data: [
                        dados.soma[3].length,
                        dados.soma[4].length,
                        dados.soma[5].length,
                        dados.soma[6].length,
                        dados.soma[7].length,
                        dados.soma[8].length,
                        dados.soma[9].length,
                        dados.soma[10].length,
                        dados.soma[11].length,
                        dados.soma[12].length,
                        dados.soma[13].length,
                        dados.soma[14].length,
                        dados.soma[15].length,
                        dados.soma[16].length,
                        dados.soma[17].length,
                        dados.soma[18].length
                    ],
                    borderWidth: 6,
                    borderColor: 'rgba(77,166,253,0.85)',
                    backgroundColor: 'transparent'
                },
                {

                    label: "Esperado",
                    data: [
                        '3', '4', '5', '6', '8', '10', '15', '17', '18', '18', '17', '15', '10', '8', '6', '5', '4', '3'
                    ],
                    borderWidth: 6,
                        borderColor: 'rgba(6,204,6,0.85)',
                        backgroundColor: 'transparent'
                }

            ]
        },
        options: {
            title: {
                display: true,
                fontSize: 20,
                text: "Soma das Faces De 3 Dados"
            },
            labels: {
                fontStyle: "bold"
            }
        }
    })
}