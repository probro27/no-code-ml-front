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
        case "set_modelType": {
            return {
                ...state,
                modelType: action.modelType
            };
        }
        case "set_testPart": {
            return {
                ...state,
                testPart: action.testPart
            };
        }
        case "set_scoring": {
            return {
                ...state,
                scoring: action.scoring
            };
        }
        case "set_predictColumn": {
            return {
                ...state,
                predictColumn: action.predictColumn
            };
        }
        case "set_args": {
            return {
                ...state,
                args: args
            }
        }
    }
}
