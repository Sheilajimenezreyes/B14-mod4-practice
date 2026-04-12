export async function nowPlaying() {
    try {
        const request = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=es-EU&page=2', {
            method: 'GET',
            headers: {
                Accept: "application/json",
                authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDZjMGQ1YzRlZjJlZmZlNmRmYjdhYjc0OWY5MDc3YSIsIm5iZiI6MTc3NTkwODQ2OS4yOTEwMDAxLCJzdWIiOiI2OWRhMzY3NTg0Y2Q4Nzk3MDkxZDhmNDUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Fi_axX_hAoL-loX7RpBeNrsR3MlcFUZaqH31pYqQDtM"
            }
        })
        if (request.ok) {
            const response = await request.json()
            return response.results;
        }

    }catch(error){
        console.error(error.message)
    }
    
}

export async function bestRating() {
    try {
        const request = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=es-EU&page=1', {
            method: 'GET',
            headers: {
                Accept: "application/json",
                authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDZjMGQ1YzRlZjJlZmZlNmRmYjdhYjc0OWY5MDc3YSIsIm5iZiI6MTc3NTkwODQ2OS4yOTEwMDAxLCJzdWIiOiI2OWRhMzY3NTg0Y2Q4Nzk3MDkxZDhmNDUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Fi_axX_hAoL-loX7RpBeNrsR3MlcFUZaqH31pYqQDtM"
            }
        })
        if (request.ok) {
            const response = await request.json()
            return response.results;
        }

    }catch(error){
        console.error(error.message)
    }
    
}

export async function popular() {
    try {
        const request = await fetch('https://api.themoviedb.org/3/movie/popular?language=es-EU&page=1', {
            method: 'GET',
            headers: {
                Accept: "application/json",
                authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDZjMGQ1YzRlZjJlZmZlNmRmYjdhYjc0OWY5MDc3YSIsIm5iZiI6MTc3NTkwODQ2OS4yOTEwMDAxLCJzdWIiOiI2OWRhMzY3NTg0Y2Q4Nzk3MDkxZDhmNDUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Fi_axX_hAoL-loX7RpBeNrsR3MlcFUZaqH31pYqQDtM"
            }
        })
        if (request.ok) {
            const response = await request.json()
            return response.results;
        }

    }catch(error){
        console.error(error.message)
    }
    
}

export async function upcoming(){
    try{
        const request = await fetch ('https://api.themoviedb.org/3/movie/upcoming?language=es-EU&page=1',{
            method: 'GET',
            headers:{
                Accept: "application/json",
                authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDZjMGQ1YzRlZjJlZmZlNmRmYjdhYjc0OWY5MDc3YSIsIm5iZiI6MTc3NTkwODQ2OS4yOTEwMDAxLCJzdWIiOiI2OWRhMzY3NTg0Y2Q4Nzk3MDkxZDhmNDUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Fi_axX_hAoL-loX7RpBeNrsR3MlcFUZaqH31pYqQDtM"
            }
        })
        if(request.ok){
            const response = await request.json()
            return response.results
        }
    }catch(error){
        console.error(error.message)
    }
}
