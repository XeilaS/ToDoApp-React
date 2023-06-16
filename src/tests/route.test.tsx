import { render, screen } from "@testing-library/react"
import Navbar from "../components/NavBar";
import { MemoryRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/home.page";
describe("Navbar Component", () => {
    test("should return the routes ", () => {
        render(
            <MemoryRouter ><Navbar /></MemoryRouter>)

        const profileLink = screen.getByText("Home")
        expect(profileLink).toBeDefined()

        const linkHref = profileLink.getAttribute("href")
        expect(linkHref).toEqual("/")
    });
});
