import React from "react";
import './Detail.css';

class Detail extends React.Component{
    componentDidMount(){
        const { location, history} = this.props;
    
    
        if(location.state === undefined){
            history.push('/');
        }
    }

    render() {
        const {location} =this.props;
        if(location.state){
        return( 
       <div className="Detail_body"> 
        <img className="Detail_poster" src={location.state.poster} alt="poster"/>
        <p className="Detail_title ">{location.state.title}</p>
        <p className="Detail_summary">{location.state.summary}</p>
        <p className="Detail_genres">{location.state.genres}</p>
        </div>
        );
    }else {
        return null;
    }
  }
}

export default Detail;