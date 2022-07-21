import Header from "./Header"
import { useTheme } from "next-themes"

const Page = ({ children }) => {
    const { theme, setTheme } = useTheme();

    const changeTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light')
    };

    return (
        <>
            <Header changeTheme={changeTheme}/>
            <div>
                {children}
            </div>
        </>
    )
};

export default Page;