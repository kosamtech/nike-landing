import { Nav } from "./components";
import { Hero, PopularProducts } from "./sections";

function App() {
    return (
        <main className="relative">
            <Nav />
            <section className="xl:padding-l wide:padding-r padding-b">
                <Hero />
            </section>
            <section className="padding">
                <PopularProducts />
            </section>
        </main>
    );
}

export default App;
