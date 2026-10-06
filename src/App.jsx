import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router";
import routes from "./routes";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="py-4 px-30 min-h-screen bg-[url('/elevate-bg.jpg')] bg-cover bg-fixed ">
        <ReactQueryDevtools initialIsOpen={false} position="bottom" />
        <RouterProvider router={routes} />
        <Toaster
          gutter={12}
          position="bottom-right"
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 2000,
              iconTheme: {
                primary: "#1A1A1A",
                secondary: "#22c55e  ",
              },
            },
            error: {
              duration: 3000,
            },

            style: {
              fontSize: "16px",
              maxHeight: "51px",
              maxWidth: "464px",
              borderRadius: "6px",
              padding: "16px 96px 16px 16px",
              backgroundColor: "#1A1A1A",
              color: "white",
            },
          }}
        />
      </div>
    </QueryClientProvider>
  );
}

export default App;
