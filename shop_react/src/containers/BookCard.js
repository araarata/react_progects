import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as filterActions  from '../actions/cart';
import BookCard from '../components/BookCard';

const mapStateToProps = ({cart}, {id}) => ({
    addedCount: cart.items.reduce(
        (count, book) => count + (book.id === id ? 1 : 0),
        0,
    ),
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(filterActions, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(BookCard);