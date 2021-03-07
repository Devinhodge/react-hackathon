import React, { Component } from 'react';
import './App.css';
import PirateNews from './Components/PirateNews';
import Articles from './Components/Articles';

class App extends Component {


  constructor (props){
    super(props);

    this.state={
      data:[],
      startDate:"2020-1-1",
      endDate:"2020-12-12"
    }
  }
 
  inputUpdate = (event) =>{
    this.setState({[event.target.name]:event.target.value})
    console.log (this.state.startDate,this.state.endDate)
   
  }

  formSubmit =(event,typesearch,datesearch,keyword,author)=>{    
    event.preventDefault();
    console.log ("type search = ",typesearch,datesearch)
    // converting dates to seconds for fetch
    let startD = (Date.parse(new Date (this.state.startDate))/1000) 
    let endD=(Date.parse(new Date (this.state.endDate))/1000);

   console.log("startdate= "+startD)
   console.log("enddate= "+endD)

   let url=""

   if (typesearch==='1'){
     console.log("should set url")

      url=`https://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i%3E${startD},created_at_i%3C${endD}`
   }
   if (typesearch==='3'&datesearch===0){
     console.log("keyword",keyword)
    url=`https://hn.algolia.com/api/v1/search?query=${keyword}&tags=story`
   }

   if (typesearch==='2'&datesearch===0){
    console.log("author",author)
   url=`https://hn.algolia.com/api/v1/search?tags=story,author_${author}`
  }

  if (typesearch==='2'&datesearch===1){
    console.log("author",author)
   url=`https://hn.algolia.com/api/v1/search_by_date?tags=story,author_${author}&numericFilters=created_at_i%3E${startD},created_at_i%3C${endD}`
  }


  if (typesearch==='3'&datesearch===1){

   url=`https://hn.algolia.com/api/v1/search_by_date?query=${keyword}&tags=story&numericFilters=created_at_i%3E${startD},created_at_i%3C${endD}`
  }

   fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ data: data.hits }));


  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
              
          Pirate News
        
      </header>
      <PirateNews inputUpdate={this.inputUpdate} formSubmit={this.formSubmit} />
      <Articles data={this.state.data} />
    </div>
  );}
}

export default App;
