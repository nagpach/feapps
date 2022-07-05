import { QueryClient, QueryClientProvider } from "react-query";
import Films from "../components/Films";

const defaultQueryClient = new QueryClient();

const FilmsPage = () => {
    return (
        <QueryClientProvider client={defaultQueryClient}>
            <Films />
        </QueryClientProvider>
    )
}

export { FilmsPage }