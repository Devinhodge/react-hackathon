import React, {Component} from 'react';

class PirateNews extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
            typeSearch:'0',
            dateSearch:0,
            keyWord:"a",
            author:""
        }

    }
    keyWordFunction =(event)=>{
        this.setState({keyWord: event.target.value})
    }

    authorFunction =(event)=>{
        this.setState({author: event.target.value})
    }


    typeSearchFunction =(event)=>{
        console.log (event.target.value)

        let eventvalue = event.target.value
        
        
        if (eventvalue==='1'){
            document.getElementById("date_form").className="view"
            document.getElementById("author_form").className="hidden"
            document.getElementById("dateoption").className="hidden"
            document.getElementById("keyword_form").className="hidden"
            document.getElementById("subbutton").className="view"
            this.setState({typeSearch:eventvalue})
        }


        if (eventvalue==='2'){
            document.getElementById("author_form").className="view"
            document.getElementById("dateoption").className="view"
            document.getElementById("keyword_form").className="hidden"
            document.getElementById("date_form").className="hidden"
            document.getElementById("subbutton").className="view"
            this.setState({typeSearch:eventvalue})

        }

        if (eventvalue==='3'){
            document.getElementById("keyword_form").className="view"
            document.getElementById("author_form").className="hidden"
            document.getElementById("dateoption").className="view"
            document.getElementById("date_form").className="hidden"
            document.getElementById("subbutton").className="view"
            this.setState({typeSearch:eventvalue})

        }


    }


    dateSearchFunction =()=>{

        console.log("here")
        if (!this.state.dateSearch) 
        {this.setState({dateSearch:1})
         document.getElementById("date_form").className="view"
         console.log ("hidden",this.state.dateSearch)
        }
        else{
        this.setState({dateSearch:0})
        document.getElementById("date_form").className="hidden"
        console.log("view",this.state.dateSearch)
        }


    }
    render(){

    return(
        <div id="total_search_area">
            <h1>Select how you want to Search?</h1>

            <label htmlFor="searchtype">Select Search Method</label>
            <select name="searchtype" onChange={this.typeSearchFunction} id="searchtype">
                <option value='0'></option>
                <option value='1'>Date Range Only</option>
                <option value='2'>Author Name</option>
                <option value='3'>Key word in Story</option>
            </select><br></br>
            
            
            <div id="dateoption" className="hidden">
            <label htmlFor="dateoption">Do you want to Filter by date?</label>
            <select  name="dateoption"  onChange={this.dateSearchFunction}>
                <option value='0'>No</option>
                <option value='1'>Yes</option>
            </select></div>


            <div className="hidden" id="author_form">
                <label htmlFor="authinput">Author Name:</label>
                <input name="authinput" type="text" onChange={this.authorFunction}></input>
            </div>
            
            <div className="hidden" id="keyword_form">
                <label htmlFor="keyinput">Key Word:</label>
                <input name="keyinput" type="text" onChange={this.keyWordFunction}></input>
            </div>
            
            <div className="hidden" id="date_form">
            <form  >
                <label htmlFor="startdate">Start Date</label>
                <input name="startDate" type="date" onChange={this.props.inputUpdate}></input>
                <label htmlFor="enddate">End Date</label>
                <input name="endDate" type="date" onChange={this.props.inputUpdate}></input>


            </form>



            
            </div>
            <div className="hidden" id="subbutton">
            <button  onClick={(e)=>{this.props.formSubmit(e,this.state.typeSearch,this.state.dateSearch,this.state.keyWord,this.state.author)}}>Submit</button>
        </div></div>
    )}
}

export default PirateNews;