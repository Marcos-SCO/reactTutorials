import React, { Component } from 'react'
import formatCurrency from '../utils';
import Fade from 'react-reveal/Fade';
import Modal from "react-modal";
import Zoom from 'react-reveal/Zoom';

export default class Products extends Component {

    state = {
        product: null
    }

    openModal = (product) => {
        this.setState({ product });
    };

    closeModal = () => {
        this.setState({ product: null })
    }

    render() {
        const { product } = this.state;
        return (
            <div>
                <Fade bottom cascade>
                    <ul className="products">
                        {this.props.products.map(product => (
                            <li key={product._id}>
                                <div className="product">
                                    <a href={`#${product._id}`}>
                                        <img src={product.img} alt={product.title}
                                            onClick={() => this.openModal(product)}
                                        />
                                        <p>{product.title}</p>
                                    </a>
                                    <div className="product-price">
                                        <div>{formatCurrency(product.price)}</div>
                                        <button className="button primary"
                                            onClick={() => this.props.addToCart(product)}
                                        >Adicionar ao carrinho</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Fade>
                {
                    product && (
                        <Modal isOpen={true} onRequestClose={this.closeModal}>
                            <Zoom>
                                <button className="close-modal" onClick={this.closeModal}>x</button>
                                <div className="product-details">
                                    <img src={product.img} alt={product.title}></img>
                                    <div className="product-details-description">
                                        <p>
                                            <strong>{product.title}</strong>
                                        </p>
                                        <p>
                                            {product.description}
                                        </p>
                                        <p>
                                            Tamanhos disponíveis:{" "}
                                            {product.availableSizes.map(x => (
                                                <span>{" "} <button className="button">{x}</button></span>
                                            ))}
                                        </p>
                                        <div className="product-price">
                                            <div>
                                                {formatCurrency(product.price)}
                                                <button className="button primary" onClick={() => {
                                                    this.props.addToCart(product);
                                                    this.closeModal()
                                                }}>
                                                    Adicionar ao carrinho
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Zoom>
                        </Modal>
                    )
                }
            </div>
        )
    }
}