import React from "react";
import FlipNumbers from 'react-flip-numbers';
import Slider from "react-slick";
import {Card, Button} from 'react-bootstrap';
import data from './photos.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class CountDownTimer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            endDate: new Date(2020,3,5,10,58,10),
            currentDate: new Date(),
            seconds:0,
            minuits:0,
            hours:0,
            days:0
        };
        this.calculateTimeDifferent = this.calculateTimeDifferent.bind(this);
    }

    calculateTimeDifferent(){
        this.setState({ currentDate: new Date() });
        let timeDifferent = this.state.endDate - this.state.currentDate;
        let remainingSeconds = (timeDifferent/1000);
        let seconds = (Math.floor(remainingSeconds))%60;
        let minuits= (Math.floor((remainingSeconds)/60))%60;
        let hours= (Math.floor(remainingSeconds/3600))%60;
        let days= (Math.floor(remainingSeconds/86400));
        console.log(Math.floor(remainingSeconds));
        this.setState({days:days, hours:hours, minuits:minuits, seconds:seconds});

    }

    componentDidMount() {
        setInterval(() => {
            this.calculateTimeDifferent();
        }, 1000);
    }

    componentWillUnmount() {
       
    }

    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 9,
            slidesToScroll: 3,
            lazyLoad: true,
            autoplay: true
          };
          const values =  data.map((d) => {
            return( 
               <Card style={{width:"150px"}} key={d.id}>
                   <Card.Img variant="top" src={d.url} style={{width:"150px"}}/>
                   <Card.Body>
                       <Card.Title style={{color:"white"}}>{d.title}</Card.Title>
                       <Card.Text style={{color:"white"}}>
                           Some quick example
                       </Card.Text>
                       <Button  variant="primary">Add-to cart</Button>
                   </Card.Body>
               </Card>
           );
           });

    return <div className="my-promotion">
            <h2 style={{color: "white"}}>This is title</h2>
            <h1 style={{color: "white"}}>This is sub title</h1>
            <div className="timer-container">
            <div className="inline">
            <FlipNumbers
                play
                color="#fff"
                background="#333333"
                width={50}
                height={50}
                numbers={`${this.state.days}`}
            />
            Days
        </div>
        -
        <div className="inline">
            <FlipNumbers
                play
                color="#fff"
                background="#333333"
                width={50}
                height={50}
                numbers={`${this.state.hours}`}
            />
            Hours
        </div>
        -
        <div className="inline">
            <FlipNumbers
                play
                color="#fff"
                background="#333333"
                width={50}
                height={50}
                numbers={`${this.state.minuits}`}
            />
            Minutes
        </div>
        - 
        <div className="inline">
            <FlipNumbers
                play
                color="#fff"
                background="#333333"
                width={50}
                height={50}
                numbers={`${this.state.seconds}`}
            />
            Seconds
        </div>  
            </div> 
        <div className="product-carousel">
        <Slider {...settings}>{values}</Slider>
        </div>
    </div>
    };
}