import React, {Component} from "react";
import Post from "../../Components/post";
import axios from "axios";

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
        }
    }

    fetch_data(){
        axios.get('https://api.airtable.com/v0/appoSQco5haA0MLly/Producer%20map?api_key=key4Mthavm00bKRzr')
        .then((response) => {
            // handle success
            console.log(response)
            var data = response.data.records;
            console.log(data)
            console.log(typeof(data))
            data.map(item=>{
                console.log(item.fields.Name)
            })
            this.setState({data: data});
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }

    componentDidMount(){
        this.fetch_data();
    }
    render(){
        console.log(this.state);
        return (
            <div>
                
                {
                    this.state.data.map((item, index) => (
                        <Post post={item.fields} key={index}/>
                    ))
                }
            </div>
        )
    }
}