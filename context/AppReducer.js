export const initialState = {
    dataset: "",
    modelName: "",
    modelType: "",
    testPart: 0,
    scoring: "",
    predictColumn: "",
    args: {}
};

export const AppReducer = (state, action) => {
    switch(action.type) {
        case "set_dataset": {
            return {
                ...state, 
                dataset: action.dataset
            };
        }
        case "set_modelName": {
            return {
                ...state,
                modelName: action.modelName
            };
        }
    }
}
