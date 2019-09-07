import React, { Component } from 'react'
import Banner from './Banner';
import FeaturedProducts from './FeaturedProducts'

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <FeaturedProducts/>
            </div>
        )
    }
}
