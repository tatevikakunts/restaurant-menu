import React, {Component} from "react";
import Meal from "./Meal";
import Loading from "./Loading";

export default class Meals extends Component{
constructor(props) {
    super(props);
    this.state={
        meals:null,
        isLoading:true,
        error:null
    }
}
renderMeals(){
    if(this.state.isLoading){
        return(
            <Loading/>
        )
    }
    return(this.state.meals.map((meal)=>(<Meal key = {meal.idMeal} meal={meal}/>)))
}
componentDidMount() {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Japanese").then(response=>response.json()).then(data=>this.setState({isLoading:false, meals:data.meals}))
}
render(){
    return(
        <section className="container">
            <h1 className="text-center">Our Japanese Menu</h1>
            <div className="row mt-5">
                {this.renderMeals()}
            </div>
        </section>
    )
}
}