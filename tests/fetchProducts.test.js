import mockAxios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { createPromise } from "redux-promise-middleware";
import { fetchProducts } from "../src/actions";

const mockStore = configureMockStore([thunk, createPromise()]);

describe("Products Action", () => {
    let store;

    beforeEach(() => {
        store = mockStore({
        geocode: {}
        });
    });

    describe("fetchProducts action creator", () => {
        it("dispatches FETCH_PRODUCTS action and returns data on success", async () => {
            mockAxios.get(() =>
                Promise.resolve({
                    response: {
                        data: {
                            poc: {
                                products: []
                            }
                        }
                    }
                })
            );

            await store.dispatch(fetchProducts('532'));
            const actions = store.getActions();

            expect.assertions(1);
            expect(actions[0].type).toEqual("FETCH_PRODUCTS");
        });

    });
});