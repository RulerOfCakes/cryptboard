import { configureStore} from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptoAPI";
export default configureStore({
  reducer: { [cryptoApi.reducerPath]: cryptoApi.reducer },
  middleware: (middleware) =>
    middleware().concat(cryptoApi.middleware),
});
