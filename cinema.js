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