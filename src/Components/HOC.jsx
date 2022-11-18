import React, {useState, useEffect} from 'react'

function UpdatedComponent(OriginalComponent) {
    function NewComponent() {
        const [popular, setPopular] = useState([]);
        const[loading, setLoading] = useState(true);
        const[error, setError] = useState(null)
    

        useEffect(()=>{
            const getPopular = async()=>{
                fetch("https://api.spoonacular.com/recipes/random?apiKey=e2d392617b924963a2edb8e0e7a61b59&vegetarian=true&number=10")
                .then(res => {
                    if(!res){
                        throw Error("could not fetch data");
                    }
                    return res.json();
                })
                .then(data=>{
                    setPopular(data.recipes);
                    setLoading(false);
                })
                .catch(err =>{
                    setError(err.message);
                    setLoading(false);
                })
            }
            getPopular();
            }, [])   
            return <OriginalComponent popular={popular} loading={loading} error={error}/>
    }
    return NewComponent;
}

export default UpdatedComponent;
