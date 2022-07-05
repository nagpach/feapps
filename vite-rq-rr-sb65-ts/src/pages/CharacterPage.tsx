import { QueryClient, QueryClientProvider } from "react-query";
import Character from "../components/Character";

const defaultQueryClient = new QueryClient();

const CharacterPage = () => {
    return (
        <QueryClientProvider client={defaultQueryClient}>
            <Character />
        </QueryClientProvider>
    )
}

export { CharacterPage }