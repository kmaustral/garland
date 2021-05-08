import React, {Component} from "react";
import Container from '@material-ui/core/Container';
import Home from './Pages/Home/home';
import Logo from "./assets/logo.jpg";
import Typography from '@material-ui/core/Typography';

import './App.css';

export default class App extends Component{
    render(){
        return (
          <Container fixed>
            <div>
              <a href="https://wccaustralia.org.au/"><img src={Logo} /></a>
            </div>
            <div>
              <p className="intro">
              <Typography variant="h5" component="h2" gutterBottom>
                  Gunyang: East Gippsland Craft Map
              </Typography>
                The Australian Craft Map is a project of the World Crafts Council - Australia which aims to make the world of craft accessible. It includes craft organisations, associations, guilds, workshops, galleries, museums and suppliers across the country.
The first focus region is beautiful East Gippsland in Victoria. While exploring the natural wonders of East Gippsland, we encourage you to discover the beautiful things that locals make of their world.
This listing features makers in East Gippsland, which combines the township of Bairnsdale with communities in scenic Alpine, bush, coast and lakes.
<br/>The motif for this map is Gunyang. Gunyang is a local name for the kangaroo apple, a flower local to the East Gippsland region. It is a pioneer species that is one of the first to appear after a bushfire.
This is a listing of East Gippsland makers and where you can find their products. It is designed for those travelling through the region and looking for something locally made. This map is in association with the Phoenix Trail and is supported by a Diplomacy Grant of the Department of Foreign Affairs and Trade.
              </p>
              <Home/>
            </div>
          </Container>
        )
    }
}

