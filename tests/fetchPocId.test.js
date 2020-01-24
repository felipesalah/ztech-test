import mockAxios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { createPromise } from "redux-promise-middleware";
import { fetchPocId } from "../src/actions";

const mockStore = configureMockStore([thunk, createPromise()]);

describe("POC ID Action", () => {
    let store;

    beforeEach(() => {
        store = mockStore({
        geocode: {}
        });
    });

    describe("fetchPocId action creator", () => {
        it("dispatches FETCH_POCID action and returns data on success", async () => {
            mockAxios.get(() =>
                Promise.resolve({
                    response: {
                        data: {
                            pocSearch: [
                                { id: '532' }
                            ]
                        }
                    }
                })
            );

            await store.dispatch(fetchPocId({ lat: '-23.6326915', lng: '-46.6998379' }, '2020-01-23T03:16:59-03:00'));
            const actions = store.getActions();

            expect.assertions(1);
            expect(actions[0].type).toEqual("FETCH_POCID");
        });

    });
});