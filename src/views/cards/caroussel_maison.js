import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function DemoCarousel(props) {

    const images=props.image;
    const vignette=props.vignette;

    if(vignette){
        return (

            <Carousel autoPlay={true} infiniteLoop={true} interval={3000} stopOnHover={true} showThumbs={true}>
                {
                    images?.map((image,index)=>(
                        <div key={"demo_caroussel"+index}> 
                            <img src={"http://localhost:1337"+image?.attributes.url} style={{width:"100%",height:"auto",margin:'0px'}}  />
                            <p className="legend">{props.legend}</p>
                        </div>
                    ))
                }
                
                
            </Carousel>
          )
    }
    else
    {
        return (

            <Carousel autoPlay={true} infiniteLoop={true} interval={3000} stopOnHover={true} showThumbs={false}>
                {
                    images?.map((image,index)=>(
                        <div key={"demo_caroussel"+index}>
                            <img src={"http://localhost:1337"+image?.attributes.url} style={{width:"100%",height:"auto",margin:'0px'}}  />
                            <p className="legend">{props.legend}</p>
                        </div>
                    ))
                }
                
                
            </Carousel>
          )
    }

}

export default DemoCarousel