import { render, screen } from "@testing-library/react"
import WelcomeUser from "../components/WelcomeUser";
describe("Welcmume user", () => {
    test("should show the user component", () => {
        render(<WelcomeUser name="Monsieur" age={9} />);
        expect(screen.getByText("Welcume Monsieur")).toBeDefined();
        expect(screen.getByText("Apparememnt vpis aurez 11 dans 2 ans")).toBeDefined();
    });
    // test("should render the correct name ", () => {
    //     render(<WelcomeUser name="Casi" age={23} />);
    //     expect(screen.getByText("Welcume Casi")).toBeDefined();
    // });
    // test("should give me the age + 2", () => {
    //     render(<WelcomeUser name="Casi" age={23} />);
    //     expect(screen.getByText("Apparememnt vpis aurez 25 dans 2 ans")).toBeDefined();
    // });
});