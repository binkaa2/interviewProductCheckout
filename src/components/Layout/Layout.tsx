
import Header from "../Header/Header"
type MainLayoutProps = {
    children: React.ReactNode;
};

export default function Layout({ children } : MainLayoutProps) : JSX.Element {
    return (
        <div>
            <Header />
            <main className="container">
                {children}
            </main>
        </div>
    )
}