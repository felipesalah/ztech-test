import mockAxios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { createPromise } from "redux-promise-middleware";
import { fetchLatLong } from "../src/actions";

const mockStore = configureMockStore([thunk, createPromise()]);

describe("Latitue and Longitude Action", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      geocode: {}
    });
  });

  describe("fetchLatLong action creator", () => {
    it("dispatches FETCH_LATLONG action and returns data on success", async () => {
      mockAxios.get(() =>
        Promise.resolve({
          data: [{
              lat: '-23.4926751',
              lng: '-46.692415'
          }]
        })
      );

      await store.dispatch(fetchLatLong('Rua Américo Brasiliense, São Paulo'));
      const actions = store.getActions();

      expect.assertions(1);
      expect(actions[0].type).toEqual("FETCH_LATLONG");
    });

  });
});