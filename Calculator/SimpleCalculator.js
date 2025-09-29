function appendValue (value) {
  document.getElementById('display').value += value
}

function numberClear () {
  document.getElementById('display').value = ''
}

function equalAnswer () {
  try {
    document.getElementById('display').value = eval(
      document.getElementById('display').value
    )
  } catch {
    document.getElementById('display').value = 'E R R O R !!!';
  }
}

function numberDelete () {
  document.getElementById('display').value = document
    .getElementById('display')
    .value.slice(0, -1)
}

function btnsqrt () {
  document.getElementById('display').value = Math.sqrt(
    document.getElementById('display').value
  )
}

function btnsquare () {
  document.getElementById('display').value = Math.pow(
    document.getElementById('display').value,
    2
  )
}

function btnCube () {
  document.getElementById('display').value = Math.pow(
    document.getElementById('display').value,
    3
  )
}


