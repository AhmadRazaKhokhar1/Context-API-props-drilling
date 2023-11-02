import React from 'react'
import {data, data1, class1} from '../App'
const ChildC = () => {
  return (
    <div>
      <data.Consumer>
        {
            (name)=>{
                return(
                    <data1.Consumer>
                      {(gender)=>{
                        return(
                            <class1.Consumer>
                                {
                                        (age)=>{
                                            return(
                                            <div className="flex">
                                            <ul>
                                                <li>{name}</li>
                                                <li>{gender}</li>
                                                <li>{age}</li>
                                            </ul>
                                        </div>
                                    )

                                        }
                               
                      }
                            </class1.Consumer>
                        )
                      }}
                    </data1.Consumer>
                )
            }
        }
      </data.Consumer>
    </div>
  )
}

export default ChildC