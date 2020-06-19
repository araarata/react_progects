import {connect} from 'react-redux'; //императивный подход
import {bindActionCreators} from 'redux';
import * as booksActions from '../actions/books';
import App from "../components/App";
import orderBy from 'lodash/orderBy'; //декларативный подход

const sortBy = (books, filtrBy) => {
    //return orderBy(books, 'price', 'asc');//desc-по убыванию asc-возрастание
    switch (filtrBy) {
        case 'price_high':
            return orderBy(books, 'price', 'desc');
        case 'price_low':
            return orderBy(books, 'price', 'asc');
        case 'author':
            return orderBy(books, 'author', 'asc');
        default:
            return books
    }
}

const filterBooks = (books, searchQuery) =>
    books.filter(
        o =>
            o.title.toLocaleLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
            o.author.toLocaleLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
        );

const searchBooks = (books, filterBy, searchQuery) => {
    return sortBy(filterBooks(books,searchQuery), filterBy);
}


const mapStateToProps = ({books, filter}) => ({
    books: books.items && searchBooks(books.items, filter.filterBy, filter.searchQuery),
    isReady: books.isReady
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(booksActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)( App);

