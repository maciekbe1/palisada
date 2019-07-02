export default function reducer(state, { type, payload }) {
    switch (type) {
        case "SIGNIN_USER":
            return {
                ...state,
                test: payload
            };
        default:
            return state;
    }
}
