import React from "react";
import Data from "./data.json";
import "./style.css";
import Sanlam from "./Images/sanlam.png";
import ProgressArc from 'react-arc-progress';

//Store each card's information from the json file
const openData = Data.portfolio.clientAccountGroups[0];
const pendingData = Data.portfolio.clientAccountGroups[1];
const incompleteData = Data.portfolio.clientAccountGroups[2];

//Text style for progress arcs
let arcText ={color: "#2875ca", font: "'Yantramanav', sans-serif", size: "2em"};

//Convert date format
let openDate = new Date(openData.inceptionDate).toString().split(" ");
let pendingDate = new Date(pendingData.inceptionDate).toString().toUpperCase().split(" ");
let incompleteDate = new Date(incompleteData.updatedDate).toString().toUpperCase().split(" ");

export default class DisplayCards extends React.Component{
	constructor(props){
		super(props);
		this.state = {cardStatus: "Open"};
		this.setToOpen = this.setToOpen.bind(this);
		this.setToPending = this.setToPending.bind(this);
		this.setToIncomplete = this.setToIncomplete.bind(this);
	}
	//Update status depending on which button user selects
	setToOpen(){
		this.setState({cardStatus: "Open"});
	}
	setToPending(){
		this.setState({cardStatus: "Pending"});
	}
	setToIncomplete(){
		this.setState({cardStatus: "Incomplete"});
	}

