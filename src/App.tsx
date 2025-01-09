import { Nav } from "./components";
import { Hero, PopularProducts, Services, SuperQuality } from "./sections";

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
            <section className="padding">
                <SuperQuality />
            </section>
            <section className="padding">
                <Services />
            </section>
        </main>
    );
}

export default App;
