import { assert, Assertion } from "chai";
import { getJSDocThisTag, isTypeQueryNode, textChangeRangeIsUnchanged } from "typescript";
import Page from "./page";

class Homepage extends Page {
  get departureAirport() {
    return $("#select2-departureAirport-container");
  }
  get arrivalAirport() {
    return $("#select2-destinationAirport-container");
  }
  get airportSearchText() {
    return $(".select2-search__field");
  }
  get flightDate() {
    return $("#departureDate-display");
  }
  get flightDateInput() {
    return $("#departureDate");
  }
  get returnDate() {
    return $("#returnDate-display");
  }
  get oneWayRadio() {
    return $("span*=Lot w jedną stronę");
  }
  get multicityRadio() {
    return $("");
  }
  get roundTripRadio() {
    return $("");
  }
  get searchButton() {
    return $(".booker-column-3.submit-middle > .o-btn.submit");
  }

  open() {
    super.open("https://lot.com/pl/pl"); //provide your additional URL if any. this will append to the baseUrl to form complete URL
  }

  enterDepartureAirport(departureAirport: string) {
    this.departureAirport.click();
    browser.waitUntil(() => this.airportSearchText.isClickable());
    this.airportSearchText.setValue(departureAirport);
    browser.keys('Enter');
    browser.waitUntil(() => this.departureAirport.getText().includes(departureAirport));
    assert(this.departureAirport.getText().includes(departureAirport),'Departure airport is not set correctly: expected: '+departureAirport+', actual: '+this.departureAirport.getText());
  }

  enterArrivalAirport(arrivalAirport: string) {
    this.arrivalAirport.click();
    browser.waitUntil(() => this.airportSearchText.isClickable());
    this.airportSearchText.setValue(arrivalAirport);
    browser.keys('Enter');
    browser.waitUntil(() => this.arrivalAirport.getText().includes(arrivalAirport));
    assert(this.arrivalAirport.getText().includes(arrivalAirport),'Departure airport is not set correctly: expected: '+arrivalAirport+', actual: '+this.arrivalAirport.getText());

  }

  enterDepartureDate(departureDate: string) {
    this.flightDate.click();
    browser.waitUntil(() => this.flightDateInput.isDisplayed());
    this.flightDateInput.setValue(departureDate);
    browser.keys('Enter');
    assert(this.flightDateInput.getValue().includes(departureDate),'Departure airport is not set correctly: expected: '+departureDate+', actual: '+this.flightDateInput.getValue());
  }

  enterReturnDate(returnDate: string) {

  }

  selectOneWay() {
    this.oneWayRadio.click();
    
  }
  
  selectMulticity() {

  }
  
  selectRoundTrip() {

  }

  searchFlights() {
    this.searchButton.click();
  }

}

export default new Homepage();
