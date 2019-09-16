import { Selector, ClientFunction, RequestMock } from 'testcafe';

// the fixture
fixture `Home`
    .page `http://localhost:8080`;  // specify the start page

const getLocation = ClientFunction(() => document.location.href);

const mock = RequestMock()
    .onRequestTo("http://www.omdbapi.com/?s=harry&apiKey=6c3a2d45")
    .respond({ data: {
        "Search":[
            {  
                "Title":"Harry Potter and the Deathly Hallows: Part 2",
                "Year":"2011",
                "imdbID":"tt1201607",
                "Type":"movie",
                "Poster":"https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
            },
            {
                "Title":"Harry Potter and the Sorcerer's Stone",
                "Year":"2001",
                "imdbID":"tt0241527",
                "Type":"movie",
                "Poster":"https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
            }]
    }}, 500, {
        'access-control-allow-credentials': true,
        'access-control-allow-origin': '*'
    })
    .onRequestTo('http://www.omdbapi.com/?i=tt0241527&plot=full&apikey=PlzBanM3')
    .respond({ data: {
        "Title":"Harry Potter and the Sorcerer's Stone",
        "Year":"2001",
        "Rated":"PG",
        "Released":"16 Nov 2001",
        "Runtime":"152 min",
        "Genre":"Adventure, Family, Fantasy",
        "Director":"Chris Columbus",
        "Writer":"J.K. Rowling (novel), Steve Kloves (screenplay)",
        "Actors":"Richard Harris, Maggie Smith, Robbie Coltrane, Saunders Triplets",
        "Plot":"This is the tale of Harry Potter, an ordinary 11-year-old boy serving as a sort of slave for his aunt and uncle who learns that he is actually a wizard and has been invited to attend the Hogwarts School for Witchcraft and Wizardry. Harry is snatched away from his mundane existence by Hagrid, the grounds keeper for Hogwarts, and quickly thrown into a world completely foreign to both him and the viewer. Famous for an incident that happened at his birth, Harry makes friends easily at his new school. He soon finds, however, that the wizarding world is far more dangerous for him than he would have imagined, and he quickly learns that not all wizards are ones to be trusted.",
        "Language":"English",
        "Country":"UK, USA",
        "Awards":"Nominated for 3 Oscars. Another 17 wins & 62 nominations.",
        "Poster":"https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
        "Ratings":[{"Source":"Internet Movie Database","Value":"7.6/10"},{"Source":"Rotten Tomatoes","Value":"81%"},{"Source":"Metacritic","Value":"64/100"}],
        "Metascore":"64",
        "imdbRating":"7.6",
        "imdbVotes":"578,255",
        "imdbID":"tt0241527",
        "Type":"movie",
        "DVD":"28 May 2002",
        "BoxOffice":"$317,557,891",
        "Production":"Warner Bros. Pictures",
        "Website":"http://movies.warnerbros.com/awards/harry.html","Response":"True"
    }}, 500, {
        'access-control-allow-credentials': true,
        'access-control-allow-origin': '*'
    });

test('The header is loaded properly', async testController => {
    const paragraphSelector = await new Selector('body .header .app-title');
    await testController.expect(paragraphSelector.innerText).eql('MovieBox');
});

/* test('Should show loading icon when clicked on Search after enering valid search string', async t => {
    await t
        .typeText('.movie-title-input','harry')
        .click('.btn-search-movie')
        
        const loadingSpinner = await new Selector('.spinner-grow');
        await t.expect(loadingSpinner.visible).ok();
});
 */

test('Should show result movie block clicked on Search after enering valid search string', async t => {
    await t
        .typeText('.movie-title-input','harry')
        .click('.btn-search-movie')
        
        const loadingSpinner = await new Selector('.movie-block');
        await t.expect(loadingSpinner.visible).ok();
});

test('Should show Featured page when clicked on featured option', async t => {
    await t
        .typeText('.movie-title-input','harry')
        .click('.featured-option')
        
        const featuredPage = await new Selector('.featured-container');
        await t.expect(featuredPage.visible).ok();
});

test('Should render featured movie blocks when clicked on featured option', async t => {
    await t
        .typeText('.movie-title-input','harry')
        .click('.featured-option')
        
        const featuredPage = await new Selector('.movie-block');
        await t.expect(featuredPage.visible).ok();
});

// TODO : The Mock API here is not working as expected. The URL of server call is modified when running under testcafe : Need to search this later
/* test('Should make API call when Search option is clicked', async t => {
    await t
        .typeText('.movie-title-input','harry')
        .click('.btn-search-movie')
        
        const MovieBlock = await new Selector('.movie-block .movie-title');
        await t.expect(MovieBlock.visible).ok();
}); */