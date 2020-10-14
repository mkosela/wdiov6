import { assert, Assertion } from "chai";
import { getJSDocThisTag, isTypeQueryNode, textChangeRangeIsUnchanged } from "typescript";
import Page from "./page";

class Flightspage extends Page {
    get flightList() {
        return $(".flights.VAB");
    }

    get areFlightsSearched() {
        return browser.waitUntil(() => this.flightList.isDisplayed());
      }
}

export default new Flightspage();