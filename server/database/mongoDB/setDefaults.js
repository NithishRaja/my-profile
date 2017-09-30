
module.exports = function(mongo){
  var aboutCollection = mongo.DB.collection("profile");

  var query = {};

  var newProfileDocument = {
    $setOnInsert: {
      "about": {
        "name": {
          "first": "nithish",
          "middle": null,
          "last": "raja"
        },
        "age": 20,
        "sex": "male",
        "birth": {
          "year": 1998,
          "month": "may",
          "date": 5,
          "day": "tuesday"
        },
        "languages": [
          "tamil",
          "english",
          "hindi"
        ]
      },
      "contactInfo": {
        "email": [
          "nithishraja@ymail.com",
          "f20160388@hyderabad.bits-pilani.ac.in"
        ],
        "mobile": [
          9500666287
        ],
        "socialMedia": [
          ["facebook", "https://www.facebook.com/nithish.raja.94"],
          ["linkedIn", "https://www.linkedin.com/in/nithish-raja-1a81ba140/"]
        ],
        "location": {
          "lattitude": 17.5449703,
          "longitude": 78.5716459,
          "address": "Shameerpet Mandal, Jawahar Nagar, Hyderabad, Telangana 500078, India"
        }
      },
      "bio": {
        "intro": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget massa nec turpis congue bibendum. Integer nulla felis, porta suscipit nulla et, dignissim commodo nunc. Morbi a semper nulla. Proin mauris odio, pharetra quis ligula non, vulputate vehicula quam. Nunc in libero vitae nunc ultricies tincidunt ut sed leo. Sed luctus dui ut congue consequat. Cras consequat nisl ante, nec malesuada velit pellentesque ac. Pellentesque nec arcu in ipsum iaculis convallis.",
        "image": "https://scontent.fmaa1-2.fna.fbcdn.net/v/t1.0-9/10440859_601474259958235_8977662972349909950_n.jpg?oh=964e56b70d249079890ba84db6426c08&oe=5A4EC500"
      },
      "featuredImage": "https://spark.adobe.com/images/landing/examples/hiking-fb-cover.jpg",
      "albumCover": [
        "https://scontent.fmaa1-1.fna.fbcdn.net/v/t1.0-9/1186671_419534531485543_857767581_n.jpg?oh=cef8fca5f2f158bf5861fe17f6c1b13b&oe=5A543B52",
        "https://scontent.fmaa1-1.fna.fbcdn.net/v/t1.0-9/943044_482271998560193_423635541_n.jpg?oh=1c071c38c3b255ccecbadd57023840d5&oe=5A4BA11A",
        "https://scontent.fmaa1-1.fna.fbcdn.net/v/t1.0-9/1235250_419538778151785_393666073_n.jpg?oh=856f70afc87a42de45f38ead55dd2a42&oe=5A16DE9D"
      ],
      "albumImages": [
        {
          "id":0,
          "title": "tenth Tour",
          "images": [
            "https://scontent.fmaa1-1.fna.fbcdn.net/v/t1.0-9/1186671_419534531485543_857767581_n.jpg?oh=cef8fca5f2f158bf5861fe17f6c1b13b&oe=5A543B52",
            "https://scontent.fmaa1-1.fna.fbcdn.net/v/t1.0-9/943044_482271998560193_423635541_n.jpg?oh=1c071c38c3b255ccecbadd57023840d5&oe=5A4BA11A",
            "https://scontent.fmaa1-1.fna.fbcdn.net/v/t1.0-9/1235250_419538778151785_393666073_n.jpg?oh=856f70afc87a42de45f38ead55dd2a42&oe=5A16DE9D"
          ]
        },
        {
          "id":1,
          "title": "shakthi birthday",
          "images": [
            "https://scontent.fmaa1-1.fna.fbcdn.net/v/t1.0-9/10429851_696932123695665_253734662921625520_n.jpg?oh=e6917bf9d005d72de703d9c3cf2db5bb&oe=5A603048",
            "https://scontent.fmaa1-1.fna.fbcdn.net/v/t1.0-9/11666248_871340956254780_2305277860614050044_n.jpg?oh=60abb6580b4eeae2e7725138acf6691f&oe=5A5BA064"
          ]
        },
        {
          "id":2,
          "title": "balaji birthday",
          "images": [
            "https://scontent.fmaa1-1.fna.fbcdn.net/v/t1.0-9/62847_493843140671232_135075184_n.jpg?oh=5cc4b3c572c49a1e88ff5ecd7f2e45e3&oe=5A5B66F8",
            "https://scontent.fmaa1-1.fna.fbcdn.net/v/t1.0-9/558082_493843877337825_1028383797_n.jpg?oh=1a2b14fdf5f94b7491acd54a830710ef&oe=5A531E6D"
          ]
        },
        {
          "id":3,
          "title": "college basketball",
          "images": [
            "https://scontent.fmaa1-1.fna.fbcdn.net/v/t1.0-9/18057063_1460764353975303_762660756914081102_n.jpg?oh=1b0fde7cf033a54fd2852e7011176761&oe=5A145E0A"
          ]
        },
        {
          "id":4,
          "title": "college tamil sangam",
          "images": [
            "https://scontent.fmaa1-1.fna.fbcdn.net/v/t1.0-9/15965846_1144171759035263_1294149911768877393_n.jpg?oh=b4e5900da1f01c33b930352720a04acb&oe=5A4415C9"
          ]
        }
      ],
      "blogContent": [
        {
          "id": 0,
          "topic": "Yes, Some Questions Are Better Than Others",
          "content": [
            {
              "heading": null,
              "paragraph": "To appreciate that some questions are better than others, it helps to consider a few examples of questions that are bad."
            },
            {
              "heading": null,
              "paragraph": "To find them, try playing Twenty Questions with a young child. In trying to guess an animal, a young child might ask: Is it a koala? Is it an elephant? (Not: Is it a mammal? Does it live in Africa?) These are bad questions in the sense that they're unlikely to yield an efficient solution to the problem of discovering the animal one's adversary has chosen."
            },
            {
              "heading": null,
              "paragraph": "In the simplified world of Twenty Questions, it's relatively easy to evaluate what makes a question good or bad. Unfortunately, generating good questions in the real world is often a more complicated affair."
            }
          ]
        },
        {
          "id": 1,
          "topic": "Has the LHC found any practical uses for the Higgs boson?",
          "content": [
            {
              "heading": null,
              "paragraph": "In July 2012, the announcement came that the Large Hadron Collider had found evidence for the Higgs boson. Scientists rejoiced. Researchers applauded. Physicists wept. Hardcore fans of the LHC wept, too, but everyone else mostly stood around the coffee maker at work and said, \"So, we can travel through time now, right?\""
            },
            {
              "heading": null,
              "paragraph": "From just a glimpse of the breathless media coverage and the images of physicists in Switzerland popping champagne, the layperson could easily figure out that finding the Higgs was a Big Deal. But what exactly that Big Deal had to do with our Little Lives was a little trickier to answer. Exactly what does it mean, from a practical sense?"
            }
          ]
        }
      ]
    }
  };

  var options = {
    upsert: true,
    returnOriginal: false
  }

  // if data doesn't exist update database
  aboutCollection.findOneAndUpdate(query, newProfileDocument, options, function(err, res){
    console.log("default values set");
  });

}
