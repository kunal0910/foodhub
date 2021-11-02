import React from 'react';
import "./Menu.css";
import image from "../foodHD.jpg";
import history from '../History';
import { BrowserRouter as Router} from 'react-router-dom';

  

const Menu = function(props){

    return(
        <>
        <Router>
        <div className = "sub-heading">Best Sellers</div>
        <table>
            <tr>
                <th>Sr.</th>
                <th>Item</th>
                <th>Price</th>
                <th>Rating</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Chicken Biryani</td>
                <td>Rs.250/-</td>
                <td>4.9</td>
                <td className = "buy" onClick={() => props.history.push({pathname:'/path'})}><b>Buy</b></td>
            </tr>
            <tr>
                <td>2</td>
                <td>Schezwan Rice Special</td>
                <td>Rs.150/-</td>
                <td>4.7</td>
                <td className = "buy" onClick={() => props.history.push({pathname:'/path'})}><b>Buy</b></td>
            </tr>
            <tr>
                <td>3</td>
                <td>MahaThali Veg</td>
                <td>Rs.350/-</td>
                <td>4.6</td>
                <td className = "buy" onClick={() => props.history.push({pathname:'/path'})}><b>Buy</b></td>
            </tr>
            <tr>
                <td>4</td>
                <td>Special Momos</td>
                <td>Rs.200/-</td>
                <td>4.6</td>
                <td className = "buy" onClick={() => props.history.push({pathname:'/path'})}><b>Buy</b></td>
            </tr>
            <tr>
                <td>5</td>
                <td>Raj Kacchori</td>
                <td>Rs.99/-</td>
                <td>4.6</td>
                <td className = "buy" onClick={() => props.history.push({pathname:'/path'})}><b>Buy</b></td>
            </tr>
            <tr>
                <td>6</td>
                <td>SK Dabeli</td>
                <td>Rs.50/-</td>
                <td>4.7</td>
                <td className = "buy" onClick={() => props.history.push({pathname:'/path'})}><b>Buy</b></td>
            </tr>
            <tr>
                <td>7</td>
                <td>Chicken Butter Masala</td>
                <td>Rs.270/-</td>
                <td>4.8</td>
                <td className = "buy" onClick={() => props.history.push({pathname:'/path'})}><b>Buy</b></td>
            </tr>
            <tr>
                <td>8</td>
                <td>Masala Dosa</td>
                <td>Rs.79/-</td>
                <td>4.5</td>
                <td className = "buy" onClick={() => props.history.push({pathname:'/path'})}><b>Buy</b></td>
            </tr>
        </table>
        <img src={image} alt="Food image"></img>
        </Router>
        </>
    )
}
export default Menu