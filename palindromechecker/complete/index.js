const input = document.getElementById("input")

function reverseString(str) {
        return str.split("").reverse().join("")
}


function check() {
        const value = input.value;
        // alert(value)
        const reverse = reverseString(value)
        // alert(reverse)
        if(value === reverse) {
              alert("True")
        } else {
                alert("False")
        }

}

