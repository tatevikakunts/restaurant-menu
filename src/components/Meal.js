import React from "react";

const Meal = ({meal})=>{
    return(
        <div className="col-md-4">
            <div className="card border border-danger p-2 mb-2">
                <img src={meal.strMealThumb} alt=""/>
                <div className="card-body">
                    <h3 className="card-title mb-4">
                        {meal.strMeal}
                    </h3>
                    <button type="button" className="btn btn-danger shadow">Order Now</button>
                </div>
            </div>
        </div>
    )
}
export default Meal