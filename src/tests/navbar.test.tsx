import { render, screen } from "@testing-library/react"
import Navbar from "../components/NavBar";
import { MemoryRouter } from "react-router-dom";
describe("Navbar Component", () => {
    test("should return the menu ? ", () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        )
        expect(screen.getByText("Home")).toBeDefined();
        expect(screen.getByText("TodoPage")).toBeDefined();
        expect(screen.getByText("Freelance")).toBeDefined();
        expect(screen.getByText("Mon profil")).toBeDefined();
    });
});



