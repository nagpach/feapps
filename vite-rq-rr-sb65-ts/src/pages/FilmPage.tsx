import { QueryClient, QueryClientProvider } from "react-query";
import Film from "../components/Film";

const defaultQueryClient = new QueryClient();

const FilmPage = () => {
    return (
        <QueryClientProvider client={defaultQueryClient}>
            <Film />
        </QueryClientProvider>
    )
}

export { FilmPage }