import { QueryClient, QueryClientProvider } from "react-query";
import Characters from "../components/Characters";

const defaultQueryClient = new QueryClient();

const CharactersPage = () => {
    return (
        <QueryClientProvider client={defaultQueryClient}>
            <Characters />
        </QueryClientProvider>
    )
}

export { CharactersPage }