export default function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-secondary dark:border-gray-600">
            <span className="text-sm text-gray-300 sm:text-center dark:text-gray-300">Made by Juan Figuera using NextJS.</span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-300 dark:text-gray-300 sm:mt-0">
                <li>
                    <a href="https://www.linkedin.com/in/juan-antonio-figuera/" target="_blank" className="hover:underline hover:text-gray-500 me-4 md:me-6">Linkedin</a>
                </li>
                <li>
                    <a href="https://github.com/JFiguera15" className="hover:underline hover:text-gray-500 me-4 md:me-6" target="_blank">Github</a>
                </li>
            </ul>
        </footer>
    )
}