	render(){
		//Display card depending on status
		// ---------- OPEN CARD ---------- //
		if (this.state.cardStatus==="Open"){
			return(	
				<div>
					<div className="buttons">
						<button onClick={this.setToOpen}>Open</button>
						<button onClick={this.setToPending}>Pending</button>
						<button onClick={this.setToIncomplete}>Incomplete</button>
					</div>
					<div className="card">
						<div className="cardHeader">
							<svg><path d="M26 0a26 26 0 1 0 26 26A26 26 0 0 0 26 0zm0 49a23 23 0 1 1 23-23 23 23 0 0 1-23 23zm12.5-13.5a1 1 0 0 1-1 1h-23a1 1 0 0 1 0-2h23a1 1 0 0 1 1 1zm-22-4v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1zm7 0v-10a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1zm7 0v-15a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1z" fill="#FFFFFF"/></svg>
							<div className="headerText">
								<h2>{openData.productLabel}</h2>
								<p>
									Investor Code: 
									<b> {openData.clientAccountGroupNumber}</b>
								</p>
							</div>
						</div>
						<div className="cardBody">
							<p>Total value</p>
							<h2>{openData.currencySymbol}{openData.marketValue.toFixed(2)}</h2>
							<p>Total available</p>
							<svg id="info" viewBox="0 0 20 20" width="20" height="20"><path d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0zm1 15H9V8h2zm-1-8a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" fill="#5dbdad"/></svg>
							<h3>{openData.currencySymbol}{openData.availableMarketValue.toFixed(2)}</h3>
							<p>Total funds:</p>
							<h3>{openData.funds.length}</h3>
							<p>Investing since: 
							<b id="investingDate"> {openDate[2]} {openDate[1]} {openDate[3]}</b>
							</p>
							<div className="bottomButtonDiv">
								<button id="viewFundButton">View fund</button>
							</div>
							<hr/>
							<div id="portfolioManager">
								<p>portfolio managed by</p>
								<img src={Sanlam}  alt="Portolio manager"/>
							</div>
						</div>
					</div>
				</div>
			);
		}
		// ---------- PENDING CARD ---------- //
		else if (this.state.cardStatus==="Pending"){
			return(	
				<div>
					<div className="buttons">
						<button onClick={this.setToOpen}>Open</button>
						<button onClick={this.setToPending}>Pending</button>
						<button onClick={this.setToIncomplete}>Incomplete</button>
					</div>
					<div className="card">
						<div className="cardHeader">
							<svg><path d="M26 0a26 26 0 1 0 26 26A26 26 0 0 0 26 0zm0 49a23 23 0 1 1 23-23 23 23 0 0 1-23 23zm12.64-27.81v6.15a1 1 0 1 1-2 0v-4.07l-8.22 7.2a1 1 0 0 1-1.33 0l-5-4.41-6.3 4.2v4H37a1 1 0 0 1 0 2H13.83V16.18a1 1 0 0 1 2 0v11.67L21.66 24a1 1 0 0 1 1.22.08l4.88 4.34 7.18-6.28h-3.49a1 1 0 1 1 0-2h6.18a.71.71 0 0 1 .21 0h.17a.71.71 0 0 1 .14.1 1.18 1.18 0 0 1 .18.13s0 .09.07.13a.64.64 0 0 1 .1.18.89.89 0 0 1 .14.51z" fill="#FFFFFF"/></svg>
							<div className="headerText">
								<h2>{pendingData.productLabel}</h2>
								<p>
									Investor Code: 
									<b> {pendingData.clientAccountGroupNumber}</b>
								</p>
							</div>
						</div>
						<div className="cardBody">
							<ProgressArc progress="1" text="100%" thickness="7" fillColor="#2875ca" size="100" textStyle={arcText}/>
							<div className="textBoxRight">
								<p>Well done! We have all the information we need.</p>
								<hr/>
								<p>Your investment is currently pending.</p>
							</div>
							<div className="textBoxBottom">
								<hr/>
								<p>Application submitted:</p>
								<h3>{pendingDate[2]} {pendingDate[1]} {pendingDate[3]}</h3>
								<p>Total funds:</p>
								<h3>{pendingData.funds.length}</h3>
								<hr/>
							</div>
						</div>
					</div>
				</div>
			);
		}
		// ---------- INCOMPLETE CARD ---------- //
		else if (this.state.cardStatus==="Incomplete"){
			return(	
				<div>
					<div className="buttons">
						<button onClick={this.setToOpen}>Open</button>
						<button onClick={this.setToPending}>Pending</button>
						<button onClick={this.setToIncomplete}>Incomplete</button>
					</div>
					<div className="card">
						<div className="cardHeader">
							<svg><path d="M26 0a26 26 0 1 0 26 26A26 26 0 0 0 26 0zm0 49a23 23 0 1 1 23-23 23 23 0 0 1-23 23zm12.64-27.81v6.15a1 1 0 1 1-2 0v-4.07l-8.22 7.2a1 1 0 0 1-1.33 0l-5-4.41-6.3 4.2v4H37a1 1 0 0 1 0 2H13.83V16.18a1 1 0 0 1 2 0v11.67L21.66 24a1 1 0 0 1 1.22.08l4.88 4.34 7.18-6.28h-3.49a1 1 0 1 1 0-2h6.18a.71.71 0 0 1 .21 0h.17a.71.71 0 0 1 .14.1 1.18 1.18 0 0 1 .18.13s0 .09.07.13a.64.64 0 0 1 .1.18.89.89 0 0 1 .14.51z" fill="#FFFFFF"/></svg>
							<div className="headerText">
								<h2>{incompleteData.productLabel}</h2>
								<p>
									Investor Code: 
									<b> TBC</b>
								</p>
							</div>	
						</div>
						<div className="cardBody">
							<ProgressArc progress="0.35" text="35%" thickness="7" fillColor="#f4a028" size="100" textStyle={arcText}/>
							<div className="textBoxRight">
								<p>
									Almost there! 
									<b> {incompleteData.percentageComplete}</b>
									% done with your application.
								</p>
								<hr/>
								<p>Pick up where you left off or</p>
								<button id="cancelButton">
									cancel
									<svg viewBox="0 0 26 26" width="15" height="15"><path d="M13 0a13 13 0 1 0 13 13A13 13 0 0 0 13 0zm5.7 17.29a1 1 0 0 1-1.41 1.41L13 14.41 8.71 18.7a1 1 0 0 1-1.41-1.41L11.59 13 7.3 8.71A1 1 0 0 1 8.71 7.3L13 11.59l4.29-4.29a1 1 0 0 1 1.41 1.41L14.41 13z" fill="#2875ca"/></svg>
								</button>
							</div>
							<div className="textBoxBottom">
								<hr/>
								<p>Last updated:</p>
								<h3>{incompleteDate[2]} {incompleteDate[1]} {incompleteDate[3]}</h3>
								<p>Total funds:</p>
								<h3>{incompleteData.funds.length}</h3>
								<hr/>
								<div className="bottomButtonDiv">
									<button id="applicationButton">Resume application</button>
								</div>
							</div>
						</div>
					</div>
				</div>	
			);
		}
	}
}