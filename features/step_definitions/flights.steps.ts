import { binding, given, then, when } from "cucumber-tsflow";
import { assert, Assertion } from "chai";
import homepage from "../page_objects/homepage";
import flightspage from "../page_objects/flightspage";

@binding()
export class Flights {
  @given(/I open lot.com page$/)
  public openLotComPage() {
    homepage.open();
  }

  @when(/I enter departure airport as (\w{3})/)
  public enterDepartureAirport(departureAirport: string) {
    homepage.enterDepartureAirport(departureAirport);
  }

  @when(/I enter arrival airport as (\w{3})/)
  public enterArrivalAirport(arrivalAirport: string) {
    homepage.enterArrivalAirport(arrivalAirport);
  }
  
  @when(/I select one way trip/)
  public selectOneWay() {
    homepage.selectOneWay();
  }

  @when(/I enter departure date as (\d{2}.\d{2}.\d{4})/)
  public enterDepartureDate(departureDate: string) {
    homepage.enterDepartureDate(departureDate);
  }

  @when(/I search for flights/)
  public searchForFlights() {
    homepage.searchFlights();
  }

  @then(/avaliable flights are displayed/)
  public areFlightsDisplayed() {
    assert.isTrue(flightspage.areFlightsSearched);
  }
}
