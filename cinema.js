class Seat {
  constructor(row, column) {
    this.row = row;
    this.seatNumber = column;
    this.reserved = false;
  }

  reserve() {
    if(!this.reserved) {
      this.reserved = true
      return true
    } else {
      return false
    }
  }
}

class Cinema {
  constructor(rows, rowsSeats) {
    this.rows = rows;
    this.rowsSeats = rowsSeats;
    this.cinemaSeats = this.createCinema()
  }

  createCinema() {
    let arrayRows = new Array(this.rows)
    for (let i = 0; i < this.rows; i++) {
      arrayRows[i] = new Array(this.rowsSeats)
      for (let j = 0; j < this.rowsSeats; j++) {
        arrayRows[i][j] = new Seat(i + 1, j + 1);
      }
    }

    return arrayRows;
  }

  showSeatStatus() {
    console.log(" ")
    console.log("====== SCREEN ======")
    for (let i = 0; i < this.rows; i++) {
      let row = "ROW " + (i + 1) + " ";
      for (let j = 0; j < this.rowsSeats; j++) {
        row += this.cinemaSeats[i][j].reserved ? "R " : "A ";
      }
      console.log(row)
    }
    console.log("      ")
    console.log("A: Available, R: Reserved")
    console.log(" ")
  }

  reserveSeat(row, seat) {
    if((row > this.rows || row <= 0) || (seat > this.rowsSeats || seat <= 0)) {
      console.log("The seat must be between 1 - " + this.rows + " rows and 1 - " + this.rowsSeats + " seats")
    } else {
      if(this.cinemaSeats[row - 1][seat - 1].reserve()) {
        console.log("You reserve this seat (" + row + " row, " + seat + " seat) ")
      } else {
        console.log("This seat (" + row + " row, " + seat + " seat) has already reserved")
      }
    }
  }
}

const cinema = new Cinema(5, 10)

cinema.showSeatStatus()

cinema.reserveSeat(3, 5)

cinema.reserveSeat(10, 5)

cinema.reserveSeat(3, 5)

cinema.showSeatStatus()


