import { useAppContext } from "../context/AppContext";
import { useState } from "react";
import axios from "axios";
export default function UploadForm() {
  // const { state, dispatch } = useAppContext();
  const [dataset, setDataset] = useState("");
  const [predictColumn, setPredictcolumn] = useState("");
  const [modelType, setModelType] = useState("");
  const [modelName, setModelName] = useState("");
  const [scoring, setScoring] = useState("");
  const [trainPart, setTrainPart] = useState(0);
  const [testPart, setTestPart] = useState(0);
  const [responseReceived, setResponseReceived] = useState(false);
  const [response, setResponse] = useState({});

  const onDatasetChange = (event) => {
    event.preventDefault();
    setDataset(event.target.value);
  };
  const onPredictionColumnChange = (event) => {
    event.preventDefault();
    setPredictcolumn(event.target.value);
  };
  const onModelTypeChange = (event) => {
    event.preventDefault();
    setModelType(event.target.value);
  };
  const onModelNameChange = (event) => {
    event.preventDefault();
    setModelName(event.target.value);
  };
  const onScoringChange = (event) => {
    event.preventDefault();
    setScoring(event.target.value);
  };
  const onTestPartChange = (event) => {
    event.preventDefault();
    setTestPart(event.target.value);
  };
  const onTrainPartChange = (event) => {
    event.preventDefault();
    setTrainPart(event.target.value);
  };
  const submitForm = async (event) => {
    event.preventDefault();
    const dataToSend = {
      dataset: dataset,
      modelName: modelName,
      modelType: modelType,
      testPart: testPart,
      trainPart: trainPart,
      scoring: scoring,
      predictColumn: predictColumn,
      args: {},
    };
    await axios
      .post("http://127.0.0.1:5000/sklearn", dataToSend)
      .then((res) => {
        console.log("It works!!!");
        console.log(res);
        setResponseReceived(true);
        setResponse(res);
      })
      .catch((err) => {
        console.warn(err);
      });
  };
  return (
    <>
      <div className="mx-8">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Data
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Please fill in the information regarding the dataset.
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST">
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="dataset"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Dataset
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                          https://
                        </span>
                        <input
                          type="text"
                          name="dataset"
                          id="dataset"
                          className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                          placeholder="www.example.com"
                          onChange={onDatasetChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="predictColumn"
                        className="flex text-sm font-medium text-gray-700"
                      >
                        Prediction Column
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="predictColumn"
                          name="predictColumn"
                          rows={1}
                          className="mt-1 block w-full flex-1 rounded-none rounded-r-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                          placeholder="Cost"
                          defaultValue={""}
                          onChange={onPredictionColumnChange}
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Write which column of the dataset is the model being
                        trained for.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mx-8 mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Model Specific Information
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Please fill in model specific information, for us to build and
                train your model.
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <fieldset className="pb-8">
                    <legend className="contents text-base font-medium text-gray-900">
                      Type of Problem
                    </legend>
                    <p className="text-sm text-gray-500">
                      Choose between Regression and Classification.
                    </p>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center">
                        <input
                          id="Regression"
                          name="problem"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="regression"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          Regression
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="classification"
                          name="problem"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <label
                          htmlFor="classification"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          Classification
                        </label>
                      </div>
                    </div>
                  </fieldset>
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="model-type"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Model Type
                      </label>
                      <input
                        type="text"
                        name="model-type"
                        id="model-type"
                        autoComplete="linear_model"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        onChange={onModelTypeChange}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="model-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Model name
                      </label>
                      <input
                        type="text"
                        name="model-name"
                        id="model-name"
                        autoComplete="LinearRegression"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        onChange={onModelNameChange}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="test-part"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Test Part
                      </label>
                      <input
                        type="text"
                        name="test-part"
                        id="test-part"
                        autoComplete="0.3"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        onChange={onTestPartChange}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="train-part"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Train Part
                      </label>
                      <input
                        type="text"
                        name="train-part"
                        id="train-part"
                        autoComplete="0.7"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        onChange={onTrainPartChange}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="scoring"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Scoring Metric
                      </label>
                      <input
                        type="text"
                        name="scoring"
                        id="scoring"
                        autoComplete="accuracy"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        onChange={onScoringChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    onClick={submitForm}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
      {responseReceived && (
        <div className="flex flex-col items-center p-4">
            <h1 className="text-xl text-blue-800 font-semibold text-left pb-4">Metrics</h1>
          <div className="shadow-lg border w-1/3 p-8 flex flex-row justify-center">
            <h2>
              <span className="text-blue-500 font-bold">{scoring}: </span>{response.data.scoring}
            </h2>
          </div>
        </div>
      )}
    </>
  );
}
