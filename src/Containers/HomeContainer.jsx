import { Connect, connect } from "react-redux";
import Home from './Components/Home'
import { ADD_TO_CART } from "../Services/Constants";
import { AddToCart } from "../Services/Actions/Actions";

const mapStateToProps=state=>({
    cardData
})

const mapDispatchToProps=dispatch=()=>({
    addToCartHandler:data=>dispatch(AddToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)

// export default Home;

