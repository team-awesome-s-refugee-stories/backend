# Backend

### Pitch

People visiting the site will gain a better understanding of the refugee crisis
and what it means to be a refugee. There are more people displaced in the world
today than at any time since the end of World War II and it is more important
than ever to help people develop empathy for each other.

#### MVP

As an admin I can log in and approve or reject submitted stories. As a refugee I
can come to the site and submit my story without logging in.

#### Stretch

Create a connect page that shows a google map to show the nearest refugee
organizations near you to volunteer with.

## SERVER STATUS:

2-4-19: Works only on local machine

### To set up the server locally:

-   git clone
-   cd into backend folder
-   run `yarn` to get dependancies
-   run `yarn start` to start server
-   the server is set to listen on port 3300
-   sending a `GET` request to `http://localhost:3300/` should recieve the
    status code "API running"

## ACTIVE API Routs

#### Sanity Check:

`GET` `/`

RETURNS:

```
"API running"
```

---

#### Register a new user:

`POST` `/api/register`

Send with Body:

```
{
    username: "username",
    password: "password",
    first: "first",
    last: "last"
}
```

RETURNS:

```
[ id ] //where id is the id of the new user
```

---

#### Login a user:

`POST` `/api/login`

Send with Body:

```
{
    username: "username",
    password: "password"
}
```

RETURNS:

```
{
    "loggedInAs": admin,
    "token": ...KJGVFKJHDVAKDJBF...
}
```

Be sure to save the token in localStorage, in redux this might look like:

```
case LOGIN_SUCCESS:
    localStorage.setItem('jwt', action.payload.data.token);
    return {
        ...state,
        logingIn: false
    };
```

Token expires after 30min (subject to change).

---

#### Get all possible stories:

`GET` `/api/allstories`

Send with header:

```
{
    authorization : token
}
```

Accessing this token from local storage in a redux fashion might look like this:

```
export const getAllStories = () => dispatch => {
	const token = localStorage.getItem('jwt');
	const requestOptions = {
		headers: {
			authorization: token
		}
	};
	dispatch({type: STORYLIST_START});
	axios
		.get(`${endpoint}/api/allstories`, requestOptions)
		.then(...
```

RETURNS:

```
[ ... all info about all of the stories ... ]
```

---

#### From all possible stories, get one by an ID:

`GET` `/api/allstories/:id`

Send with header:

```
{
    authorization : token
}
```

RETURNS:

```
{ ... info about story with specific id ... }
```

---

#### Get approved stories:

`GET` `/api/stories`

RETURNS:

```
[ ... all info about all of the stories which have been approved ... ]
```

---

#### From all approved stories, get one by an ID:

`GET` `/api/stories/:id`

RETURNS:

```
{ ... info about story with specific id, so long as that story is approved ... }
```

---

#### Add a new story:

`POST` `/api/submit`

Send with body:

```
{
    author: "Anonomous",
    title: "We crossed at gunpoint",
    body: "... story story story...",
    country: "Afghanistan"
}
```

RETURNS:

```
[ id ] // where id is the id of the submitted story
```

---

#### Delete a story:

`DELETE` `/api/deletestory/:id` where `:id` is the `id` of the story to be
deleted.

Send with header:

```
{
    authorization : "token"
}
```

RETURNS:

```
1
```

---

#### UPDATE, EDIT, or APPROVE a story

`PUT` `/api/update/:id` where `:id` is the `id` of the story to be updated.

Send with header:

```
{
    Authorization : "token"
}
```

Send with Body:

```
{
    author: "Anonomous",
    title: "Bitcoin",
    snippet: "I was able to...",
    approved: false,
    body: "...A friends of mine, ...",
    country: "Afghdfanistan",
    url_picture: 'www.hello.com/fred.gif'
    url_thumbnail: 'www.hello.com/fred_small.gif'
}
```

(If you leave any field out of the object, it will default to its previous
state)

RETURNS:

```
1
```

## DB Structure

This is preliminary, but my thoughts are:

stories:

```
[
    {
        id: 1,
        author: 'Anonymous',
        title: 'Bitcoin Saved my life',
        postDate: "12-3-17",
        snippet: 'I was able to survive, and rebild my life again, because I left with nothing but Bitcoin',
        approved: true,
        approved_by_user_id: user_id,
         body: 'A friends of mine, one fo the first tech CEOs in Afghanistan, in 2014, was needing to pay her employees, young women. But their uncles, brothers and husbands would not let them open bank accounts. The men want to control everything there and paypall was banned and all that. So, she paid them in Bitcoin. They would keep their bitcoins in a hot wallet on their phones and come home and their husbands would not have any idea where the money was, etc. One of these young women had to flee Afghanistan. She was a victim of political violence and had to leave. She went on foot as a refugee through Iran, Turkey, and eventually settled in Germany. During this time, her Bitcoin, which she took with her, had accumulated in value quite a bit and she was entirely able to rebuild her life in Germany.'
        country: Afghanistan
        url_picture: 'www.hello.com/fred.gif'
        url_thumbnail: 'www.hello.com/fred_small.gif'
    }
]
```

users:

```
[
    {
        id: 1,
        username: 'Jeff',
        password: '#############',
        first: 'Jeff',
        last: 'Jefferson'
    }
]
```

##### Stretch:

refugeeOrganizations:

```

[
    {
        id: 1,
        name: Refugees R us
        address:
        website:
        email:
        gpslocation:
    }
]

```
