This is a simple way to generate fake JSON data to test applications.

This application uses lodash, and faker please download these packages

The generate.js script creates 50 people that look like this

  {
    "id": 0,
    "name": "Caterina Walker",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/sasha_shestakov/128.jpg"
  },

the script also creates 50 card objects that look like this

[
  {
    "id": 0,
    "card": {
      "name": "Stewart Hoeger",
      "username": "Gilbert82",
      "email": "Manley_Reynolds@gmail.com",
      "address": {
        "streetA": "Jesus Lane",
        "streetB": "19315 Thompson Springs",
        "streetC": "389 Adonis Green Apt. 650",
        "streetD": "Apt. 610",
        "city": "Geraldineville",
        "state": "Ohio",
        "country": "China",
        "zipcode": "50294-3314",
        "geo": {
          "lat": "-84.8597",
          "lng": "-7.7609"
        }
      },
      "phone": "1-381-193-2902",
      "website": "magnolia.com",
      "company": {
        "name": "Maggio - Schuster",
        "catchPhrase": "Multi-layered dynamic software",
        "bs": "integrated expedite e-services"
      },
      "posts": [
        {
          "words": "quod commodi sunt",
          "sentence": "Ut accusantium eos perferendis.",
          "sentences": "Necessitatibus rerum voluptatem incidunt maxime qui laudantium fuga sunt. Consectetur et blanditiis cum nulla eveniet minima consequuntur. Consequatur distinctio dolorum qui beatae velit quisquam animi et provident.",
          "paragraph": "Magni unde debitis labore suscipit. Nobis nam est eos repudiandae tempora omnis laborum qui minima. Aut aliquam fugiat ea enim sed reiciendis corporis. Repellendus officiis ipsam hic. Cupiditate optio explicabo similique et repellat. Similique deleniti sint ab."
        },
        {
          "words": "cumque facilis sit",
          "sentence": "Officiis aut vel saepe vel corrupti.",
          "sentences": "Et at cupiditate aut. Laboriosam in voluptas dolores et molestiae.",
          "paragraph": "Eum non omnis. Consequatur illo a dolore id doloremque provident illo et odio. Esse illum sequi ut. Dolor sint qui. Porro veritatis asperiores sunt quasi placeat beatae sed."
        },
        {
          "words": "omnis nihil ipsum",
          "sentence": "Tempora et aut sed qui quas.",
          "sentences": "Fugit repellendus qui. Harum vel hic libero harum numquam ipsum voluptatem fugiat incidunt.",
          "paragraph": "Alias et sint. Reprehenderit et voluptas similique aspernatur magnam suscipit. Pariatur ut ea sapiente."
        }
      ],
      "accountHistory": [
        {
          "amount": "225.65",
          "date": "2012-02-02T06:00:00.000Z",
          "business": "Dicki, Hyatt and Conroy",
          "name": "Money Market Account 9650",
          "type": "payment",
          "account": "33335527"
        },
        {
          "amount": "866.38",
          "date": "2012-02-02T06:00:00.000Z",
          "business": "Kohler - Dach",
          "name": "Investment Account 8497",
          "type": "withdrawal",
          "account": "39434548"
        },
        {
          "amount": "683.24",
          "date": "2012-02-02T06:00:00.000Z",
          "business": "Schaefer, Champlin and Kozey",
          "name": "Money Market Account 4644",
          "type": "invoice",
          "account": "75162962"
        }
      ]
    }
  },
