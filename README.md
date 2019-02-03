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

2-3-19: Works only on local machine

### To set up the server locally:

-   git clone
-   cd into backend folder
-   run yarn to get dependancies
-   run "yarn start" to start
-   the server is set to listen on port 3300

#### DB Structure

This is preliminary, but my thoughts are:

stories:

[

    {

        id: 1, //`increment()`

        author: 'Anonymous', //`text('author', 128)`

        title: 'Bitcoin Saved my life', //`text('title', 128).notNullable().unique();`

        postDate: "12-3-17", //`timestamps(true, true)`

        snippet: 'I was able to survive, and rebild my life again, because I left with nothing but Bitcoin', //`text('snippet', 255)`

        approved: true // `boolean('approved')`

        approvedBy: user_id // `integer('user_id').unsigned().references('id').inTable('users')`

        body: 'A friends of mine, one fo the first tech CEOs in Afghanistan, in 2014, was needing to pay her employees, young women. But their uncles, brothers and husbands would not let them open bank accounts. The men want to control everything there and paypall was banned and all that. So, she paid them in Bitcoin. They would keep their bitcoins in a hot wallet on their phones and come home and their husbands would not have any idea where the money was, etc. One of these young women had to flee Afghanistan. She was a victim of political violence and had to leave. She went on foot as a refugee through Iran, Turkey, and eventually settled in Germany. During this time, her Bitcoin, which she took with her, had accumulated in value quite a bit and she was entirely able to rebuild her life in Germany.' //`text('body').notNullable()`

    }

]

users:

[

    {

        id: 1, //`increment()`

        username: 'Jeff', //`text('username', 255).notNullable().unique();`

        password: '#############', //`text('password', 255).notNullable()`

        first: 'Jeff', //`text('firstName', 255)`

        last: 'Jefferson', //`text('lastName', 255)`

    }

]

##### Stretch:

refugeeOrganizations:

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
