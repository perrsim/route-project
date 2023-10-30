import MainNavigation from "../components/MainNavigation";

function ErrorPage(){
    return(
        <>
        <MainNavigation/>
        <main>
        <h1>an error occurred!</h1>
        <p>cloud not find this page!</p>
        </main>
        </>
    );
}

export default ErrorPage;