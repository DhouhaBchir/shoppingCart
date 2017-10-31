import { connect } from 'react-redux'
import { addToCart, removeFromCart } from '../actions'
import Home from '../components/pages/Home'

const mapStateToProps = (state) => ({
    productsList: state.shoppingCart
});

const mapDispatchToProps = {
    addToCart: addToCart,
    removeFromCart: removeFromCart
};

const HomePage = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomePage
