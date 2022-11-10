
// alert("hey this is ")

var rs;
var squares = [];

async function bubble_sort() {
    var grid = document.querySelector(".grid");
    var timeout = 1000;
    rs = document.getElementById("rs").value;





    // for (let i = 0; i < rs.length; i++) {
    //     let square = document.createElement("div");
    //     square.setAttribute('id', i);
    //     square.innerHTML = rs[i];
    //     grid.append(square);
    //     squares.push(square);
    //     console.log(square);
    //     console.log(squares);

    // }

    var table = document.createElement('table');
    table.classList.add("table", "flex-container");
    var tbody = document.createElement('tbody');
    var row = document.createElement('tr');
    grid.appendChild(table);



    for (let i = 0; i < rs.length; i++) {

        var column = document.createElement('td');
        column.setAttribute('id', "data" + [i]);

        var text = document.createTextNode(rs[i]);
        column.appendChild(text);
        row.appendChild(column);




    }
    tbody.appendChild(row);
    table.appendChild(tbody);



    for (let i = 0; i < rs.length; i++) {


        console.log(document.getElementById("data" + [i]).innerHTML)



    }



    document.getElementById("rs").disabled = true;
    document.getElementById('calcbtn1').disabled = "disabled";
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    for (let i = 0; i < rs.length - 1; i++) {
        for (let j = 0; j < (rs.length - i - 1); j++) {
            await sleep(300)
            if (parseInt(document.getElementById("data" + [j]).innerHTML) > parseInt(document.getElementById("data" + [j + 1]).innerHTML)) {
                if (j > 0) {
                    document.getElementById("data" + [j - 1]).classList.remove('exchange');
                    document.getElementById("data" + [j]).classList.remove('exchange');

                }
                document.getElementById("data" + [j]).classList.add('exchange');
                document.getElementById("data" + [j + 1]).classList.add('exchange');
                await sleep(300)
                let temp = document.getElementById("data" + [j]).innerHTML;
                document.getElementById("data" + [j]).innerHTML = document.getElementById("data" + [j + 1]).innerHTML;
                document.getElementById("data" + [j + 1]).innerHTML = temp;
                await sleep(300)
                if (j === rs.length - i - 2) {
                    await sleep(1000)
                    document.getElementById("data" + [j]).classList.remove('exchange');
                    document.getElementById("data" + [j + 1]).classList.remove('exchange');
                    


                    await sleep(300)
                }

            }



        }
    }
    
    

    // for (let i = 0; i < squares.length - 1; i++) {
    //     for (let j = 0; j < (squares.length - i - 1); j++) {
    //         setTimeout(() => {
    //             if (parseInt(squares[j].innerHTML) > parseInt(squares[j + 1].innerHTML)) {
    //                 if (j > 0) {
    //                     squares[j - 1].classList.remove('exchange');
    //                     squares[j].classList.remove('exchange');

    //                 }
    //                 squares[j].classList.add('exchange');
    //                 squares[j + 1].classList.add('exchange');
    //                 setTimeout(() => {
    //                     let temp = squares[j].innerHTML;
    //                     squares[j].innerHTML = squares[j + 1].innerHTML;
    //                     squares[j + 1].innerHTML = temp;
    //                 }, 1000)
    //                 if (j === squares.length - i - 2) {
    //                     setTimeout(() => {
    //                         squares[j].classList.remove('exchange');
    //                         squares[j + 1].classList.remove('exchange');

    //                     }, 2000)
    //                 }

    //             }
    //         }, timeout)

    //         timeout += 2000;
    //     }
    // }
}
