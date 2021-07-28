import "./App.css";
import ReactAdmin from "./react-admin/Admin";
import { ToastProvider } from "react-toast-notifications";
import CustomToast from "./components/customToast";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <ToastProvider
        autoDismiss
        autoDismissTimeout={3000}
        components={{ Toast: CustomToast }}
        placement="top-center"
      >
        <ReactAdmin />
      </ToastProvider>
    </Provider>
  );
}

export default App;
