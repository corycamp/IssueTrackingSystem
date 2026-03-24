import NavBar from "./NavBar";


const PageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
        <NavBar/>
        {children}
        </div>
    );
}
export default PageProvider;