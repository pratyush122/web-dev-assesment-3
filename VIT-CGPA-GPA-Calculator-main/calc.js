var n;

function getvalue_gpa() {
    n = document.getElementById("no1").value;
    n = parseInt(n);
    getvalues_gpa();
}

function getvalues_gpa() {
    var i;
    document.write("<link rel='stylesheet' type='text/css' href='style.css'></link>");
    document.write("<link href='https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap' rel='stylesheet'></link>");
    document.write("<div class='box1'>Enter Your Grade and Credits</div>");
    for (i = 0; i < n; i++) {
        document.write("<div class='box2'><select aria-placeholder='Select the grade' id='grade" + i + "' class='grades'><option value='S'>S</option><option value='A'>A</option><option value='B'>B</option><option value='C'>C</option><option value='D'>D</option><option value='E'>E</option><option value='N'>N</option></select><input type='number' placeholder='Credits' id='credit" + i + "' class='credits' ></div> <br>");
    }
    document.write("<div class='box2'> <button type='submit' id='sub3' onclick='gpa()'>Submit</button></div>");
    document.write("<div class='home'> <button id='sub7' onclick='home()'>Back</button></div>")
}

function gpa() {
    var grades = [];
    var credits = [];
    var point = [];
    var total_credits = 0;
    var sum_gpa = 0;
    var gpa_calc;

    for (var i = 0; i < n; i++) {
        grades[i] = document.getElementById("grade" + i).value;
        credits[i] = document.getElementById("credit" + i).value;
        credits[i] = parseInt(credits[i]);

        if (credits[i] < 0) {
            alert("Credits cannot be negative.");
            return;
        }
    }

    for (var i = 0; i < n; i++) {
        point[i] = gradenum(grades[i]);
    }

    for (var i = 0; i < n; i++) {
        total_credits += credits[i];
        sum_gpa += point[i] * credits[i];
    }

    gpa_calc = sum_gpa / total_credits;

    document.write("<div id='gpa'></div");
    document.getElementById('gpa').innerHTML = 'GPA : ' + (gpa_calc.toFixed(2));
}

function gradenum(x) {
    var pt
    switch (x) {
        case 'S':
            pt = 10;
            break;
        case 'A':
            pt = 9;
            break;
        case 'B':
            pt = 8;
            break;
        case 'C':
            pt = 7;
            break;
        case 'D':
            pt = 6;
            break;
        case 'E':
            pt = 5;
            break;
        case 'N':
            pt = 0;
            break;
        default:
            pt = 0;
    }
    return pt;
}

var m;
var sem = [];

function getvalue_cgpa() {
    m = document.getElementById("no2").value;
    m = parseInt(m);
    document.write("<link rel='stylesheet' type='text/css' href='style.css'></link>");
    document.write("<link href='https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap' rel='stylesheet'></link>");
    document.write("<div class='box1'>Enter Your Credits and GPA per semester</div>")
    for (i = 0; i < m; i++) {
        document.write("<div class='box2'><input type='text' placeholder='Semester No.' id='sem" + (i + 1) + "' class='sem' > <input type='number' placeholder='Credits Covered' id='creds" + (i + 1) + "' class='creds' > <input type='text' placeholder='GPA' id='gpa" + (i + 1) + "' class='gpas'></div><br>");
    }
    document.write("<div class='box2'><button type='submit' id='sub4' onclick='cgpa()'>Submit</button></div><br>");
    document.write("<div class='home'> <button id='sub6' onclick='home()'>Back</button></div>")
}

function cgpa() {
    var credits = [];
    var gpa = [];
    var total_credits = 0.00;
    var sum_cgpa = 0.00;
    var cgpa_calc = 0.00;

    for (var i = 0; i < m; i++) {
        credits[i] = document.getElementById("creds" + (i + 1)).value;
        credits[i] = parseInt(credits[i]);
        gpa[i] = document.getElementById("gpa" + (i + 1)).value;
        gpa[i] = parseFloat(gpa[i]);

        if (credits[i] < 0) {
            alert("Credits cannot be negative.");
            return;
        }
    }

    for (var i = 0; i < m; i++) {
        total_credits += credits[i];
        sum_cgpa += credits[i] * gpa[i];
    }

    cgpa_calc = sum_cgpa / total_credits;

    document.write("<div id='cgpa'></div>");
    document.getElementById('cgpa').innerHTML = 'CGPA : ' + (cgpa_calc.toFixed(2));
}

function home() {
    location.reload();
}
