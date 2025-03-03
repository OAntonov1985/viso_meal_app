import "./MainPage.css";
import Header from "../../components/Header/Header";
import ListingComponent from "../../components/ListingComponent/ListingComponent";
import BasicPagination from "../../components/Pagination";
import SelectorsAndSearch from "../../components/SelectorsAndSearch/SelectorsAndSearch";

export default function MainPage() {
    return (
        <main className='container'>
            <Header />
            <SelectorsAndSearch />
            <ListingComponent />
            <BasicPagination />
        </main>
    );
}
