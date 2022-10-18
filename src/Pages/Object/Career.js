import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {gql, useQuery} from "@apollo/client";

const GET_CAREER = gql`
    query getCareers(_id : Int){
        _id
        academic_level
        name
        SNIES_code
        credits
        departament
        faculty
        campus
        pensum
    }
`

export default function career(){
    const {id} = useParams();
    const {data,error,loading} = useQuery(GET_CAREER, {
        arguments : {_id:id}
    });
}

    if(error) return <div>error</div>
    if(loading) return <div>Cargando</div>
    const {career} = data

return(
    <div>
        <div>
            <h1>{_id}</h1>
        </div>
        <div>
            {career.posts.map(post => {
                return <Post
                    _id={career._id}
                />
            })

            }
        </div>
    </div>
)