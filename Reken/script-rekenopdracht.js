const eenheden = ['mm', 'cm', 'dm', 'm', 'dam', 'hm', 'km'];
let unit_left = document.getElementById('eenh_left');
let unit_right = document.getElementById('eenh_right');

let selected_dim = document.getElementById('dim-select');

let index_left = 0;
let index_right = 0;

let problem_nmbr = 3.14;

function makeProblem()
{
    let dimension = selected_dim.value;
    index_left = Math.floor (Math.random() * 7 );
    index_right = Math.floor (Math.random() * 7 );

    while (index_left === index_right) {
        index_right = Math.floor (Math.random() * 7 );
    }

    problem_nmbr = new Decimal(Math.random() * 100).toDP(3);
    document.getElementById('inp_left').value = problem_nmbr;

    if(dimension > 1) {
        unit_left.innerHTML = eenheden[index_left] + '<sup>' + dimension + '</sup>';
        unit_right.innerHTML = eenheden[index_right] + '<sup>' + dimension + '</sup>';
    }
    else {
        unit_left.innerHTML = eenheden[index_left];
        unit_right.innerHTML = eenheden[index_right];
    }

    document.getElementById("inp_right").value = "";
    document.getElementById("inp_right").classList.remove("is-valid");
    document.getElementById("inp_right").classList.remove("is-invalid");
    document.getElementById("inp_right").focus();
}

function checkSolution()
{
    let aantal_komma_verschuivingen = selected_dim.value * (index_left - index_right)

    let answer;

    if(aantal_komma_verschuivingen > 0)
    {
        answer = problem_nmbr * Math.pow(10, aantal_komma_verschuivingen)
    }

    if(aantal_komma_verschuivingen < 0)
    {
        answer = problem_nmbr / Math.pow(10, aantal_komma_verschuivingen)
    }

    // alert("Het antwoord is: " + answer );   

    userinput = document.getElementById("inp_right").value
    let given_answer = document.getElementById("inp_right").value
    answer = toPLainString(answer)
    if (userinput == answer) {
      document.getElementById("inp_right").classList.remove("is-valid");
      document.getElementById("inp_right").classList.remove("is-invalid");
      document.getElementById("inp_right").classList.add("is-valid")
      // DisplayQuestion();
    } else {
      document.getElementById("inp_right").classList.remove("is-valid");
      document.getElementById("inp_right").classList.remove("is-invalid");
      document.getElementById("inp_right").classList.add("is-invalid")
    }
}

function toPLainString(num) {
    return num.toString().replace(/(-?)(\d*)\.?(\d*)e([+-]\d+)/,
        function(a,b,c,d,e) {
            return e < 0
                ? b + '0.' + Array(1-e-c.length).join(0) + c + d
                : b + c + d + Array(e-d.length+1).join(0);
        });

}